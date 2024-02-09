import styled from "styled-components";
import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { connect } from "react-redux";
import {
  addToUser,
  fetchSelector,
  removeFromUser,
} from "../../../../redux/redux-modules/divingSpots/actions";
import DivingSpotPopUp from "./DivingSpotPopUp";

const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 400px;
`;

function DivingSpotMapList(props) {
  const [divingSpotPopUp, setDivingSpotPopUp] = useState(null);
  const { data, user, filters } = props;

  const hasDivingSpot = (users) => {
    var hasUser = false;
    users.map((element) => {
      if (element.id == user.id) {
        hasUser = true;
      }
    });
    return hasUser;
  };

  const addSpot = (id) => {
    props.addToUser(id);
    props.fetchSelector(filters);
  };

  const removeSpot = (id) => {
    props.removeFromUser({ divingSpot: id });
    props.fetchSelector(filters);
  };

  return (
    <MapContainer>
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
        initialViewState={{
          longitude: -16.924326361610536,
          latitude: 32.66384984864688,
          zoom: 9,
        }}
        style={{ height: "100%", width: "100%" }}
        mapStyle="mapbox://styles/tigerwhale/cjpgrt1sccjs92sqjfnuixnxc"
      >
        {data.map((record) =>
          hasDivingSpot(record.users) ? (
            <Marker
              key={record.id}
              longitude={parseFloat(record.longitude)}
              latitude={parseFloat(record.latitude)}
              anchor="center"
              color="green"
              onClick={() => removeSpot(record.id)}
            ></Marker>
          ) : (
            <Marker
              key={record.id}
              longitude={parseFloat(record.longitude)}
              latitude={parseFloat(record.latitude)}
              anchor="center"
              color="red"
              onClick={() => addSpot(record.id)}
            ></Marker>
          )
        )}
      </Map>
    </MapContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSelector: (filters) => dispatch(fetchSelector(filters)),
    addToUser: (data) => dispatch(addToUser(data)),
    removeFromUser: (data) => dispatch(removeFromUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(DivingSpotMapList);
