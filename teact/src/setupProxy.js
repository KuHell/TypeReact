const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/Post", {
      target: "http://13.124.40.95:7272",
      changeOrigin: true,
    })
  );
};
