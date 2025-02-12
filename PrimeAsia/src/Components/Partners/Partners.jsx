import styles from "./Partners.module.css";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Our Partners Ecosystem</h2>
      </div>

      <div className={styles.logo}>
        <Marquee
          pauseOnClick={true}
          autoFill={true}
          gradient={true}
          gradientColor="#1c775a"
        >
          <img src="./img/logo 5.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 1.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 2.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 3.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 4.png" alt="partner logo" loading="lazy" />
        </Marquee>

        <Marquee
          pauseOnClick={true}
          autoFill={true}
          gradient={true}
          gradientColor="#1c775a"
          direction="right"
        >
          <img src="./img/logo 10.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 6.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 7.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 8.png" alt="partner logo" loading="lazy" />

          <img src="./img/logo 9.png" alt="partner logo" loading="lazy" />
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
