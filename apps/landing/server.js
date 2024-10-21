const { createServer } = require("http");
const next = require("next");
const { publicConfig } = require("./src/config");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(publicConfig.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${publicConfig.port}`);
  });
});
