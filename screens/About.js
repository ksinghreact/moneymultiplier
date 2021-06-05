import React from "react";
import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

const About = ({ navigation }) => {

  return (
    <Container>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0} />
      </Content>
    </Container>
  );
}

export default About;