const path = require("path");

module.exports = {
  eslint: {
    enable: true,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@templates": path.resolve(__dirname, "src/components/templates"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stories": path.resolve(__dirname, "src/stories"),
    },
  },
};
