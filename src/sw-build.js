const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise

  return workboxBuild.generateSW({
    swDest: "build/sw.js",
    clientsClaim: true,
    skipWaiting: true,
    globDirectory: "build",
    globIgnores: [
      "**/service-worker.js",
      "**precache-manifest**",
      "**chunk.css",
    ],
  });
};

buildSW();
