// config-overrides.js
module.exports = function override(config, env) {
    // Check if it's the development environment
    if (env === "development") {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "url": require.resolve("url/")
        }
      };
    }
  
    // Return the modified configuration
    return config;
  };
  