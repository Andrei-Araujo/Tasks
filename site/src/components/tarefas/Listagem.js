import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  excluirTarefa,
  getTarefas,
  selecionarTarefa,
} from "../../actions/tarefa";

const ListagemTarefas = (props) => {
  const {
    listaTarefas,
    getTarefas,
    excluirTarefa,
    selecionarTarefa,
    _idUsuario,
  } = props;

  useEffect(() => {
    getTarefas();
  }, [getTarefas]);

  const exibirLinhas = () => {
    const tarefas = listaTarefas || [];
    return tarefas.map((tarefa) => (
      <tr key={tarefa._id}>
        <td>{tarefa.nomeTarefa}</td>
        <td>{`${
          tarefa.dataInicio === null ? "" : tarefa.dataInicio.substring(0, 10)
        }`}</td>
        <td>{`${
          tarefa.dataFim === null ? "" : tarefa.dataFim.substring(0, 10)
        }`}</td>
        <td>
          <button
            className="btn btn-success ml-2"
            onClick={(_) => selecionarTarefa(tarefa)}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={(_) => excluirTarefa(tarefa._id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="border-right pl-2 pr-2 pt-3">
      <h3 className="b">Lista de Tarefas</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data Início</th>
            <th>Data Término</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{exibirLinhas()}</tbody>
        <div>{console.log(_idUsuario)}</div>
      </table>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  listaTarefas: store.tarefas.lista,
  _idUsuario: store.usuarios._idUsuario,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      excluirTarefa,
      selecionarTarefa,
      getTarefas,
    },
    dispatch
  );

const conectado = connect(mapStoreToProps, mapActionToProps)(ListagemTarefas);

export { conectado as ListagemTarefas };
