import React from "react";

export const ListagemTarefas = (props) => {
  const { excluir, selecionar } = props;

  const exibirLinhas = () => {
    const tarefas = props.tarefas || [];
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
            onClick={(e) => selecionar(tarefa._id)}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={(e) => excluir(tarefa._id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="border-right pl-2 pr-2">
      <h3 className="border-bottom">Lista de Tarefas</h3>
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
      </table>
    </div>
  );
};
