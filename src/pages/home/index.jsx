import React from "react";
import Container from "react-bootstrap/esm/Container";
import Post from "../../components/Cards";
import Slider from "../../components/carousel";
import LongCard from "../../components/LongCard";
import "./index.scss";
import labDraw from "../../assets/imgs/labDraw.jpg";
import cientista from "../../assets/imgs/cientista.jpg";

const Home = () => {
  return (
    <Container className="homeContainer">
      <Slider />
      <LongCard />
      <div className="homeSeparacaoContent">
        <Post
          src={labDraw}
          title={"Nossa Missão"}
          text="Garantir satisfação do cliente com foco na qualidade, confiança e
celeridade do serviço."
        />
        <Post
          src={cientista}
          title={"Nossos Valores"}
          text="Integridade, Qualidade de vida, Respeito pelo próximo, Sustentabilidade, Realização."
        />
      </div>
    </Container>
  );
};

export default Home;
