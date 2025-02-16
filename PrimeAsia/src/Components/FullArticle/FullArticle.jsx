import React from "react";
import styles from "./FullArticle.module.css";

const FullArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          ITM 2024: Prime Automation Ltd. Grears Up for Showcasing Innovation &
          Turkish Excellence.
        </h2>

        <div className={styles.info}>
          <p className={styles.admin}>Admin</p>
          <p className={styles.date}>June 20, 2024</p>
          <a href="">BACK</a>
        </div>
      </div>
      <div className={styles.text}>
        <p>Event Date: 4th - 8th June 2024</p>
        <p>
          Location: Tüyap Fair Convention and Congress Center, Istanbul, Turkey.
        </p>

        <p className={styles.para}>
          Prime Automations Ltd. is delighted to announce its participation in
          the prestigious ITM 2024 International Textile Machinery Exhibition, a
          leading global event scheduled to take place in Istanbul, Turkey, from
          June 4th to 8th, 2024. This premier exhibition serves as a crucial
          meeting point for the foremost textile technology companies worldwide,
          attracting key decision-makers and buyers from across the globe. For
          Prime Automations, the ITM 2024 exhibition provides an unparalleled
          platform to showcase its cutting-edge advancements in textile
          machinery and technology solutions, connect with industry leaders,
          forge strategic partnerships, and gain valuable insights into the
          evolving landscape of the textile sector. The company is eager to
          demonstrate its commitment to innovation and customer satisfaction by
          presenting its latest offerings designed to optimize textile
          production processes and enhance efficiency. Recognizing the diverse
          and specific needs of modern textile operations, Prime Automations
          Ltd., in collaboration with its partner Bospros, will be hosting a
          comprehensive multi-brand showcase at their booth. This carefully
          curated selection of established and reputable brands represents a
          wide spectrum of solutions catering to the various stages of the
          textile production chain. Visitors to the Prime Automations booth will
          have the opportunity to explore and learn about products and
          technologies from industry giants such as Bromak, A-Enerji, Realist,
          and Enta, among others. This diverse portfolio ensures that Prime
          Automations can offer a truly comprehensive and tailored approach to
          meeting the unique requirements of each client, from initial fiber
          processing to finished fabric production. The company's expert team
          will be on hand to provide detailed information, answer questions, and
          discuss customized solutions to address specific operational
          challenges and maximize productivity. Prime Automations looks forward
          to welcoming attendees and engaging in productive discussions about
          the future of textile manufacturing.
        </p>
      </div>
    </div>
  );
};

export default FullArticle;
