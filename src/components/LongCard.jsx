import Card from "react-bootstrap/Card";

const LongCard = () => {
  return (
    <Card>
      <Card.Header as="h5">Germes Pardini</Card.Header>
      <Card.Body>
        <Card.Title>Saiba mais sobre nós</Card.Title>
        <Card.Text>
          A associação foi criada a cerca de 4 meses com o objetivo de atender
          as expectativas para o trabalho de Engenharia de Software. A Germes
          Pardini tem foco total no cliente, sendo que nosso objetivo é manter o
          maior conforto e ao mesmo tempo confiabilidade para nossos clientes.
          Temos ao todo 3 unidades próprias distribuídas entre os campos do
          CEFET-MG, sendo todas localizadas em Belo Horizonte/MG. Assim, estamos
          preparados para auxiliar nossos clientes com informações clínicas que
          apoiem a prevenção, orientem o diagnóstico das doenças e auxiliem os
          tratamentos, desde os mais simples aos da mais alta complexidade. A
          Germes Pardini é inovadora e está sempre à frente das necessidades da
          população e atuação no mercado, disponibilizando os seus 15 mil alunos
          parceiros, que estudam e trabalham constantemente na busca por
          aprimorar seus serviços a partir do entendimento da realidade e das
          necessidades dos clientes finais. Além do nosso serviço de clínico
          geral, a Germes Pardini oferece um sistema de agendamento super
          completo e pensado em você, para que sua família tenha o conforto de
          escolher o melhor médico e horário sem a necessidade de ligar para a
          clínica."
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LongCard;
