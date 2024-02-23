import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Map, { Marker } from "react-map-gl";
import { updateDrawerDimensions } from "src/helpers/helper";
import DrawerContainer from "src/views/Helpers/DrawerContainer";
import styles from "./DivingSpot.module.css";

const DescriptionItem = ({ span, title, content }) => (
  <Col span={span}>
    <div className={styles.drawer}>
      <span className={styles.drawerItemTitle}>{title}</span>
      {content}
    </div>
  </Col>
);

const DescriptionTitle = ({ span, content }) => (
  <Col span={span}>
    <div className={styles.drawerTitle}>
      <span className={styles.drawerItemText}>{content}</span>
    </div>
  </Col>
);

function DivingSpotDrawer(props) {
  const { content, handleDrawerClose, visible } = props;
  const [drawerWidth, setDrawerWidth] = useState("400px");

  const updateDimensions = () => {
    setDrawerWidth(updateDrawerDimensions(window));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions.bind(this));
  }, []);

  return (
    <DrawerContainer
      handleDrawerClose={handleDrawerClose}
      visible={visible}
      width={drawerWidth}
    >
      {content && (
        <Row className={styles.drawerContent} type="flex">
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

            <div className={styles.mapContainer}>
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
            </div>
          </Row>
        </Row>
      )}
    </DrawerContainer>
  );
}

export default DivingSpotDrawer;
