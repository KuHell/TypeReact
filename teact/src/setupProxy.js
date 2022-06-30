const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/Post", {
      target: "http://15.165.158.22:7272",
      changeOrigin: true,
    })
  );
};
