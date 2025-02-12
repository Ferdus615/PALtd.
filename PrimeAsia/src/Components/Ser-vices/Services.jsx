import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>
        <p>Services We Provide.</p>
      </div>
      <div className={styles.list}>
        <ul>
          <li>CAD/CAM Solution</li>
          <li>Cutting Room Solution 4.0</li>
          <li>Textile Dying Machinery</li>
          <li>Textile Finishing Machinery</li>
          <li>MES Software Solution</li>
          <li>Cutting Room Spare Parts Solution</li>
        </ul>
      </div>
      <div className={styles.slogan}>
        <p>
          Suntainability <br />
          Through <br />
          Technology.
        </p>
      </div>
    </div>
  );
};

export default Services;
