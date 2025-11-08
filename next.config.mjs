/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"]
  },
};

export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", // ✅ add this for static export
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
