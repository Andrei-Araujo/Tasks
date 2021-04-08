import axios from "axios";
import swal from "sweetalert";

export const TYPE_TAREFA_GET_LISTA = "TYPE_TAREFA_GET_LISTA";
export const TYPE_TAREFA_SET_NOME_TAREFA = "TYPE_TAREFA_SET_NOME_TAREFA";
export const TYPE_TAREFA_SET_DATA_INICIO = "TYPE_TAREFA_SET_DATA_INICIO";
export const TYPE_TAREFA_SET_DATA_FIM = "TYPE_TAREFA_SET_DATA_FIM";
export const TYPE_TAREFA_LIMPAR_FORM = "TYPE_TAREFA_LIMPAR_FORM";
export const TYPE_TAREFA_SELECIONAR_TAREFA = "TYPE_TAREFA_SELECIONAR_TAREFA";

const URL = "http://localhost:3201/api/tarefas/";

// o ideal seria fazer uma request à API, enviando _idUsuario, a fim de receber uma lista de listas a partir da URL inserida (URL + _idUsuario)

//para isso, na API, deve-se criar nova rota e criar middleware específicos para a tarefa de selecionar listas que possuam campo _idUsuario valido (usando find())

export const getTarefas = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      if (response && response.data) {
        dispatch({
          type: TYPE_TAREFA_GET_LISTA,
          value: response.data,
        });
      }
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível listar tarefas, tente novamente mais tarde!",
        "error"
      );
    }
  };
};

export const setNomeTarefa = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value || value.length < 3) {
    isValido = false;
  }

  return {
    type: TYPE_TAREFA_SET_NOME_TAREFA,
    value: value,
    isValido: isValido,
  };
};

export const setDataInicio = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value) {
    isValido = false;
  }

  return {
    type: TYPE_TAREFA_SET_DATA_INICIO,
    value: value,
    isValido: isValido,
  };
};

export const setDataFim = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value) {
    isValido = false;
  }

  return {
    type: TYPE_TAREFA_SET_DATA_FIM,
    value: value,
    isValido: isValido,
  };
};

export const limparFormularioTarefas = () => {
  return {
    type: TYPE_TAREFA_LIMPAR_FORM,
  };
};

export const selecionarTarefa = (tarefa) => {
  return {
    type: TYPE_TAREFA_SELECIONAR_TAREFA,
    value: tarefa,
  };
};

export const salvarTarefa = (evento, formulario) => {
  return async (dispatch) => {
    try {
      const {
        isNomeTarefaValido,
        nomeTarefa,
        isDataInicioValido,
        dataInicio,
        isDataFimValido,
        dataFim,
        idUsuario,
        _id,
      } = formulario;

      if (evento) {
        evento.preventDefault();
      }

      if (
        !(
          isNomeTarefaValido &&
          isDataInicioValido &&
          isDataFimValido &&
          (dataInicio < dataFim || dataFim === "") &&
          nomeTarefa &&
          dataInicio
        )
      ) {
        swal("Ops!", "favor preencher todos os campos", "error");
        return;
      }

      const body = {
        idUsuario,
        nomeTarefa,
        dataInicio,
        dataFim,
      };

      if (_id) {
        await axios.put(URL + _id, body);
      } else {
        await axios.post(URL, body);
      }

      dispatch(getTarefas());
      dispatch(limparFormularioTarefas());
      swal(
        "Parabéns!",
        `Tarefa ${_id ? "atualizada" : "salva"} com sucesso!`,
        "success"
      );
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível salvar tarefa, tente novamente mais tarde!",
        "error"
      );
    }
  };
};

export const excluirTarefa = (_id) => {
  return async (dispatch) => {
    console.log("a");
    try {
      if (!_id) {
        swal("Erro!", "Identificação da tarefa não informada!", "error");
        return;
      }

      const result = await swal({
        title: "Tem certeza?",
        text: "Após deletado, a tarefa não poderá ser restaurada",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (result) {
        console.log(URL + _id);
        await axios.delete(URL + _id);
        dispatch(getTarefas());
        swal("Parabéns!", "Tarefa deletada com sucesso", "success");
      }
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível excluir tarefa, tente novamente mais tarde!",
        "error"
      );
    }
  };
};
