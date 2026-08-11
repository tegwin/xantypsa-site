/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Self-contained server bundle, so the runtime image carries only what it
  // needs instead of the whole node_modules tree.
  output: 'standalone',
};
