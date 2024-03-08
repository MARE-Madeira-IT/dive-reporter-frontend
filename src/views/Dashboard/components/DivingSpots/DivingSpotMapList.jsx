import Map, { Marker, Popup } from "react-map-gl";
import { connect } from "react-redux";
import {
  addToUser,
  fetchSelector,
  removeFromUser,
} from "redux_modules/divingSpots/actions";
import styles from "./DivingSpot.module.css";
import { useState } from "react";
import DivingSpotPopup from "./DivingSpotPopup";

function DivingSpotMapList(props) {
  const { data, user, filters } = props;
  const [popup, setPopup] = useState(null);

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

  const showPopup = () => {
    return (
      popup && (
        <Popup
          tipSize={5}
          longitude={parseFloat(popup.longitude)}
          latitude={parseFloat(popup.latitude)}
          closeOnClick={false}
        >
          <DivingSpotPopup divingSpot={popup} />
        </Popup>
      )
    );
  };

  return (
    <div className={styles.mapContainer}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGlnZXJ3aGFsZSIsImEiOiJjanBncmNscnAwMWx3M3ZxdDF2cW8xYWZvIn0.LVgciVtYclOed_hZ9oXY2g"
        initialViewState={{
          longitude: -16.924326361610536,
          latitude: 32.66384984864688,
          zoom: 9,
        }}
        style={{ height: "100%", width: "100%", borderRadius: "20px" }}
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
            >
              <img
                src="/assets/mapMarkers/33.png"
                onMouseOver={() => setPopup(record)}
                onMouseLeave={() => setPopup(null)}
              />
            </Marker>
          ) : (
            <Marker
              key={record.id}
              longitude={parseFloat(record.longitude)}
              latitude={parseFloat(record.latitude)}
              anchor="center"
              color="red"
              onClick={() => addSpot(record.id)}
            >
              <img
                src="/assets/mapMarkers/0.png"
                onMouseOver={() => setPopup(record)}
                onMouseLeave={() => setPopup(null)}
              />
            </Marker>
          )
        )}
        {showPopup()}
      </Map>
    </div>
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
