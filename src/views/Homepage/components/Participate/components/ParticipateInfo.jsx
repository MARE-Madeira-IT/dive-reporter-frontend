import styles from "../Participate.module.css";

function ParticipateInfo() {
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>Join us!</h1>
      <div className={styles.mainContentContainer} id="participate">
        <p>
          Are you a dive center or dive operator in Madeira? Do you want to join
          our network and contribute to marine biodiversity monitoring? Contact
          us and we will help you join the Dive Reporter monitoring program in
          Madeira.
        </p>
        <p>
          Are you a researcher or interested in marine biodiversity monitoring
          outside of Madeira? Do you want to use Dive Reporter with your own
          list of species and dive sites? Would you like to develop a citizen
          science, diver centric, monitoring program tailored to your geographic
          area?
        </p>
        <p>
          You can contact us and we will work with you to build a monitoring
          program based on our platform and use our Dive Reporter mobile app.
        </p>
      </div>
    </>
  );
}

export default ParticipateInfo;
