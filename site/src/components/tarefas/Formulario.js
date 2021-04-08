import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  limparFormularioTarefas,
  salvarTarefa,
  setDataFim,
  setDataInicio,
  setNomeTarefa,
} from "../../actions/tarefa";

const FormularioTarefas = (props) => {
  const {
    nomeTarefa,
    dataInicio,
    dataFim,
    idUsuario, // a receber, apos requisicao especifica ao servidor
    setNomeTarefa,
    setDataInicio,
    setDataFim,
    isNomeTarefaValido,
    isDataInicioValido,
    isDataFimValido,
    salvarTarefa,
    limparFormularioTarefas,
    _id,
  } = props;

  return (
    <div className="border-right pl-3 pr-3 pt-4">
      <h3 className="border-bottom">Cadastro de Tarefas</h3>
      <form>
        <div
          className={`form-group ${
            !isNomeTarefaValido ? "errorInput" : ""
          } row pt-4`}
        >
          <label htmlFor="nomeTarefa" className="col-sm-3 col-form-label">
            *Nome:
          </label>
          <div className="col-sm-7">
            <input
              type="string"
              className={`form-control`}
              id="nomeTarefa"
              value={nomeTarefa}
              onChange={setNomeTarefa}
            />
          </div>
        </div>
        <div
          className={`form-group ${
            !isDataInicioValido ? "errorInput" : ""
          } row pt-2 `}
        >
          <label htmlFor="dataInicio" className="col-sm-3 col-form-label">
            *Início:
          </label>
          <div className="col-sm-6">
            <input
              type="date"
              name="startDate"
              id="dataInicio"
              value={dataInicio}
              onChange={setDataInicio}
            />
          </div>
        </div>
        <div
          className={`form-group ${
            dataFim < dataInicio && dataFim !== "" ? "errorInput" : ""
          } row `}
        >
          <label htmlFor="dataFim" className="col-sm-3 col-form-label">
            Conclusão:
          </label>
          <div className="col-sm-6">
            <input
              type="date"
              name="endDate"
              id="dataFim"
              value={dataFim}
              onChange={setDataFim}
            />
          </div>
        </div>

        <div className="form-group row">
          <button
            className="btn btn-primary ml-3 mb-3"
            disabled={
              !(
                isNomeTarefaValido &&
                isDataInicioValido &&
                isDataFimValido &&
                (dataInicio < dataFim || dataFim === "") &&
                nomeTarefa &&
                dataInicio
              )
            }
            onClick={(e) =>
              salvarTarefa(e, {
                isNomeTarefaValido,
                nomeTarefa,
                isDataInicioValido,
                dataInicio,
                isDataFimValido,
                dataFim,
                idUsuario,
                _id,
              })
            }
          >
            {_id ? "Atualizar" : "Adicionar"}
          </button>
          <button
            className="btn btn-secondary ml-3 mb-3"
            type="button"
            onClick={limparFormularioTarefas}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  isNomeTarefaValido: store.tarefas.isNomeTarefaValido,
  nomeTarefa: store.tarefas.nomeTarefa,
  isDataInicioValido: store.tarefas.isDataInicioValido,
  dataInicio: store.tarefas.dataInicio,
  isDataFimValido: store.tarefas.isDataFimValido,
  dataFim: store.tarefas.dataFim,
  idUsuario: store.usuarios._idUsuario, // temporario, para armazenar idUsuario a ser inscrito conforme se registrem tarefas
  _id: store.tarefas._id,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setNomeTarefa,
      setDataInicio,
      setDataFim,
      salvarTarefa,
      limparFormularioTarefas,
    },
    dispatch
  );

const conectado = connect(mapStoreToProps, mapActionToProps)(FormularioTarefas);

export { conectado as FormularioTarefas };
