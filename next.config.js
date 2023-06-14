/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  // ...
  // Other Next.js configurations
  // ...
  // Add the following configuration for serving static files
  // in the development and production environment
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};
