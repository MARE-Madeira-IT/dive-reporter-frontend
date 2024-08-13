import styled from "styled-components";
import React from 'react'

const Container = styled.div`
  padding: 4px 0px;
  min-width: 120px;
`;

const Content = styled.p`
  font-weight: bold;
  margin: 0 0;
  span {
    font-weight: normal;
  }
`;

function DivingSpotPopup(props) {
    const { divingSpot } = props;
    return (
        <Container>
            <Content>
                Name: <span>{divingSpot.name}</span>
            </Content>
            <Content>
                Coordinates:
                <span>{divingSpot.latitude + ", " + divingSpot.longitude}</span>
            </Content>
            <Content>
                Protection: <span>{divingSpot.protection}</span>
            </Content>
        </Container>
    );
}

export default DivingSpotPopup;
