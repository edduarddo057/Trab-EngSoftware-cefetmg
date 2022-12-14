import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import moment from "moment";
import { useParams } from "react-router";
import { Fragment } from "react";

const ListAgendamentos = () => {
  const { medico } = useParams();
  const [dados, setDados] = useState([]);
  const [tableEmpty, setTableEmpty] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4001/api/agenda/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) setTableEmpty(true);
        return res;
      })
      .then(res => res.json())
      .then(res => setDados(res));
  }, []);

  return (
    <Container className="homeContainer">
      <h3>Listagem de Agendamentos</h3>
      <Table striped>
        {!tableEmpty ? (
          <Fragment>
            <thead>
              <tr>
                <th>#</th>
                <th>Paciente id</th>
                <th>Medico id</th>
                <th>Data de agendamento</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.paciente}</td>
                  <td>{item.medico}</td>
                  <td>
                    {moment(item.data, "YYYY-MM-DDTHH:mm:ss").format(
                      "DD/MM/YYYY - HH:MM"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Fragment>
        ) : (
          <div style={{ color: "red" }}>* Não existem agendamentos</div>
        )}
      </Table>
    </Container>
  );
};

export default ListAgendamentos;
