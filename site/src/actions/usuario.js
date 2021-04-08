import axios from "axios";
import { cpf } from "cpf-cnpj-validator";
import swal from "sweetalert";

export const TYPE_USUARIO_SET_NOME = "TYPE_USUARIO_SET_NOME";
export const TYPE_USUARIO_SET_CPF = "TYPE_USUARIO_SET_CPF";
export const TYPE_USUARIO_SET_DATA_NASC = "TYPE_USUARIO_SET_DATA_NASC";
export const TYPE_USUARIO_SET_EMAIL = "TYPE_USUARIO_SET_EMAIL";
export const TYPE_USUARIO_SET_SENHA = "TYPE_USUARIO_SET_SENHA";
export const TYPE_CURSOS_SET_CEP_LOGRADOURO_COMPLEMENTO =
  "TYPE_CURSOS_SET_CEP_LOGRADOURO_COMPLEMENTO";
export const TYPE_CURSOS_SET_CEP_LOGRADOURO = "TYPE_CURSOS_SET_CEP_LOGRADOURO";
export const TYPE_CURSOS_SET_CEP = "TYPE_CURSOS_SET_CEP";
export const TYPE_USUARIO_SET_ENDERECO = "TYPE_USUARIO_SET_ENDERECO";
export const TYPE_USUARIO_SET_NUMERO = "TYPE_USUARIO_SET_NUMERO";
export const TYPE_USUARIO_SET_ID_USUARIO_MOCK =
  "TYPE_USUARIO_SET_ID_USUARIO_MOCK";

const URL = "http://localhost:3201/api/usuario/";
const URLcep = "https://viacep.com.br/ws/";

export const setNomeUsuario = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value || value.length < 3) {
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_NOME,
    value: value,
    isValido: isValido,
  };
};

export const setCpf = (e) => {
  const value = e?.target?.value;

  let isValido = false;
  if (value && cpf.isValid(value)) {
    isValido = true; // ordem invertida
  }

  return {
    type: TYPE_USUARIO_SET_CPF,
    value: value,
    isValido: isValido,
  };
};

export const setDataNasc = (e) => {
  const value = e?.target?.value;

  // alternativa: utilizar moment para manipular as datas em questao

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

  let isValido = true;
  if (
    !value ||
    valueAno + 12 > hojeAno ||
    (valueAno + 12 === hojeAno && valueMes > hojeMes) ||
    (valueAno + 12 === hojeAno && valueMes === hojeMes && valueDia > hojeDia)
  ) {
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_DATA_NASC,
    value: value,
    isValido: isValido,
  };
};

export const setEmail = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (
    !value ||
    value.length < 5 ||
    !value.includes("@") ||
    !value.includes(".")
  ) {
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_EMAIL,
    value: value,
    isValido: isValido,
  };
};

export const setSenha = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value || value.length < 6) {
    // opcao: exigir tambem caracteres especiais
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_SENHA,
    value: value,
    isValido: isValido,
  };
};

export const setCep = (evento) => {
  return async (dispatch) => {
    try {
      const value = evento?.target?.value;

      if (value.length === 8) {
        try {
          console.log("a");
          const response = await axios
            .get(URLcep + value + "/json/")
            .then((response) => {
              // alternativa: switch case
              if (response.data.logradouro && response.data.complemento) {
                dispatch({
                  type: TYPE_CURSOS_SET_CEP_LOGRADOURO_COMPLEMENTO,
                  cep: value,
                  logradouro: response.data.logradouro,
                  complemento: response.data.complemento,
                  isCepValido: true,
                  isEnderecoValido: true,
                  isNumeroValido: true,
                });
              } else {
                if (response.data.logradouro && !response.data.complemento) {
                  dispatch({
                    type: TYPE_CURSOS_SET_CEP_LOGRADOURO,
                    cep: value,
                    logradouro: response.data.logradouro,
                    isCepValido: true,
                    isEnderecoValido: true,
                  });
                } else {
                  dispatch({
                    type: TYPE_CURSOS_SET_CEP,
                    cep: value,

                    isCepValido: true,
                  });
                }
              }
            });
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const setEndereco = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value || value.length < 3) {
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_ENDERECO,
    value: value,
    isValido: isValido,
  };
};
export const setNumero = (e) => {
  const value = e?.target?.value;

  let isValido = true;
  if (!value) {
    isValido = false;
  }

  return {
    type: TYPE_USUARIO_SET_NUMERO,
    value: value,
    isValido: isValido,
  };
};

export const redirecionaTarefa = () => {
  window.location = "/tarefas"; // para aplicações mobile, substituir por método equivalente que seja compatível
};

// o ideal seria fazer uma request à API, enviando email+senha, a fim de receber um parametro de retorno (como _idUsuario), para poder selecionar a lista de tarefas apenas do usuario em questao

//para isso, na API, deve-se criar nova rota e criar middleware específicos para a tarefa de login (usando find() ou findOne())

export const loginUsuario = (evento, formularioLogin) => {
  return async (dispatch) => {
    try {
      const { email, isEmailValido, senha, isSenhaValido } = formularioLogin;

      if (evento) {
        evento.preventDefault();
      }

      let idMock = email + senha; // uma alternativa seria codificar a combinacao email+senha usando um algorito codificador, como base64 (existe módulo npm que pode auxiliar nisso), para enviar essa combinação para o servidor

      return {
        type: TYPE_USUARIO_SET_ID_USUARIO_MOCK,
        value: idMock,
      };
    } catch (e) {
      console.log(e);
    }
  };
};

export const salvarUsuario = (evento, formulario) => {
  return async (dispatch) => {
    try {
      const {
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
      } = formulario;

      if (evento) {
        evento.preventDefault();
      }

      if (isPublic) {
        dispatch(setEmail(evento));
        window.location = "/cadastro";
        return;
      }

      if (
        !(
          isNomeUsuarioValido &&
          isDataNascValido &&
          isEmailValido &&
          isSenhaValido
        )
      ) {
        swal("Ops!", "Favor preencher todos os campos corretamente", "error");
        return;
      }

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
      console.log("a");
      await axios.post(URL, body);

      swal("Parabéns!", "Cadastro salvo com sucesso", "success");

      setTimeout(() => {
        window.location = "/home";
      }, 2500);
    } catch (e) {
      console.log(e);
      swal(
        "Erro!",
        "Não foi possível salvar cadastro, tente novamente mais tarde!",
        "error"
      );
    }
  };
};
