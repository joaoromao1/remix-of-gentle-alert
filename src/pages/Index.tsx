import { useState, useEffect, useCallback } from "react";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [countdown, setCountdown] = useState<number | null>(null);

  const scheduleNotification = useCallback(async () => {
    // Request permission
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== "granted") {
      alert("Permissão de notificação negada!");
      return;
    }

    setCountdown(5);

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "🔔 Notificação!",
          body: "Sua notificação chegou!",
          id: Date.now(),
          schedule: { at: new Date(Date.now() + 5000) },
          sound: undefined,
          actionTypeId: "",
          extra: null,
        },
      ],
    });
  }, []);

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const isWaiting = countdown !== null && countdown > 0;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <Button
          onClick={scheduleNotification}
          disabled={isWaiting}
          size="lg"
          className="text-xl px-12 py-8 rounded-2xl shadow-lg"
        >
          {isWaiting ? `Enviando em ${countdown}s...` : "Notificação"}
        </Button>

        {countdown === 0 && (
          <p className="text-muted-foreground text-sm animate-fade-in">
            ✅ Notificação enviada!
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
