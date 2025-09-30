// module.exports = {
//     images: {
//       domains: ['etgimages.s3.amazonaws.com'],
//     },
//   };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', 
      },
    ],
  },
};

module.exports = nextConfig;
