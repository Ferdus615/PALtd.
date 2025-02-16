import React from "react";
import styles from "./Articles.module.css";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

const Articles = (props) => {
  return (
    <div>
      <SpotlightCard
        className={styles.custom_spotlight_card}
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className={styles.img_box}>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className={styles.para}>
          <div className={styles.text}>
            <p>{props.text}</p>
          </div>
          <div className={styles.info}>
            <p>{props.admin}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Articles;
