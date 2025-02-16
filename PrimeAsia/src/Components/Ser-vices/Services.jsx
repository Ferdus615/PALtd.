import { useState } from "react";
import styles from "./Services.module.css";

export default function Services() {
  const [activeImage, setActiveImage] = useState("");

  return (
    <div className={styles.gridContainer}>
      <div className={styles.title}>
        <p>Services We Provide.</p>
      </div>

      <div className={styles.imagePanel}>
        <div
          className={`${styles.hoverImage} ${activeImage ? styles.active : ""}`}
          style={{
            backgroundImage: activeImage ? `url(${activeImage})` : "none",
          }}
        ></div>
      </div>

      <div className={styles.listPanel}>
        <ul className={styles.list}>
          <li
            onMouseEnter={() => setActiveImage("/pic1.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            CAD/CAM Solution
          </li>
          <li
            onMouseEnter={() => setActiveImage("/PIC.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            Cutting Room Solution 4.0
          </li>
          <li
            onMouseEnter={() => setActiveImage("/pic1.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            Textile Dying Machinery
          </li>
          <li
            onMouseEnter={() => setActiveImage("/PIC.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            Textile Finishing Machinery
          </li>
          <li
            onMouseEnter={() => setActiveImage("/pic1.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            MES Software Solution
          </li>
          <li
            onMouseEnter={() => setActiveImage("/PIC.png")}
            onMouseLeave={() => setActiveImage("")}
          >
            Cutting Room Spare Parts Solution
          </li>
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
}
