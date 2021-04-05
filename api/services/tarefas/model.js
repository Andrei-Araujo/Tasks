const nodeRestful = require("node-restful");

const schema = new nodeRestful.mongoose.Schema({
  idUsuario: { type: String, required: true },
  nomeTarefa: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: false, default: null },
});

exports.TarefaSchema = nodeRestful.model("tarefa", schema);
