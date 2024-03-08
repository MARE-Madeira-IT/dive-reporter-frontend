import { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.container} id="home">
      <img
        className={styles.backgroundImage}
        src={
          windowWidth > 600
            ? "/assets/landing16_9.webp"
            : "/assets/landing9_16.webp"
        }
        alt="Landing page image of a diver"
      />
      <div className={styles.textContainer}>
        <div>
          <h1>Dive Reporter</h1>
          <p>A low-cost long-term monitoring program</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
