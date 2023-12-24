import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import exampleCard from "../../components/cards/Faeria/cardbg_blue_creature.png";
import CurrentCard from "../../utils/games/faeriaHelper"

export default function Faeria() {
  return (
    <>
      <h2>Faeria Card Creator</h2>
      <Container m="20px">
        <Row>
          <Col>
            <Image width="100%" src={exampleCard}></Image>
          </Col>
          <Col>
            <CurrentCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
