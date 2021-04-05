import React from "react";
//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
/*import {
  limparFormularioCurso,
  salvarCurso,
  setCursoCargaHoraria,
  setCursoCategoria,
  setCursoCodigo,
  setCursoDescricao,
  setCursoPreco,
} from "../../actions/cursos";
*/

export const FormularioTarefas = (props) => {
  const {
    nomeTarefa,
    dataInicio,
    dataFim,
    idUsuario,
    setNomeTarefa,
    setDataInicio,
    setDataFim,
    isNomeTarefaValido,
    isDataInicioValido,
    isDataFimValido,
    isFormTarefaValido,
    isAtualizacao,
    salvar,
    limpar,
  } = props;

  return (
    <div className="border-right pl-3 pr-3">
      <h3 className="border-bottom">Cadastro de Tarefas</h3>
      <form>
        {/*<div className={`form-group ${!isCodigoValido ? "errorInput" : ""} row `}>*/}
        <div
          className={`form-group ${
            !isNomeTarefaValido ? "errorInput" : ""
          } row `}
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
          } row `}
        >
          <label htmlFor="dataInicio" className="col-sm-3 col-form-label">
            *Data de início:
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
            Data de conclusão:
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
            disabled={!isFormTarefaValido}
            onClick={salvar}
          >
            {isAtualizacao ? "Atualizar" : "Adicionar"}
          </button>
          <button
            className="btn btn-secondary ml-3 mb-3"
            type="button"
            onClick={limpar}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};
