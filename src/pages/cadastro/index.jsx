import { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";
import Notification from "../../components/Notification";

const Cadastro = () => {
  const [selectRadio, setRadio] = useState("");
  const [alert, setAlert] = useState(false);

  const [dados_cadasto, setDadosCadastro] = useState({
    tipo: 0,
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
    peso: 0,
    altura: 0,
    tipo_sanguineo: "",
    salario: 0.0,
    password: "",
    data_contrato: "",
    especialidade: "",
    crm: ""
  });

  const Func = [
    "peso",
    "altura",
    "tipo_sanguineo",
    "especialidade",
    "crm",
    "confirmar_senha"
  ];
  const Med = ["peso", "altura", "tipo_sanguineo", "confirmar_senha"];
  const Pac = [
    "salario",
    "senha",
    "confirmar_senha",
    "data_contrato",
    "especialidade",
    "crm"
  ];

  const playAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const dto = () => {
    let remove = [];
    const data_copia = JSON.parse(JSON.stringify(dados_cadasto));

    switch (selectRadio) {
      case "Func":
        data_copia.tipo = 2;
        remove = Object.keys(dados_cadasto).filter(e => Func.includes(e));
        break;
      case "Med":
        data_copia.tipo = 3;
        remove = Object.keys(dados_cadasto).filter(e => Med.includes(e));
        break;
      case "Pac":
        data_copia.tipo = 1;
        remove = Object.keys(dados_cadasto).filter(e => Pac.includes(e));
        break;
      default:
        return [];
    }

    remove.forEach(el => delete data_copia[el]);

    return data_copia;
  };

  const resetForm = () => {
    setDadosCadastro({
      nome: "",
      email: "",
      telefone: "",
      cep: "",
      bairro: "",
      cidade: "",
      estado: "",
      peso: 0,
      altura: 0,
      tipo_sanguineo: "",
      salario: 0.0,
      password: "",
      data_contrato: "",
      especialidade: "",
      crm: ""
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = dto();
    await fetch(`http://localhost:4001/api/usuario/?tipo=${data.tipo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          playAlert();
          resetForm();
        }
        return res;
      })
      .then(res => res.json());
  };

  return (
    <Container className="homeContainer">
      <Form className="cadastroContainer" onSubmit={handleSubmit}>
        <h3>Cadastro</h3>
        {!!alert && <Notification />}
        <Form.Label>Selecione o tipo de cadastro:</Form.Label>
        <Form.Group
          className="mb-3"
          onChange={e =>
            setDadosCadastro({ ...dados_cadasto, tipo: e.target.value })
          }
        >
          <Form.Check
            inline
            label="Funcionario"
            name="group1"
            onChange={e => setRadio("Func")}
            value={2}
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Paciente"
            value={1}
            name="group1"
            onChange={e => setRadio("Pac")}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Medico"
            value={3}
            name="group1"
            onChange={e => setRadio("Med")}
            type={"radio"}
            id={`inline-radio-2`}
          />
        </Form.Group>

        <Form.Group className="mb-3 cadastroInputs">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            placeholder="Digite seu nome"
            value={dados_cadasto.nome}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, nome: e.target.value })
            }
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Digite seu email"
            value={dados_cadasto.email}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, email: e.target.value })
            }
          />

          <Form.Label>Telefone</Form.Label>
          <Form.Control
            placeholder="Digite seu telefone"
            value={dados_cadasto.telefone}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, telefone: e.target.value })
            }
          />

          <Form.Label>Cep</Form.Label>
          <Form.Control
            placeholder="Digite seu cep"
            value={dados_cadasto.cep}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, cep: e.target.value })
            }
          />

          <Form.Label>Bairro</Form.Label>
          <Form.Control
            placeholder="Digite seu bairro"
            value={dados_cadasto.bairro}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, bairro: e.target.value })
            }
          />

          <Form.Label>Cidade</Form.Label>
          <Form.Control
            placeholder="Digite sua cidade"
            value={dados_cadasto.cidade}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, cidade: e.target.value })
            }
          />

          <Form.Label>Estado</Form.Label>
          <Form.Control
            placeholder="Digite seu estado"
            value={dados_cadasto.estado}
            onChange={e =>
              setDadosCadastro({ ...dados_cadasto, estado: e.target.value })
            }
          />

          {selectRadio === "Pac" && (
            <Fragment>
              <Form.Label>Peso</Form.Label>
              <Form.Control
                placeholder="Digite seu peso"
                type="number"
                value={dados_cadasto.peso}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    peso: Number.parseFloat(e.target.value.replace(",", "."))
                  })
                }
              />

              <Form.Label>Altura</Form.Label>
              <Form.Control
                placeholder="Digite sua altura"
                value={dados_cadasto.altura}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    altura: Number.parseInt(e.target.value)
                  })
                }
              />

              <Form.Label>Tipo sanguineo</Form.Label>
              <Form.Control
                placeholder="Digite seu tipo sanguineo"
                value={dados_cadasto.tipo_sanguineo}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    tipo_sanguineo: e.target.value
                  })
                }
              />
            </Fragment>
          )}

          {selectRadio !== "Pac" && (
            <Fragment>
              <Form.Label>Salário</Form.Label>
              <Form.Control
                placeholder="Digite seu salário"
                type="number"
                value={dados_cadasto.salario}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    salario: Number.parseFloat(e.target.value.replace(",", "."))
                  })
                }
              />

              <Form.Label>Senha</Form.Label>
              <Form.Control
                placeholder="Digite sua senha"
                type="password"
                value={dados_cadasto.password}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    password: e.target.value
                  })
                }
              />

              <Form.Label>Data de contrato</Form.Label>
              <Form.Control
                type="date"
                placeholder="Digite sua data de contrato"
                value={dados_cadasto.data_contrato}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    data_contrato: e.target.value
                  })
                }
              />
            </Fragment>
          )}

          {selectRadio === "Med" && (
            <Fragment>
              <Form.Label>Especialidade</Form.Label>
              <Form.Control
                placeholder="Digite sua especialidade"
                value={dados_cadasto.especialidade}
                onChange={e =>
                  setDadosCadastro({
                    ...dados_cadasto,
                    especialidade: e.target.value
                  })
                }
              />

              <Form.Label>Crm</Form.Label>
              <Form.Control
                placeholder="Digite seu crm"
                value={dados_cadasto.crm}
                onChange={e =>
                  setDadosCadastro({ ...dados_cadasto, crm: e.target.value })
                }
              />
            </Fragment>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Cadastro;
