import styles from "../Participate.module.css";

function ParticipateInfo() {
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>Join US!</h1>
      <div className={styles.mainContentContainer} id="participate">
        <p>
          Are you a dive center or dive operator in Madeira? Do you want to join
          our network and contribute to marine biodiversity monitoring? Contact
          us and we will help you join Dive Reporter monitoring program in
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
          program based on our platform and using our Dive Reporter mobile app.
          To build a custom-tailored Dive Reporter monitoring program with us,
          you will need to:
        </p>
        <p>
          &#x2022; Establish a spatial scale and geographic boundaries identify
          diving spots. We recommend you include all regular dive spots used by
          participating dive centers and operators.
        </p>
        <p>
          &#x2022; Identify Diving centers and dive operators in your area that
          would be willing to participate. Our framework is designed to engage
          dive centers and operators as participatory stakeholders.
        </p>
        <p>
          &#x2022; Work with participating dive centers and operators to
          identify diving spots to be included in your monitoring program. We
          recommend you include all regular dive spots used by participating
          dive centers and operators.
        </p>
        <p>
          &#x2022; Identify a maximum of 24 species of interest. We recommend
          using expert opinion and focusing on easily identifiable species that
          can be used as indicators (e.g. protected species, habitat builders,
          commercially valuable, non-native or invasive species)
        </p>
      </div>
    </>
  );
}

export default ParticipateInfo;
