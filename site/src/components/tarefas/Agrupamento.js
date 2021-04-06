import axios from "axios";
import React from "react";
import swal from "sweetalert";
import { FormularioTarefas } from "./Formulario";
import { ListagemTarefas } from "./Listagem";

const URL = "http://localhost:3201/api/tarefas/";

export class AgrupamentoTarefas extends React.Component {
  initialState = {
    _id: null,
    nomeTarefa: "",
    isNomeTarefaValido: false,
    dataInicio: "",
    isDataInicioValido: false,
    dataFim: "",
    isDataFimValido: true,
    idUsuario: "AAA",
  };

  state = {
    tarefas: [],
    ...this.initialState,
  };

  async componentDidMount() {
    await this.getTarefas();
  }

  async getTarefas() {
    try {
      const response = await axios.get(URL);
      if (response && response.data) {
        this.setState({ tarefas: response.data });
      }
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível listar tarefas, tente novamente mais tarde!",
        "error"
      );
    }
  }

  setNomeTarefa(evento) {
    const value = evento?.target?.value;
    console.log(value);
    if (!value || value.length < 3) {
      this.setState({ isNomeTarefaValido: false });
    } else {
      this.setState({ isNomeTarefaValido: true });
    }

    this.setState({ nomeTarefa: value });
  }

  setDataInicio(evento) {
    const value = evento?.target?.value;

    if (!value) {
      this.setState({ isDataInicioValido: false });
    } else {
      this.setState({ isDataInicioValido: true });
    }

    this.setState({ dataInicio: value });
  }

  setDataFim(evento) {
    const value = evento?.target?.value;
    if (!value) {
      this.setState({ isDataFimValido: false });
    } else {
      this.setState({ isDataFimValido: true });
    }

    this.setState({ dataFim: value });
  }

  isFormTarefaValido() {
    const {
      isNomeTarefaValido,
      nomeTarefa,
      isDataInicioValido,
      dataInicio,
      isDataFimValido,
      dataFim,
      idUsuario,
    } = this.state;

    return (
      isNomeTarefaValido &&
      isDataInicioValido &&
      isDataFimValido &&
      (dataInicio < dataFim || dataFim === "") &&
      nomeTarefa &&
      dataInicio
    );
  }

  async salvar(evento) {
    try {
      if (evento) {
        evento.preventDefault();
      }

      if (!this.isFormTarefaValido) {
        swal("Ops!", "favor preencher todos os campos", "error");
        return;
      }

      const {
        _id,

        nomeTarefa,

        dataInicio,

        dataFim,
        idUsuario,
      } = this.state;

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

      this.limpar();
      await this.getTarefas();
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
  }

  limpar() {
    this.setState(this.initialState);
  }

  async excluir(id) {
    try {
      const result = await swal({
        title: "Tem certeza?",
        text: "Após deletada, a tarefa não poderá ser restaurada",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (result) {
        console.log(id);
        await axios.delete(URL + id);
        await this.getTarefas();
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
  }

  async selecionar(id) {
    try {
      const response = await axios.get(URL + id);
      if (response && response.data) {
        const tarefa = response.data;
        this.setState({
          _id: tarefa?._id,
          nomeTarefa: tarefa?.nomeTarefa,
          dataInicio: tarefa?.dataInicio.substring(0, 10), // seleciona os primeiros caracteres de "2001-12-18T00:00:00.000Z"
          dataFim: tarefa?.dataFim.substring(0, 10),
          isNomeTarefaValido: true, // repassa a validação (momentânea) de dados já validados previamente
          isDataInicioValido: true,
        });
        return;
      }
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível selecionar tarefa, tente novamente mais tarde!",
        "error"
      );
    }

    await this.getTarefas();
    this.limpar();
  }

  render() {
    const {
      tarefas,
      _id,
      isNomeTarefaValido,
      nomeTarefa,
      isDataInicioValido,
      dataInicio,
      isDataFimValido,
      dataFim,
      idUsuario,
    } = this.state;

    return (
      <div className="row border-bottom">
        <div className="col-md-4">
          <FormularioTarefas
            nomeTarefa={nomeTarefa}
            dataInicio={dataInicio}
            dataFim={dataFim}
            idUsuario={idUsuario}
            setNomeTarefa={this.setNomeTarefa.bind(this)}
            setDataInicio={this.setDataInicio.bind(this)}
            setDataFim={this.setDataFim.bind(this)}
            isNomeTarefaValido={isNomeTarefaValido}
            isDataInicioValido={isDataInicioValido}
            isDataFimValido={isDataFimValido}
            isAtualizacao={_id && _id.length > 0}
            isFormTarefaValido={this.isFormTarefaValido()}
            salvar={this.salvar.bind(this)}
            limpar={this.limpar.bind(this)}
          />
        </div>
        <div className="col-md-8">
          <ListagemTarefas
            tarefas={tarefas}
            excluir={this.excluir.bind(this)}
            selecionar={this.selecionar.bind(this)}
          />
        </div>
      </div>
    );
  }
}
