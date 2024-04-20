/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  images: {
    domains: ["images.data.gov.sg"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
