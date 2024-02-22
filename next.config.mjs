/** @type {import('next').NextConfig} */
const nextConfig = {

 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gjplastics.co.uk",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
