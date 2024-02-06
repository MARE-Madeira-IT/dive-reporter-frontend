import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  max-height: 100vh;
  display: grid;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    max-width: 100vw;
    width: auto;
  }
  /* Media query for mobile device size*/
`;

const BackgroundImage = styled.img`
  width: 150vw;
  height: auto;
  grid-area: 1 / 1 / 1 / 4;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    width: auto;
  }
`;

const TextContainer = styled.div`
  grid-area: 1 / 1 / 1 / 4;
  width: 100vw;
  text-align: center;
  padding-top: 10%;

  h1 {
    font-size: 5rem;
    color: white;
    line-height: 1;
  }

  p {
    font-size: 2rem;
    color: white;
    line-height: 1;
  }

  /* Media query for mobile device size */
`;

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <Container>
      <BackgroundImage
        src={
          windowWidth > 600
            ? "/../src/assets/teste.jpg"
            : "/../src/assets/testerotate.jpg"
        }
      />
      <TextContainer>
        <h1>Dive Reporter</h1>
        <p>A low-cost long-term monitoring program</p>
      </TextContainer>
    </Container>
  );
}

export default Home;
