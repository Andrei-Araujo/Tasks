import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  salvarUsuario,
  setCep,
  setCpf,
  setDataNasc,
  setEmail,
  setEndereco,
  setNomeUsuario,
  setNumero,
  setSenha,
} from "../../actions/usuario";

const FormularioUsuario = (props) => {
  const {
    nomeUsuario,
    isNomeUsuarioValido,
    setNomeUsuario,
    dataNasc,
    isDataNascValido,
    setDataNasc,
    email,
    isEmailValido,
    setEmail,
    senha,
    isSenhaValido,
    setSenha,
    cep,
    isCepValido,
    setCep,

    endereco,
    numero,
    isEnderecoValido,
    isNumeroValido,
    setEndereco,
    setNumero,

    cpf,
    isCpfValido,
    setCpf,
    salvarUsuario,

    isPublic,
  } = props;

  return (
    <div className="cadastroScreen">
      {isPublic ? (
        <div className=" pt-5 pb-5 ">
          <h1>Esqueça como é se esquecer</h1>
          <p className="col-sm-5 pt-4 pb-3 ">
            O gerenciador de tarefas é uma podersa ferramenta para incrementar a
            produtivdade, sem perder o foco naquilo que importa.
          </p>
          <div className={`form-group  row `}>
            <div className="col-sm-6">
              <input
                type="string"
                className={`form-control`}
                value={email}
                onChange={setEmail}
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="">
              <button
                className="btn btn-primary ml-3 mr-3 mb-3"
                onClick={(e) =>
                  salvarUsuario(e, {
                    cpf,
                    cep,
                    endereco,
                    numero,
                    dataNasc,
                    nomeUsuario,
                    email,
                    senha,

                    isNomeUsuarioValido,
                    isDataNascValido,
                    isEmailValido,
                    isSenhaValido,
                    isPublic,
                  })
                }
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={`border-bottom  pt-4 pl-4 `}>
            Formulario de cadastro de Usuario
          </h3>
          <form className={`border-bottom  pt-3 pr-3 pl-3  `}>
            <div
              className={`form-group ${
                !isNomeUsuarioValido ? "errorInput" : ""
              } row `}
            >
              <label htmlFor="nomeUsuario" className="col-sm-3 col-form-label">
                Nome*:
              </label>
              <div className="col-sm-6">
                <input
                  type="string"
                  className={`form-control`}
                  id="nomeUsuario"
                  value={nomeUsuario}
                  onChange={setNomeUsuario}
                />
              </div>
            </div>
            <div
              className={`form-group ${!isCpfValido ? "errorInput" : ""} row `}
            >
              <label htmlFor="cpfUsuario" className="col-sm-3 col-form-label">
                CPF:
              </label>
              <div className="col-sm-6">
                <input
                  type="number"
                  className={`form-control`}
                  id="cpfUsuario"
                  placeholder="12345678901"
                  value={cpf}
                  onChange={setCpf}
                />
              </div>
            </div>
            <div
              className={`form-group ${
                !isDataNascValido ? "errorInput" : ""
              } row `}
            >
              <label htmlFor="nascimento" className="col-sm-3 col-form-label">
                Data de nascimento*:
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  value={dataNasc}
                  onChange={setDataNasc}
                  id="dataNasc"
                />
              </div>
            </div>
            <div
              className={`form-group ${
                !isEmailValido ? "errorInput" : ""
              } row `}
            >
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email*:
              </label>
              <div className="col-sm-6">
                <input
                  type="string"
                  className={`form-control`}
                  value={email}
                  onChange={setEmail}
                  id="email"
                />
              </div>
            </div>
            <div
              className={`form-group ${
                !isSenhaValido ? "errorInput" : ""
              } row `}
            >
              <label htmlFor="senha" className="col-sm-3 col-form-label">
                Senha*:
              </label>
              <div className="col-sm-6">
                <input
                  type="password"
                  className={`form-control`}
                  value={senha}
                  onChange={setSenha}
                  id="senha"
                />
              </div>
            </div>
            <div className={`form-group ${!isCepValido ? "" : ""} row `}>
              <label htmlFor="cep" className="col-sm-3  col-form-label">
                CEP:
              </label>
              <div className="col-sm-6 mb-3">
                <input
                  type="number"
                  className={`form-control`}
                  placeholder="12345678"
                  value={cep}
                  onChange={setCep}
                  id="cep"
                />
              </div>
            </div>
            <div className={`form-group ${!isEnderecoValido ? "" : ""} row `}>
              <label htmlFor="logradouro" className="col-sm-3 col-form-label">
                Endereço:
              </label>
              <div className="col-sm-6">
                <input
                  type="string"
                  className={`form-control`}
                  value={endereco}
                  onChange={setEndereco}
                  id="endereco"
                />
              </div>
            </div>
            <div className={`form-group ${!isNumeroValido ? "" : ""} row `}>
              <label
                htmlFor="numeroEndereco"
                className="col-sm-3 col-form-label"
              >
                Complemento:
              </label>
              <div className="col-sm-6">
                <input
                  type="string"
                  className={`form-control`}
                  value={numero}
                  onChange={setNumero}
                  id="numero"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <button
                className="btn btn-primary ml-3 mr-3 mb-3"
                disabled={
                  !(
                    isNomeUsuarioValido &&
                    isDataNascValido &&
                    isEmailValido &&
                    isSenhaValido &&
                    nomeUsuario &&
                    dataNasc &&
                    email &&
                    senha
                  )
                }
                onClick={(e) =>
                  salvarUsuario(e, {
                    cpf,
                    cep,
                    endereco,
                    numero,
                    dataNasc,
                    nomeUsuario,
                    email,
                    senha,

                    isNomeUsuarioValido,
                    isDataNascValido,
                    isEmailValido,
                    isSenhaValido,
                  })
                }
              >
                Adicionar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStoreToProps = (store) => ({
  cpf: store.usuarios.cpf,
  isCpfValido: store.usuarios.isCpfValido,
  cep: store.usuarios.cep,
  isCepValido: store.usuarios.isCepValido,
  endereco: store.usuarios.endereco,
  isEnderecoValido: store.usuarios.isEnderecoValido,
  numero: store.usuarios.numero,
  isNumeroValido: store.usuarios.isNumeroValido,
  _idUsuario: store.usuarios._idUsuario,
  dataNasc: store.usuarios.dataNasc,
  isDataNascValido: store.usuarios.isDataNascValido,
  nomeUsuario: store.usuarios.nomeUsuario,
  isNomeUsuarioValido: store.usuarios.isNomeUsuarioValido,
  email: store.usuarios.email,
  isEmailValido: store.usuarios.isEmailValido,
  senha: store.usuarios.senha,
  isSenhaValido: store.usuarios.isSenhaValido,
  listaIdTarefa: store.usuarios.listaIdTarefa,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setNomeUsuario,
      setDataNasc,
      setEmail,
      setSenha,
      setCep,
      setEndereco,
      setNumero,
      setCpf,
      salvarUsuario,
    },
    dispatch
  );

const conectado = connect(mapStoreToProps, mapActionToProps)(FormularioUsuario);

export { conectado as FormularioUsuario };
