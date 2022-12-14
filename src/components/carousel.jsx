import Carousel from "react-bootstrap/Carousel";
import amostras from "../assets/imgs/amostras.jpg";
import biblioteca from "../assets/imgs/biblioteca.jpg";
import hall from "../assets/imgs/hall.jpg";
import analise from "../assets/imgs/analise.jpg";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={amostras} alt="First slide" />
        <Carousel.Caption>
          <h4>Amostras verificadas com maior qualidade do mercado</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={analise} alt="Second slide" />

        <Carousel.Caption>
          <h4>Detentores dos melhores equipamentos laboratóriais</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={biblioteca} alt="Third slide" />

        <Carousel.Caption>
          <h4>Estrutura de pesquisa</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hall} alt="Third slide" />

        <Carousel.Caption>
          <h4>Predios modernos e equipados</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
