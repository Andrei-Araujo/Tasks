import {
  TYPE_CURSOS_SET_CEP,
  TYPE_CURSOS_SET_CEP_LOGRADOURO,
  TYPE_CURSOS_SET_CEP_LOGRADOURO_COMPLEMENTO,
  TYPE_USUARIO_SET_CPF,
  TYPE_USUARIO_SET_DATA_NASC,
  TYPE_USUARIO_SET_EMAIL,
  TYPE_USUARIO_SET_ENDERECO,
  TYPE_USUARIO_SET_ID_USUARIO_MOCK,
  TYPE_USUARIO_SET_NOME,
  TYPE_USUARIO_SET_NUMERO,
  TYPE_USUARIO_SET_SENHA,
} from "../actions/usuario";

const INITIAL_STATE = {
  lista: [],
  cpf: "",
  isCpfValido: true,
  cep: null,
  isCepValido: true,
  endereco: null,
  isEnderecoValido: true,
  numero: null,
  isNumeroValido: true,
  _idUsuario: "",
  dataNasc: "",
  isDataNascValido: true,
  nomeUsuario: "",
  isNomeUsuarioValido: true,
  email: "",
  isEmailValido: true,
  senha: "",
  isSenhaValido: true,
  redireciona: false,
  listaIdTarefa: [],
};

export const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_USUARIO_SET_NOME:
      return {
        ...state,
        nomeUsuario: action.value,
        isNomeUsuarioValido: action.isValido,
      };
    case TYPE_USUARIO_SET_CPF:
      return { ...state, cpf: action.value, isCpfValido: action.isValido };
    case TYPE_USUARIO_SET_DATA_NASC:
      return {
        ...state,
        dataNasc: action.value,
        isDataNascValido: action.isValido,
      };
    case TYPE_USUARIO_SET_EMAIL:
      return { ...state, email: action.value, isEmailValido: action.isValido };
    case TYPE_USUARIO_SET_SENHA:
      return { ...state, senha: action.value, isSenhaValido: action.isValido };
    case TYPE_CURSOS_SET_CEP_LOGRADOURO_COMPLEMENTO:
      return {
        ...state,
        cep: action.value,
        endereco: action.logradouro,
        numero: action.complemento,
        isCepValido: action.isCepValido,
        isEnderecoValido: action.isEnderecoValido,
        isNumeroValido: action.isNumeroValido,
      };
    case TYPE_CURSOS_SET_CEP_LOGRADOURO:
      return {
        ...state,
        cep: action.value,
        endereco: action.logradouro,

        isCepValido: action.isCepValido,
        isEnderecoValido: action.isEnderecoValido,
      };
    case TYPE_CURSOS_SET_CEP:
      return {
        ...state,
        cep: action.value,
        isCepValido: action.isCepValido,
      };
    case TYPE_USUARIO_SET_ENDERECO:
      return {
        ...state,
        endereco: action.value,
        isEnderecoValido: action.isValido,
      };
    case TYPE_USUARIO_SET_NUMERO:
      return {
        ...state,
        numero: action.value,
        isNumeroValido: action.isValido,
      };
    case TYPE_USUARIO_SET_ID_USUARIO_MOCK: // uso temporario, e nao será necessário conforme implementacao da rota de login no servidor
      return {
        ...state,
        _idUsuario: action.value,
      };
    default:
      return state;
  }
};
