

## App de Notificação Push — Plano

### O que será construído
Um app minimalista com **um único botão** no centro da tela escrito **"Notificação"**. Ao clicar:
1. O botão mostra um feedback visual (ex: "Enviando em 5s...")
2. Após **5 segundos**, uma **notificação push real** aparece no celular (mesmo com o app minimizado)

### Tela única
- Fundo limpo e simples
- Um botão grande e centralizado escrito **"Notificação"**
- Contador regressivo de 5 segundos após o clique
- Notificação real do sistema operacional com título e mensagem personalizados

### Tecnologia
- **Capacitor** para transformar em app nativo Android
- **@capacitor/local-notifications** para enviar notificações locais reais (push pop-up no dispositivo)
- Gera um **APK** que você instala diretamente no celular sem precisar da Play Store

### Como você vai instalar
Após a implementação, você vai:
1. Exportar o projeto para o GitHub
2. Clonar no seu computador
3. Rodar alguns comandos para gerar o APK
4. Transferir o APK para o celular e instalar

