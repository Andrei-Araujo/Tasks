import axios from "axios";
import { cpf } from "cpf-cnpj-validator";
import React from "react";
import swal from "sweetalert";
import { FormularioUsuario } from "./Formulario";

const URL = "http://localhost:3201/api/usuario/";
const URLcep = "https://viacep.com.br/ws/";

export class FuncoesFormUsuario extends React.Component {
  initialState = {
    cpf: "",
    isCpfValido: false,
    cep: null,
    isCepValido: false,
    endereco: null,
    isEnderecoValido: false,
    numero: null,
    isNumeroValido: false,
    _idUsuario: "",
    dataNasc: "",
    isDataNascValido: false,
    nomeUsuario: "",
    isNomeUsuarioValido: false,
    email: "",
    isEmailValido: false,
    senha: "",
    isSenhaValido: false,
  };

  state = {
    usuario: [],
    ...this.initialState,
  };

  setNomeUsuario(evento) {
    const value = evento?.target?.value;
    console.log(value);
    if (!value || value.length < 3) {
      console.log(value);
      this.setState({ isNomeUsuarioValido: false });
    } else {
      this.setState({ isNomeUsuarioValido: true });
    }

    this.setState({ nomeUsuario: value });
  }

  setCpf(evento) {
    const value = evento?.target?.value;
    console.log(value);
    if (value && cpf.isValid(value)) {
      console.log(cpf.isValid(value));
      this.setState({ isCpfValido: true }); //ordem invertida
    } else {
      this.setState({ isCpfValido: false });
    }

    this.setState({ cpf: value });
  }

  setDataNasc(evento) {
    const value = evento?.target?.value;
    console.log(value);
    const valueAno = parseInt(value.substring(0, 4));
    console.log(valueAno);
    const valueMes = parseInt(value.substring(5, 7));
    const valueDia = parseInt(value.substring(8, 10));

    const hoje = new Date();
    const hojeAno = hoje.getFullYear();
    console.log(hojeAno);
    const hojeMes = hoje.getMonth();
    const hojeDia = hoje.getDate();
    if (
      !value ||
      valueAno + 12 > hojeAno ||
      (valueAno + 12 == hojeAno && valueMes > hojeMes) ||
      (valueAno + 12 == hojeAno && valueMes == hojeMes && valueDia > hojeDia)
    ) {
      this.setState({ isDataNascValido: false });
    } else {
      this.setState({ isDataNascValido: true });
    }

    this.setState({ dataNasc: value });
  }

  setEmail(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 5) {
      console.log(value);
      this.setState({ isEmailValido: false });
    } else {
      this.setState({ isEmailValido: true });
    }

    this.setState({ email: value });
  }

  setSenha(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 5) {
      console.log(value);
      this.setState({ isSenhaValido: false });
    } else {
      this.setState({ isSenhaValido: true });
    }

    this.setState({ senha: value });
  }

  async setCep(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 8 || value.length > 8) {
      this.setState({ isCepValido: false });
    } else {
      this.setState({ isCepValido: true });
    }

    this.setState({ cep: value });
    try {
      await axios
        .get(URLcep + value + "/json/")
        .then((response) => (this.data = response.data));
      this.setState({ endereco: this.data.logradouro });
      if (!this.data.logradouro) {
        this.setState({ isEnderecoValido: false });
      } else {
        this.setState({ isEnderecoValido: true });
      }
      this.setState({ numero: this.data.complemento });
      if (!this.data.complemento) {
        this.setState({ isNumeroValido: false });
      } else {
        this.setState({ isNumeroValido: true });
      }
      return;
    } catch (e) {
      console.log(e);
    }
  }

  setEndereco(evento) {
    const value = evento?.target?.value;

    if (!value || value.length < 3) {
      console.log(value);
      this.setState({ isEnderecoValido: false });
    } else {
      this.setState({ isEnderecoValido: true });
    }

    this.setState({ endereco: value });
  }

  setNumero(evento) {
    const value = evento?.target?.value;

    if (!value) {
      console.log(value);
      this.setState({ isNumeroValido: false });
    } else {
      this.setState({ isNumeroValido: true });
    }

    this.setState({ numero: value });
  }

  isFormValido() {
    const {
      isNomeUsuarioValido,
      isDataNascValido,
      isEmailValido,
      isSenhaValido,
    } = this.state;

    return (
      isNomeUsuarioValido && isDataNascValido && isEmailValido && isSenhaValido
    );
  }

  async salvar(evento) {
    try {
      if (evento) {
        evento.preventDefault();
      }

      if (!this.isFormValido) {
        swal("Ops!", "favor preencher todos os campos obrigatórios", "error");
        return;
      }

      const {
        cpf,

        cep,

        endereco,

        numero,

        _idUsuario,
        dataNasc,

        nomeUsuario,

        email,

        senha,
      } = this.state;

      const body = {
        cpf,

        cep,

        endereco,

        numero,

        data: dataNasc,

        nome: nomeUsuario,

        email,

        senha,
      };
      console.log(body);
      await axios.post(URL, body);
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível salvar cadastro, tente novamente mais tarde!",
        "error"
      );
    }
  }

  render() {
    const {
      nomeUsuario,
      isNomeUsuarioValido,
      usuario,
      cpf,
      isCpfValido,
      cep,
      isCepValido,
      endereco,
      isEnderecoValido,
      numero,
      isNumeroValido,
      _idUsuario,
      dataNasc,
      isDataNascValido,

      email,
      isEmailValido,
      senha,
      isSenhaValido,
    } = this.state;

    return (
      <div className="row border-bottom">
        <FormularioUsuario
          nomeUsuario={nomeUsuario}
          isNomeUsuarioValido={isNomeUsuarioValido}
          setNomeUsuario={this.setNomeUsuario.bind(this)}
          dataNasc={dataNasc}
          setDataNasc={this.setDataNasc.bind(this)}
          isDataNascValido={isDataNascValido}
          email={email}
          isEmailValido={isEmailValido}
          setEmail={this.setEmail.bind(this)}
          senha={senha}
          isSenhaValido={isSenhaValido}
          setSenha={this.setSenha.bind(this)}
          cep={cep}
          isCepValido={isCepValido}
          setCep={this.setCep.bind(this)}
          endereco={endereco}
          numero={numero}
          isEnderecoValido={isEnderecoValido}
          isNumeroValido={isNumeroValido}
          setEndereco={this.setEndereco.bind(this)}
          setNumero={this.setNumero.bind(this)}
          isFormValido={this.isFormValido()}
          cpf={cpf}
          isCpfValido={isCpfValido}
          setCpf={this.setCpf.bind(this)}
          salvar={this.salvar.bind(this)}
        />
      </div>
    );
  }
}
