import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import moment from "moment";

const ListUsers = () => {
  const { typeUser } = useParams();

  const [header, setHeader] = useState([]);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    typeUser == 1
      ? setHeader(["Nome", "E-mail", "Telefone", "Paciente id"])
      : setHeader(["Nome", "E-mail", "Telefone", "Data Contrato"]);

    fetch(`http://localhost:4001/api/usuario/?tipo=${typeUser}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setDados(res));
  }, [typeUser]);

  return (
    <Container className="homeContainer">
      <h3>Listagem de {typeUser == 1 ? "Pacientes" : "Funcionarios"}</h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>{" "}
            {header.map(item => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>
                {typeUser == 1
                  ? item.id
                  : moment(item.data_contrato, "YYYY-MM-DD").format(
                      "DD/MM/YYYY"
                    )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListUsers;
