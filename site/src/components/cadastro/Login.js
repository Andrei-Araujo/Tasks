import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loginUsuario,
  redirecionaTarefa,
  setEmail,
  setSenha,
} from "../../actions/usuario";

const LoginUsuario = (props) => {
  const {
    email,
    isEmailValido,
    setEmail,
    senha,
    isSenhaValido,
    setSenha,
    loginUsuario,
    _idUsuario, // a receber, apos requisicao especifica ao servidor
  } = props;

  return (
    <div className="loginScreen">
      <div>
        <h3 className={`border-bottom  pt-4  `}>Login de Usuario</h3>
        <form className={`border-bottom  pt-3 pr-3 pl-3  `}>
          <div
            className={`form-group ${!isEmailValido ? "errorInput" : ""} row `}
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
            className={`form-group ${!isSenhaValido ? "errorInput" : ""} row `}
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
          <div className="row d-flex justify-content-center">
            <button
              className="btn btn-primary ml-3 mr-3 mb-3"
              disabled={!(isEmailValido && isSenhaValido && email && senha)}
              onClick={(e) => {
                loginUsuario(e, {
                  email,
                  senha,

                  isEmailValido,
                  isSenhaValido,
                });
                redirecionaTarefa();
              }}
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  email: store.usuarios.email,
  isEmailValido: store.usuarios.isEmailValido,
  senha: store.usuarios.senha,
  isSenhaValido: store.usuarios.isSenhaValido,
  _idUsuario: store.usuarios._idUsuario,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setEmail,
      setSenha,
      loginUsuario,
    },
    dispatch
  );

const conectado = connect(mapStoreToProps, mapActionToProps)(LoginUsuario);

export { conectado as LoginUsuario };
