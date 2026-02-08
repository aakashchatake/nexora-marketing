/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nexora-marketing',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
