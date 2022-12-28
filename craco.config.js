const path = require("path");

module.exports = {
  eslint: {
    enable: true,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stories": path.resolve(__dirname, "src/stories"),
    },
  },
};
