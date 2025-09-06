# Guia de Publicação do My Vitality Coach

Este documento contém instruções para publicar o My Vitality Coach nas lojas de aplicativos Google Play Store e Apple App Store.

## Índice

1. [Requisitos](#requisitos)
2. [Configurações Iniciais](#configurações-iniciais)
3. [Construção do Aplicativo](#construção-do-aplicativo)
4. [Publicação no Google Play Store](#publicação-no-google-play-store)
5. [Publicação na Apple App Store](#publicação-na-apple-app-store)
6. [Alternando entre Modo Remoto e Estático](#alternando-entre-modo-remoto-e-estático)
7. [Materiais Gráficos](#materiais-gráficos)

## Requisitos

### Pré-requisitos Gerais

- Node.js 16 ou superior
- npm ou yarn
- Git

### Para Android

- Android Studio instalado
- JDK 11 ou superior
- Conta no Google Play Console ($25 taxa única)
- Chave de assinatura (keystore)

### Para iOS

- Mac com macOS 10.15 ou superior
- Xcode 13 ou superior
- Conta Apple Developer ($99/ano)
- Certificados de assinatura e perfil de provisionamento

## Configurações Iniciais

### 1. Clone e instale as dependências

```bash
git clone https://github.com/seu-usuario/my-vitality-coach.git
cd my-vitality-coach
npm install
```

### 2. Configurar variáveis de ambiente

Certifique-se de que as seguintes variáveis estão configuradas no `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://rtgbitryyxdnizezhxpm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
```

## Construção do Aplicativo

### 1. Inicialize o Capacitor (primeira vez)

```bash
npm run cap-init
npm run cap-add-android
npm run cap-add-ios
```

### 2. Construa a aplicação e sincronize com Capacitor

```bash
npm run build-mobile
```

## Publicação no Google Play Store

### 1. Gerar o APK/AAB assinado

```bash
npm run build-android
```

Isto abrirá o Android Studio. Depois:

1. Vá para **Build > Generate Signed Bundle/APK**
2. Selecione **Android App Bundle** (recomendado para Play Store)
3. Configure sua keystore:
   - Crie uma nova ou use uma existente
   - Preencha o caminho da keystore, senha e alias
4. Selecione destino `release` e conclua

O arquivo AAB será gerado em `android/app/release/`.

### 2. Publicar no Google Play Console

1. Acesse [Google Play Console](https://play.google.com/console)
2. Crie um novo aplicativo
3. Preencha os detalhes do aplicativo:
   - Nome: My Vitality Coach
   - Idioma padrão: Português (Portugal)
   - Tipo de app: Aplicativo
   - Gratuito ou pago: Escolha a opção desejada
4. Crie uma nova versão na seção "Produção"
5. Carregue o AAB gerado
6. Preencha notas de versão e configurações de países
7. Revise e envie para revisão

## Publicação na Apple App Store

### 1. Configurar o Xcode

```bash
npm run build-ios
```

Isto abrirá o Xcode. Depois:

1. Selecione o target do app e a equipe de desenvolvimento
2. Configure o Bundle Identifier: `com.myvitalitycoach.app`
3. Verifique que a versão e build number estão corretos
4. Resolva quaisquer erros de assinatura

### 2. Criar o arquivo para distribuição

1. No Xcode, selecione **Product > Archive**
2. Quando o arquivo for criado, clique em **Distribute App**
3. Selecione **App Store Connect**
4. Siga o assistente de distribuição, mantendo as opções padrão
5. Clique em **Upload**

### 3. Enviar para a App Store

1. Acesse [App Store Connect](https://appstoreconnect.apple.com)
2. Vá para **Meus Apps** e selecione My Vitality Coach
3. Crie uma nova versão
4. Preencha todos os metadados:
   - Screenshots (6-10 imagens para cada tamanho de dispositivo)
   - Descrição, palavras-chave, URL de suporte
   - URL da política de privacidade
   - Informações de contato
5. Após completar todos os campos, envie para revisão

## Alternando entre Modo Remoto e Estático

O Capacitor pode ser configurado para dois modos de operação:

### Modo Remoto

Este modo carrega o aplicativo diretamente da URL hospedada na Vercel. É mais fácil de manter atualizado pois não requer novo deploy nas lojas quando o conteúdo muda.

Para configurar o modo remoto, edite `capacitor.config.ts`:

```typescript
// Comentar a linha webDir
// webDir: 'out',

// Descomentar as linhas abaixo
server: {
  url: 'https://my-vitality-coach.vercel.app',
  cleartext: true
},
```

### Modo Estático

Este modo empacota a aplicação diretamente no app, o que pode ser mais rápido e funcionar offline, mas requer novos deploys quando o conteúdo muda.

Para configurar o modo estático, edite `capacitor.config.ts`:

```typescript
// Descomentar a linha webDir
webDir: 'out',

// Comentar as linhas abaixo
// server: {
//   url: 'https://my-vitality-coach.vercel.app',
//   cleartext: true
// },
```

Após mudar entre os modos, sempre execute:

```bash
npm run build-mobile
```

## Materiais Gráficos

### Google Play Store

- **Ícone da aplicação**: 512x512px PNG
- **Feature Graphic**: 1024x500px PNG
- **Screenshots**: 16:9 recomendado (pelo menos 3)
- **Vídeo promocional**: Opcional, mas recomendado

### Apple App Store

- **Ícone da aplicação**: 1024x1024px PNG
- **Screenshots**:
  - iPhone: 1290x2796px (iPhone 14 Pro Max)
  - iPad: 2048x2732px (iPad Pro 12.9")
- **Vídeo de pré-visualização**: Opcional, 15-30 segundos

## Checklist Final

- [ ] App testado em diferentes dispositivos
- [ ] Login com Google funciona no app
- [ ] URLs de callback configuradas corretamente no Google OAuth
- [ ] Deep links funcionam corretamente
- [ ] Notificações push configuradas
- [ ] Política de privacidade acessível
- [ ] Imagens e ícones de alta qualidade
- [ ] Detalhes da aplicação preenchidos corretamente nas lojas