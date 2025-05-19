import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);


// import withMDX from '@next/mdx' // careful: @next/mdx not super maintained; better use next-mdx-remote if possible

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // THIS is super important for GitHub Pages
//   pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
//   transpilePackages: ['next-mdx-remote'],
//   sassOptions: {
//     compiler: 'modern',
//     silenceDeprecations: ['legacy-js-api'],
//   },
// };

// export default withMDX({
//   extension: /\.mdx?$/,
//   options: {},
// })(nextConfig);
