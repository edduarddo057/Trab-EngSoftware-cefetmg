import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import Notification from "../../components/Notification";
import moment from "moment";

const Agendar = () => {
  const [especialidades, setEspecialidades] = useState();
  const [profissionais, setProfissionais] = useState();
  const [userEspecialidade, setUserEspecialidade] = useState(null);
  const [userProfissional, setUserProfissional] = useState();
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [pacienteId, setPacienteId] = useState("");

  useEffect(() => {
    fetch("http://localhost:4001/api/especialidades/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(e => e)
      .then(res => setEspecialidades(res));
  }, []);

  const profEspecializado = async value => {
    await fetch(
      `http://localhost:4001/api/usuario/?tipo=3&especialidade=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(e => setProfissionais(e));
  };

  const playAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const resetForm = () => {
    setUserEspecialidade("");
    setUserProfissional("");
    setData("");
    setHora("");
    setPacienteId("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`http://localhost:4001/api/agenda/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: `${moment(data, "YYYYMMDD").format("DD/MM/YY")} ${hora}:00`,
        paciente_email: pacienteId,
        medico_id: userProfissional
      })
    })
      .then(res => {
        if (res.status === 200) {
          playAlert();
          resetForm();
        }
        return res;
      })
      .then(res => res.json());
  };

  return (
    <Container className="homeContainer">
      <Form id="form" className="agendarForms" onSubmit={handleSubmit}>
        <h3>Agendamento de consultas</h3>
        {!!alert && <Notification></Notification>}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Especialidade</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={userEspecialidade}
            onChange={e => {
              setUserEspecialidade(e.target.value);
              profEspecializado(e.target.value);
            }}
          >
            <option>Selecione a especialidade</option>

            {!!especialidades &&
              especialidades.map(e => <option value={e[0]}>{e[0]}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Profissional</Form.Label>
          <Form.Select
            aria-label="Default select example"
            disabled={!userEspecialidade || !profissionais}
            value={userProfissional}
            onChange={e => {
              setUserProfissional(e.target.value);
            }}
          >
            <option>Selecione o profissional</option>
            {!!profissionais &&
              profissionais.map(e => <option value={e.id}>{e.nome}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Data</Form.Label>
          <Form.Control
            type="date"
            id="disabledTextInput"
            value={data}
            onChange={e => setData(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Hora</Form.Label>
          <Form.Control
            type="time"
            id="disabledTextInput"
            value={hora}
            onChange={e => setHora(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">
            Identificação do paciente
          </Form.Label>
          <Form.Control
            type="text"
            id="disabledTextInput"
            value={pacienteId}
            onChange={e => setPacienteId(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agendar
        </Button>
      </Form>
    </Container>
  );
};

export default Agendar;
