/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/**')],
    unoptimized: true,
  },
};

export default nextConfig;
