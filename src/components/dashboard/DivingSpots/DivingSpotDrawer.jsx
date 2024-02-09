import { Component } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Map, { Marker } from "react-map-gl";
import { updateDrawerDimensions } from "../../../helpers/helper";
import DrawerContainer from "../../helpers/DrawerContainer";

const StyledDiv = styled.div`
  font-size: 14;
  line-height: 22px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.65);
`;

const TitleDiv = styled.div`
  font-size: 30;
  line-height: 50px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
`;

const StyledRow = styled(Row)`
  flex-direction: column;
`;

const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 400px;
`;

const StyledParagraph = styled.span`
  margin-right: 8px;
  display: inline-block;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
  &:after {
    content: ":";
  }
`;

const StyledTitle = styled.span`
  margin-right: 8px;
  display: inline-block;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
`;

const DescriptionItem = ({ span, title, content }) => (
  <Col span={span}>
    <StyledDiv>
      <StyledParagraph>{title}</StyledParagraph>
      {content}
    </StyledDiv>
  </Col>
);

const DescriptionTitle = ({ span, content }) => (
  <Col span={span}>
    <TitleDiv>
      <StyledTitle>{content}</StyledTitle>
    </TitleDiv>
  </Col>
);

class DivingSpotDrawer extends Component {
  state = {
    drawerWidth: "400px",
  };

  updateDimensions() {
    this.setState({ drawerWidth: updateDrawerDimensions(window) });
    console.log(this.props.content);
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    let { content, position } = this.props;
    let { drawerWidth } = this.state;

    return (
      <DrawerContainer
        handleDrawerClose={this.props.handleDrawerClose}
        visible={this.props.visible}
        width={drawerWidth}
      >
        {content && (
          <StyledRow type="flex">
            <DescriptionTitle span={24} content={content.name} />

            <Row type="flex" align="top">
              <DescriptionItem span={12} title="Id" content={content.id} />

              <DescriptionItem
                span={12}
                title="Latitude"
                content={content.latitude}
              />

              <DescriptionItem
                span={12}
                title="Longitude"
                content={content.longitude}
              />

              <DescriptionItem
                span={12}
                title="Max depth"
                content={content.range}
              />

              <DescriptionItem
                span={12}
                title="Substrates"
                content={
                  content.substracts.length > 0 && (
                    <ul>
                      {content.substracts.map(function (element, index) {
                        return (
                          <li key={index}>
                            <span>{element.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )
                }
              />

              <DescriptionItem
                span={12}
                title="Protection"
                content={content.protection}
              />

              <MapContainer>
                <Map
                  mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
                  initialViewState={{
                    longitude: content.longitude,
                    latitude: content.latitude,
                    zoom: 11,
                  }}
                  style={{ height: "100%", width: "100%" }}
                  mapStyle="mapbox://styles/tigerwhale/cjpgrt1sccjs92sqjfnuixnxc"
                >
                  <Marker
                    longitude={content.longitude}
                    latitude={content.latitude}
                    anchor="center"
                  />
                </Map>
              </MapContainer>
            </Row>
          </StyledRow>
        )}
      </DrawerContainer>
    );
  }
}

export default DivingSpotDrawer;
