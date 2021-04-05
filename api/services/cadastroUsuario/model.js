const nodeRestful = require("node-restful");

const schema = new nodeRestful.mongoose.Schema({
  data: { type: Date, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cpf: { type: String, required: false, default: "123.456.789-XX" },
  cep: { type: String, required: false, default: "12345-67" },
  endereco: { type: String, required: false, default: "Avenida Brasil" },
  numero: { type: Number, required: false, default: "01" },
});

exports.UsuarioSchema = nodeRestful.model("contatos", schema);
