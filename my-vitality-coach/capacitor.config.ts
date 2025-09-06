import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myvitalitycoach.app',
  appName: 'My Vitality Coach',
  webDir: 'out',
  bundledWebRuntime: false,
  // MODO REMOTO: Descomente as linhas abaixo e comente a linha webDir acima
  // server: {
  //   url: 'https://my-vitality-coach.vercel.app',
  //   cleartext: true
  // },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#1a1f3f",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  android: {
    buildOptions: {
      keystorePath: './my-vitality-coach.keystore',
      keystoreAlias: 'my-vitality-coach',
    }
  },
  ios: {
    contentInset: "always",
    scheme: "myvitalitycoach",
    preferredContentMode: "mobile"
  },
  cordova: {}
};

export default config;