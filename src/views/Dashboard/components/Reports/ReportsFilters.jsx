import { Col, Row, Select, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { fetchDiveCreatures } from "redux_modules/dive/actions";
import { connect } from "react-redux";
import moment from "moment/moment";
import styles from "./Reports.module.css";

const { RangePicker } = DatePicker;

function ReportsFilters(props) {
  const { setFilters, filters, creaturesData, divingSpotsData } = props;
  const [creatureOptions, setCreatureOptions] = useState(null);
  const [divingSpotsOptions, setDivingSpsotsOptions] = useState(null);

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

  //Diving spots
  useEffect(() => {
    let options = [{ value: null, label: "Diving spot" }];
    divingSpotsData.map((divingSpot) => {
      options.push({
        value: divingSpot.id,
        label: divingSpot.name,
      });
    });
    setDivingSpsotsOptions(options);
  }, [divingSpotsData]);

  const divingSpotsFilterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Row
      className={styles.filterRow}
      gutter={[16, 16]}
      justify={"space-between"}
    >
      <Col xs={24} sm={8} align="start">
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Species"
          onChange={(creature) =>
            setFilters({ ...filters, creature: creature })
          }
          filterOption={creatureFilterOption}
          options={creatureOptions}
        />
      </Col>
      <Col xs={24} sm={8} align="start">
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Diving spot"
          onChange={(divingSpot) =>
            setFilters({ ...filters, divingSpot: divingSpot })
          }
          filterOption={divingSpotsFilterOption}
          options={divingSpotsOptions}
        />
      </Col>
      <Col xs={24} sm={8} align="start">
        <RangePicker
          style={{ width: "100%" }}
          onChange={(date) => {
            setFilters({
              ...filters,
              date: [
                moment(date[0].$d).format("YYYY-MM-DD"),
                moment(date[1].$d).format("YYYY-MM-DD"),
              ],
            });
          }}
        />
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiveCreatures: (filters) => dispatch(fetchDiveCreatures(filters)),
  };
};

const mapStateToProps = (state) => {
  return {
    creaturesData: state.dive.creaturesData,
    divingSpotsData: state.divingSpots.DivingSpotSelector,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsFilters);
