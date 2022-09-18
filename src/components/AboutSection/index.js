import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./AboutNeend.css";
import neend from "../../images/Neend.png";
import fb from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import google from "../../images/googlePlay.svg";
import twitter from "../../images/twitter.svg";
import spotify from "../../images/spotify.png";
import Gana from "../../images/gaana.png";
import saavn from "../../images/saavn.png";
import whatsApp from "../../images/whatsApp.png";
import email from "../../images/email.png";
import youTube from "../../images/youtube.svg";

const About = (props: any) => {
  const styles = useStyles();

  return (
    <Box
      ref={props.aboutRef}
      className={styles.aboutSectionBox}
      mt={15}
      component="div"
    >
      <Box component="div" display="block">
        <img src={neend} className={styles.neendLogo} />
        <h1 id="neend">neend</h1>
        <Typography className={styles.aboutSectionText}>
          We are Neend - India’s first and only free app that uses stories in
          regional language along with music to help you fall asleep sooner, and
          sleep better. From helping millions discover the benefits of Yog Nidra
          to introducing Indians to launching sleep-aid products like Sleep
          Gummies that help you relax and sleep better, Neend effortlessly fuses
          the latest tech with homegrown ancient science.
        </Typography>
        <Typography className={styles.aboutSectionText}>
          On digital front, we are reimagining bedtime stories. Carefully
          crafted and built for adults, our stories feature soothing narration
          from India’s best storytellers. We also offer music-based meditation
          along with white noise, ASMR, and Yog Nidra. We already have bedtime
          stories in Hindi, and English. And, are soon dropping soothing stories
          in regional languages like Marathi, Tamil, and Telugu.
        </Typography>
        <Typography className={styles.aboutSectionText}>
          Our sleep aid products use scientifically proven methods to help you
          rest easily, and sleep peacefully.
        </Typography>
        <Typography className={styles.aboutSectionText}>
          With our digital and offline offerings, you can count on us to provide
          everything you need to sleep better.
        </Typography>
        <Box className={styles.contactSection} component="div" display="flex">
          <img className={styles.whatsAppIcon} src={whatsApp} alt="..." />
          <Typography className={styles.contactText}>+91-7338058468</Typography>
          <img className={styles.emailIcon} src={email} alt="..." />
          <Typography className={styles.contactText}>care@neend.app</Typography>
        </Box>
      </Box>
      <Box
        className={styles.socialBox}
        mt={4}
        ml={9}
        component="div"
        display="block"
      >
        <p id="downloadText">Download App on:</p>
        <div id="inline">
          <a
            href="https://play.google.com/store/apps/details?id=com.neend&utm_source=website"
            target="_blank"
            rel="noreferrer"
          >
            <img id="playS" src={google} alt="..." />
          </a>
        </div>
        <p id="downloadTextthird">Listen us on:</p>
        <div className={styles.linkDiv}>
          <a
            id="space"
            href=" https://open.spotify.com/show/1LKe9GQcPcvMCJXTnrjD2Z"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img id="spot" src={spotify} alt="..." />{" "}
          </a>
          <a
            id="space"
            href="https://www.jiosaavn.com/shows/neend---sleep-stories-for-adults-in-hindi/1/xt5D1fGpq9k_"
            target="_blank"
            rel="noreferrer"
          >
            <img id="spot" src={saavn} alt="..." />
          </a>
        </div>
        <div className={styles.linkDiv}>
          <a
            id="space"
            href=" https://gaana.com/podcast/neend-sleep-stories-for-adults-in-hindi-season-3"
            target="_blank"
          >
            <img id="spot" src={Gana} alt="..." />
          </a>
          <a
            id="space"
            href=" https://www.youtube.com/c/Neend1"
            target="_blank"
          >
            <img id="spot" src={youTube} alt="..." />
          </a>
        </div>
        <Typography className={styles.appInfoText}>
          Available in Hindi, English and regional languages like Marathi,
          Tamil, Telugu and many more...
        </Typography>
        <div className={styles.socialIcons}>
          <p id="follow-up">Follow us on:</p>
          <div className={styles.socialIconDiv}>
            <a id="socials" href=" https://www.facebook.com/achchi.neend">
              <img id="social" src={fb} alt="..." />
            </a>
            <a id="social" href="https://www.linkedin.com/company/neend">
              <img id="social" src={linkedin} alt="..." />
            </a>
            <a id="social" href=" https://www.instagram.com/neend.app/">
              <img id="social" src={instagram} alt="..." />
            </a>
            <a id="social" href="https://mobile.twitter.com/neend_app">
              <img id="social" src={twitter} alt="..." />
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default About;
const useStyles = makeStyles((theme) => ({
  aboutSectionBox: {
    paddingInline: 239,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingInline: 40,
    },
  },

  aboutSectionText: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 14,
    width: 581,
    marginBlock: 18,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  neendLogo: {
    width: 68.65,
    height: 54.47,
  },
  linkDiv: {
    marginBlockEnd: 17.17,
    display: "flex",
    flexDirection: "row",
  },
  appInfoText: {
    marginBlockStart: 26.97,
    color: "#fff",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: 14,
  },
  socialBox: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  socialIcons: {
    marginBlockStart: 38,
  },
  socialIconDiv: {
    marginTop: 23,
  },
  emailIcon: {
    height: 20,
    width: 28,
    marginRight: 17,
    marginLeft: 62,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 32,
      height: 13,
      width: 21,
    },
  },
  whatsAppIcon: {
    height: 27,
    width: 27,
    marginRight: 17,
    [theme.breakpoints.down("sm")]: {
      height: 20,
      width: 20,
      marginRight: 17,
    },
  },
  contactSection: {
    alignItems: "center",
  },
  contactText: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
}));
