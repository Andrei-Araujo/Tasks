const express = require("express");
module.exports = (server) => {
  const routes = express.Router();
  server.use("/api", routes);

  const { UsuarioService } = require("../services/cadastroUsuario");
  UsuarioService.register(routes, "/usuario");
  const { TarefaService } = require("../services/tarefas");
  TarefaService.register(routes, "/tarefas");
};
