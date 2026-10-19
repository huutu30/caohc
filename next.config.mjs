/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/internet/ca-nhan",
        destination: "/goi-cuoc/internet",
      },
      {
        source: "/internet/gia-dinh",
        destination: "/goi-cuoc/internet",
      },
      {
        source: "/internet/game-thu",
        destination: "/goi-cuoc/internet",
      },
      {
        source: "/internet/doanh-nghiep",
        destination: "/goi-cuoc/internet",
      },
      {
        source: "/fpt-play",
        destination: "/goi-cuoc/combo",
      },
    ];
  },
};

export default nextConfig;

