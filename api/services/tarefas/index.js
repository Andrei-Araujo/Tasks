const { TarefaSchema } = require("./model");

TarefaSchema.methods(["get", "post", "put", "delete"]);
TarefaSchema.updateOptions({ new: true, runValidators: true });

exports.TarefaService = TarefaSchema;
