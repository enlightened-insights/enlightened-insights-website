import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve one canonical host: send www traffic to the apex domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.enlightenedinsights.org" }],
        destination: "https://enlightenedinsights.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
