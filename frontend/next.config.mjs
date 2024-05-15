/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  // async headers() {
  //   return [
  //     {
  //       // CORS headers
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with a list of trusted domains from which to make requests
  //         { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,PATCH" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // }
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
}

export default nextConfig;
