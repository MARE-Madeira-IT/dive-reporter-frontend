import { Card, Divider, Upload } from "antd";
import styles from "./Profile.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { CameraOutlined } from "@ant-design/icons";
import { getBase64, dummyRequest } from "src/helpers/helper";
import { updateProfilePicture } from "redux_modules/auth/actions";

function Profile(props) {
  const { user } = props;
  const [iconVisible, setIconVisible] = useState("hidden");

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, () =>
      handlePhoto(info.file.originFileObj)
    );
  };

  const handlePhoto = (photo) => {
    let formData = new FormData();

    formData.append("image", photo);

    formData.append("_method", "PATCH");
    props
      .updateProfilePicture(user.id, formData)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Divider orientation="left">
        <div className={styles.title}>Profile</div>
      </Divider>
      <Card className={styles.cardContainer}>
        <div
          onMouseOver={() => setIconVisible("visible")}
          onMouseOut={() => setIconVisible("hidden")}
        >
          <Upload
            customRequest={dummyRequest}
            showUploadList={false}
            onChange={handleChange}
          >
            <img
              alt="example"
              src={`http://127.0.0.1:8000/storage/uploaded/photo/profilePicture/${user.photo}`}
            />
            <CameraOutlined
              className={styles.cameraIcon}
              style={{ visibility: iconVisible }}
            />
          </Upload>
        </div>
        <h1>{user.userable.user.name}</h1>
      </Card>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfilePicture: (id, data) =>
      dispatch(updateProfilePicture(id, data)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
