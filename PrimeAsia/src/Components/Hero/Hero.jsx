import styles from "./Hero.module.css";
import CountUp from "./CoountUp";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <div className={styles.pal}>
        <img src="../Images/PALtd..png" alt="PAltd." width={"150px"} />
      </div>
      <div className={styles.slogan}>
        <p>
          Sustainability Through <br />
          Technology.
        </p>
      </div>
      <div className={styles.text}>
        <p>
          We deliver user friendly, high quality machinery and software
          solutions for the textile manufacturing industry. Prioritizing strong
          client relationships and ensure reliable, responsive support.
        </p>
      </div>

      <div className={styles.states}>
        <div className={styles.state}>
          <h3>
            <CountUp
              from={0}
              to={25}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
          </h3>
          <p>Years</p>
        </div>
        <div className={styles.state}>
          <h3>
            <CountUp
              from={0}
              to={80}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
          </h3>
          <p>Clients</p>
        </div>
        <div className={styles.state}>
          <h3>
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
          </h3>
          <p>Partners</p>
        </div>
        <div className={styles.state}>
          <h3>
            <CountUp
              from={0}
              to={70}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
          </h3>
          <p>Products</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
