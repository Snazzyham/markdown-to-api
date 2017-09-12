const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(router);
server.use(middlewares);

module.exports = server.listen(3000, () => {
  console.log("JSON Server is running");
});
