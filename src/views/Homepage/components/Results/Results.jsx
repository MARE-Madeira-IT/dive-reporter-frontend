import { Drawer, Row, Col, Select, Spin } from "antd";
import { useEffect, useMemo, useState } from "react";
import Map, { Source, Layer } from "react-map-gl";
import { SettingFilled } from "@ant-design/icons";
import {
  fetchDiveCreatures,
  fetchDiveCoords,
} from "redux_modules/dive/actions";
import { connect } from "react-redux";
import moment from "moment";
import styles from "./Results.module.css";

const SettingsIconStyle = {
  fontSize: "2rem",
  position: "absolute",
  top: "0",
  right: "0",
  padding: "10px",
};

const layerStyle = {
  id: "point",
  type: "heatmap",
  paint: {
    "heatmap-radius": 15,
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0,
      "rgba(255, 0, 0, 0)",
      0.1,
      "rgba(255, 130, 130, 0.4)",

      0.5,
      "rgba(255, 180, 180, 0.8)",

      1,
      "rgba(255, 230, 230, 0.9)",
    ],
  },
};

function Results(props) {
  const { creaturesData, coordinatesData, loading } = props;

  const [creatureImage, setCreatureImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [creatureOptions, setCreatureOptions] = useState(null);
  const [diveFilters, setDiveFilters] = useState({});

  //Creatures
  useEffect(() => {
    props.fetchDiveCreatures({ source: "DIVE_REPORTER" });
  }, []);

  useEffect(() => {
    let options = [{ value: null, label: "Species" }];
    creaturesData.map((creature) => {
      options.push({
        value: creature.id,
        label: creature.name,
      });
    });
    setCreatureOptions(options);
  }, [creaturesData]);

  const creatureFilterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onCreatureChange = (creature) => {
    let creaturePhoto;
    if (creature) {
      creaturePhoto = creaturesData.find((ele) => ele.id == creature).photos[0]
        .link;
      setCreatureImage("https://wave-labs.org/api/" + creaturePhoto);
      setDiveFilters({ ...diveFilters, creature: creature });
    } else {
      setCreatureImage(null);
      setDiveFilters({ ...diveFilters, creature: null });
    }
  };

  //dates

  const dateOptions = [
    { value: null, label: "All time" },
    {
      value: moment().subtract(3, "months").format("YYYY-MM-DD"),
      label: "Last 3 months",
    },
    {
      value: moment().subtract(6, "months").format("YYYY-MM-DD"),
      label: "Last 6 months",
    },
    {
      value: moment().subtract(12, "months").format("YYYY-MM-DD"),
      label: "Last year",
    },
  ];

  const onDateChange = (value) => {
    setDiveFilters({
      ...diveFilters,
      date: [value, moment().format("YYYY-MM-DD")], //from -> to
    });
  };

  //dives

  useEffect(() => {
    props.fetchDiveCoords(diveFilters);
  }, [diveFilters]);

  const geoJsons = useMemo(() => {
    let newCoordinates = [];
    coordinatesData.map((element) => {
      newCoordinates.push([element.longitude, element.latitude]);
    });
    return (
      <Source
        key={1}
        type="geojson"
        data={{
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "MultiPoint",
                coordinates: newCoordinates,
              },
            },
          ],
        }}
      >
        <Layer key={2} {...layerStyle} />
      </Source>
    );
  }, [coordinatesData]);

  return (
    <Row id="results">
      <Col xs={24} align="center">
        <h1 style={{ fontSize: "3rem" }}>The results</h1>
      </Col>
      <Col xs={24}>
        <div className={styles.mapContainer}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
            initialViewState={{
              latitude: 32.749234,
              longitude: -16.986946,
              zoom: 9,
            }}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "20px",
              position: "absolute",
            }}
            mapStyle="mapbox://styles/tigerwhale/cjpgrt1sccjs92sqjfnuixnxc"
          >
            {loading && (
              <Spin
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                }}
              />
            )}
            {!loading && geoJsons}
          </Map>
          <div className={styles.creatureOverlay}>
            {creatureImage && <img src={creatureImage} />}
          </div>
          <div className={styles.settingsOverlay}>
            <Drawer
              title="Results filters"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              getContainer={false}
              mask={false}
            >
              <Select
                style={{ width: "100%", marginBottom: "20px" }}
                showSearch
                placeholder="Select a species"
                onChange={onCreatureChange}
                filterOption={creatureFilterOption}
                options={creatureOptions}
              />
              <Select
                style={{ width: "100%", marginBottom: "20px" }}
                defaultValue={{ value: null, label: "All time" }}
                placeholder="Select a time interval"
                onChange={onDateChange}
                options={dateOptions}
              />
            </Drawer>
            <SettingFilled
              style={SettingsIconStyle}
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiveCreatures: (filters) => dispatch(fetchDiveCreatures(filters)),
    fetchDiveCoords: (filters) => dispatch(fetchDiveCoords(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    creaturesData: state.dive.creaturesData,
    coordinatesData: state.dive.coordinatesData,
    loading: state.dive.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
