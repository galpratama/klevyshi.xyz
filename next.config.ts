import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.klevyshi.xyz" }],
        destination: "https://klevyshi.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
