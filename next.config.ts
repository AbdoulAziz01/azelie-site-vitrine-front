import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Autorise l'accès au serveur de dev depuis le téléphone sur le réseau
  // local (IP LAN du PC). Next.js bloque par défaut les requêtes dev
  // cross-origin ; à mettre à jour si l'IP locale change (voir `ipconfig`).
  allowedDevOrigins: ["192.168.1.9", "192.168.1.9:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
