import React, { useEffect, useMemo } from "react";
import Map, { Source, Layer } from "react-map-gl";
import styled from "styled-components";
import { fetchDiveCoords } from "../../../../redux/redux-modules/dive/actions";
import { connect } from "react-redux";
import { Spin } from "antd";

const StyledContainer = styled.div`
  margin: 10px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  @media (max-width: 768px) {
    //for when column span is xs=24
    width: 100%;
    aspect-ratio: 1/1;
    max-height: 200px;
  }
`;

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

function ReportsMap(props) {
  const { filters, coordinatesData, loading } = props;

  useEffect(() => {
    props.fetchDiveCoords(filters);
  }, [filters]);

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
    <StyledContainer>
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
        initialViewState={{
          latitude: 32.749234,
          longitude: -16.986946,
          zoom: 8,
        }}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
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
    </StyledContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiveCoords: (filters) => dispatch(fetchDiveCoords(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    coordinatesData: state.dive.coordinatesData,
    loading: state.dive.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsMap);
