import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Para deploys (Vercel/Lasy) ficarem portáteis
  output: "standalone",

  // Domínios de imagens remotas usados no app
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Deixa as rotas tipadas desligadas (evita warnings chatos)
  experimental: {
    typedRoutes: false,
  },

  // Webpack: evita erros de módulos Node no browser
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    return config;
  },

  // Mantém o lint ativo
  eslint: { ignoreDuringBuilds: false },

  // ⚠️ Se precisares só para destravar o preview, muda para true
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;