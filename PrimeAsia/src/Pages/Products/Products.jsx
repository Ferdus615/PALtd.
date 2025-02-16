import React from "react";
import styles from "./Products.module.css";
import Product from "../../Components/Product/product";

function Products() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.category}>
          <h3>Cutting Room 4.0</h3>
        </div>
        <div className={styles.product}>
          
          <Product
            text="Audaces ICF"
            img="./product/ICF.webp"
            alt="Audaces ICF image
          "
          />
          <Product
            text="Neocut Bravo"
            img="./product/Neocut.webp"
            alt="Neocut Bravo image
          "
          />
          <Product
            text="Linea"
            img="./product/Linea.webp"
            alt="Linea image
        "
          />
          <Product
            text="Pratica"
            img="./product/Pratica.webp"
            alt="Pratica image
        "
          />
          <Product
            text="Jet Lux"
            img="./product/Jet.webp"
            alt="Jet Lux image
        "
          />
          <Product
            text="Digiflash Device"
            img="./product/Digiflash.webp"
            alt="Digiflash Device image
          "
          />
          <Product
            text="Digiflash XT Device"
            img="./product/Digiflash_XT.webp"
            alt="Digiflash XT Device image
          "
          />
        </div>
        <div className={styles.category}>
          <h3>Audaces 360</h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
