import {
  TYPE_TAREFA_GET_LISTA,
  TYPE_TAREFA_LIMPAR_FORM,
  TYPE_TAREFA_SELECIONAR_TAREFA,
  TYPE_TAREFA_SET_DATA_FIM,
  TYPE_TAREFA_SET_DATA_INICIO,
  TYPE_TAREFA_SET_NOME_TAREFA,
} from "../actions/tarefa";

const INITIAL_STATE = {
  lista: [],
  _id: "",
  nomeTarefa: "",
  isNomeTarefaValido: true,
  dataInicio: "",
  isDataInicioValido: true,
  dataFim: "",
  isDataFimValido: true,
  idUsuario: "AAA",
};

export const tarefaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_TAREFA_GET_LISTA:
      return { ...state, lista: action.value };
    case TYPE_TAREFA_SET_NOME_TAREFA:
      return {
        ...state,
        nomeTarefa: action.value,
        isNomeTarefaValido: action.isValido,
      };
    case TYPE_TAREFA_SET_DATA_INICIO:
      return {
        ...state,
        dataInicio: action.value,
        isDataInicioValido: action.isValido,
      };
    case TYPE_TAREFA_SET_DATA_FIM:
      return {
        ...state,
        dataFim: action.value,
        isDataFimValido: action.isValido,
      };
    case TYPE_TAREFA_LIMPAR_FORM:
      return { ...INITIAL_STATE, lista: state.lista };
    case TYPE_TAREFA_SELECIONAR_TAREFA:
      return {
        ...state,
        nomeTarefa: action.value.nomeTarefa,
        dataInicio: action.value.dataInicio.substring(0, 10), // alternativa: utilizar moment para selecionar campos em um data
        dataFim: (action.value.dataFim || "").substring(0, 10),
        isNomeTarefaValido: true,
        isDataInicioValido: true,
        idUsuario: action.value.idUsuario,
        _id: action.value._id,
      };
    default:
      return state;
  }
};
