const { UsuarioSchema } = require("./model");

UsuarioSchema.methods(["get", "post", "put", "delete"]); //"put" para possivel update em informações cadastradas; teoricamente, "delete" não seria necessário
UsuarioSchema.updateOptions({ new: true, runValidators: true });

exports.UsuarioService = UsuarioSchema;
