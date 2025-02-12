import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.paltd}>
        <img src="../Images/Logo-PAL.png" alt="PAltd." width={"100px"} />
        <p>
          Prime <br />
          Automations <br />
          Ltd.
        </p>
      </div>

      <div className={styles.socials}>
        <p className={styles.stitle}>Socials</p>

        <div className={styles.link}>
          <img src="../Images/facebook.svg" alt="Facebook" width={"20px"} />
          <a
            href="https://www.facebook.com/primeautomationsltd"
            target="_blank"
          >
            Facebook
          </a>
        </div>

        <div className={styles.link}>
          <img src="../Images/twitter.svg" alt="X / Twitter" width={"20px"} />
          <a href="https://twitter.com/Prime_ltd_bd" target="_blank">
            X / Twitter
          </a>
        </div>

        <div className={styles.link}>
          <img src="../Images/whatsapp.svg" alt="WhatsApp" width={"20px"} />
          <a href="https://api.whatsapp.com/send?8801769093465" target="_blank">
            WhatsApp
          </a>
        </div>

        <div className={styles.link}>
          <img src="../Images/linkedin.svg" alt="linkedin" width={"20px"} />
          <a
            href="https://www.linkedin.com/company/primeautomationsltd/"
            target="_blank"
          >
            linkedin
          </a>
        </div>

        <div className={styles.link}>
          <img src="../Images/youtube.svg" alt="YouTube" width={"20px"} />
          <a href="https://www.youtube.com/@primeutomationsltd" target="_blank">
            YouTube
          </a>
        </div>
      </div>
      <div className={styles.contacts}>
        <p className={styles.ctitle}>Contacts</p>
        <div className={styles.contact}>
          <img src="../Images/location.svg" alt="location" width={"20px"} />
          <p>
            Akash Plaza, Room#501, Plot# 21, Road# 7/D,
            <br /> Dhaka Mymensingh Road, Sector : 9, Uttara, Dhaka-1230
          </p>
        </div>
        <div className={styles.contact}>
          <img src="../Images/phone.svg" alt="phone" width={"20px"} />
          <p>+88 01730 055224</p>
        </div>
        <div className={styles.contact}>
          <img src="../Images/mail.svg" alt="mail" width={"20px"} />
          <p>salesdesk.primegroup@gmail.com</p>
        </div>
      </div>

      <p className={styles.line}></p>

      <div className={styles.copyright}>
        <p>© Copyright 2025</p>
        <p>All Rights Reserved by Prime Automations Ltd.</p>
      </div>

      <div className={styles.btn}>
        <button>Chat With Us</button>
      </div>
    </div>
  );
};

export default Footer;
