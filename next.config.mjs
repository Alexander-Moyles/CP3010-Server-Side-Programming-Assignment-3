/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/character/**')],
  },
};

export default nextConfig;
