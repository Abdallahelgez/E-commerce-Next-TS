import type { NextConfig } from "next";
import nextI18NextConfig from './next-i18next.config';
const nextConfig: NextConfig = {
   images: {
    domains: ['fakestoreapi.com'],
  },
   reactStrictMode: true,
  ...nextI18NextConfig,
};
export default nextConfig;
