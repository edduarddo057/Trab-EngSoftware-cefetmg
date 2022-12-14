import Container from "react-bootstrap/esm/Container";
import Post from "../../components/Cards";
import entrada from "../../assets/imgs/galeria/entrada.png";
import labCefet from "../../assets/imgs/galeria/lab-cefet.jpg";
import labInd from "../../assets/imgs/galeria/lab-ind.png";
import labQuimica from "../../assets/imgs/galeria/lab-quimica.jpg";
import lab1 from "../../assets/imgs/galeria/lab1.jpg";
import lab3 from "../../assets/imgs/galeria/lab3.jpg";
import "./index.scss";

const Galeria = () => {
  return (
    <Container className="homeContainer">
      <div className="galeriaContainer">
        <Post src={entrada} title={"Campus 1 - Belo Horizonte"} />
        <Post src={labCefet} title={"Laborátorio de Quimica"} />
        <Post src={labInd} title={"Experimentações quimicas"} />
        <Post src={labQuimica} title={"Laboratório de aulas"} />
        <Post src={lab1} title={"Amostras"} />
        <Post src={lab3} title={"Testes avançados"} />
      </div>
    </Container>
  );
};

export default Galeria;
