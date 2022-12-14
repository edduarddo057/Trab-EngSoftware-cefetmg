import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import moment from "moment";

const ListEnredecos = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/api/endereco/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => setDados(res));
  }, []);

  return (
    <Container className="homeContainer">
      <h3>Listagem de Endereços</h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>CEP</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.cep}</td>
              <td>{item.bairro}</td>
              <td>{item.cidade}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListEnredecos;
