import { combineReducers } from "redux";
import { tarefaReducer } from "./tarefa";
import { usuarioReducer } from "./usuario";

// opcao: criar um reducer proprio para login (ao inves de reaproveitar reducer de usuarios comum)
export default combineReducers({
  tarefas: tarefaReducer,
  usuarios: usuarioReducer,
});
