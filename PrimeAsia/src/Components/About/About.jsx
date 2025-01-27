import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.name}>
        <p>
          Prime
          <br />
          Automations
          <br />
          Ltd.
        </p>
      </div>

      <div className={styles.title}>
        <p>About Us | Advance Automation Solution</p>
      </div>
      <div className={styles.text}>
        <div className={styles.para}>
          <p>
            With over 25+ years of combined experience, Prime Automations
            Limited (PAL) is pioneering the introduction of the most advanced
            CAD & Cutting-Room Automation Solutions in Bangladesh.
          </p>
        </div>
        <div className={styles.para}>
          <p>
            PAL aims to provide forefront technology solutions to manufacturing
            & service industries, enabling businesses to achieve sustainability
            in competitiveness, profitability, and environmental contexts. PAL’s
            commitment lies in delivering cutting-edge solutions that optimize
            processes, enhance efficiency, and foster growth.{" "}
          </p>
        </div>
        <div className={styles.para}>
          <p>
            Through innovative CAD and automation technologies, PAL empowers
            businesses to thrive in a dynamic market landscape, ensuring they
            remain at the forefront of progress while upholding environmental
            responsibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
