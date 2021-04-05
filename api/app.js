require("./configs/db");

console.log("Conectado");
const server = require("./configs/server");
const routes = require("./configs/routes");
routes(server);
