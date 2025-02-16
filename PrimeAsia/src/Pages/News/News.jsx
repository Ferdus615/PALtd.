import React from "react";
import styles from "./News.module.css";
import Articles from "../../Components/Articles/Articles";

function News() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
            You Can Find ALl Types of Update and News About The Industry In This
            Page.
          </p>
        </div>
        <div className={styles.news}>
          <Articles
            img="./news/DTG.jpg"
            text="DTG- The 18th Dhaka Int'l Textile & Garment Machinery Exhibition."
            admin="Admin"
            date="Feb 10, 2024"
          />

          <Articles
            img="./news/DTG-25.jpg"
            text="DTG- The 19th Dhaka Int'l Textile & Garment Machinery Exhibition."
            admin="Admin"
            date="Feb 28, 2025"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
