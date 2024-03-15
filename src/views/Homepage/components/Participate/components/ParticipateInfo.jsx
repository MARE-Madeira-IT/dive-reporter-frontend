import styles from "../Participate.module.css";

function ParticipateInfo() {
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>Join us</h1>
      <div className={styles.mainContentContainer} id="participate">
        <p>
          You can contact us if you are interested in expanding the program to
          your area or project. To expand Dive Reporter program, you need the
          following:
        </p>
        <p> - Diving centers willing to participate</p>
        <p> - A maximum of 24 species</p>
        <p> - Some initial diving spots where your dive centers normally dive</p>
      </div>
    </>
  );
}

export default ParticipateInfo;
