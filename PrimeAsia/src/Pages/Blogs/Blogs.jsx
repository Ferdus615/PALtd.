import React from "react";
import styles from "./Blogs.module.css";
import Articles from "../../Components/Articles/Articles";

function Blogs() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Read Our Blogs to Know The Latest Trend in The Industry.</p>
        </div>
        <div className={styles.blogs}>
          <Articles
            img="./blogs/Supera.jpg"
            text="Audaces Supera: A Closer Look at User Friendly Feature."
            admin="Admin"
            date="May 23, 2024"
          />

          <Articles
            img="./blogs/ITM_2024.png"
            text="ITM 2024: Prime Automation Ltd. Grears Up for Showcasing Innovation & Turkish Excellence."
            admin="Admin"
            date="June 20, 2024"
          />

          <Articles
            img="./blogs/Lay_height.jpg"
            text="Denim Disasters? Conquer Them All With The Unbeatable 6cm Lay Height Trick!"
            admin="Admin"
            date="August 05, 2024"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
