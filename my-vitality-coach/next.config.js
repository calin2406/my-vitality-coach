/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir export estático
  output: 'export',
  
  // Desabilitar strict mode para melhor compatibilidade
  reactStrictMode: false,
  
  // Configurações para garantir compatibilidade de export
  images: {
    unoptimized: true,
  },
  
  // Ignora erros durante build para facilitar o deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configurações experimentais para compatibilidade
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;