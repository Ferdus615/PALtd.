import styles from "./Product.module.css";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

const Product = (props) => {
  return (
    <div>
      <SpotlightCard
        className={styles.custom_spotlight_card}
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className={styles.img_box}>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Product;
