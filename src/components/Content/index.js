import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import google from "../../images/googlePlay.svg";
import apple from "../../images/ApplePlay.svg";
import bgImg from "../../images/newBackground.svg";

const CenterText = () => {
  const styles = useStyles();

  return (
    <Box id="bg" className={styles.centerBox} component="div" display="flex">
      <Typography className={styles.ourDreamText}>OUR DREAM</Typography>
      <Typography className={styles.helpingIndiaText}>
        Helping India Sleep Better
      </Typography>
      <Typography className={styles.msgText}>
        We help 1 million users fall asleep in 15 minutes. Come, let&apos;s tuck
        you in!
      </Typography>
      <Typography className={styles.dotText}>.............</Typography>
      <div className={styles.neendApps}>
        <a
          href="https://play.google.com/store/apps/details?id=com.neend"
          rel="noreferrer"
        >
          <img className={styles.googlePlay} src={google} />
        </a>
        <img className={styles.appStoreIcon} src={apple} />
      </div>
      <img className={styles.bgImg} src={bgImg} />
    </Box>
  );
};
export default CenterText;
const useStyles = makeStyles((theme) => ({
  centerBox: {
    paddingBlock: 60.18,
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingBlock: 26,
      fontSize: 28,
      textAlign: "center",
    },
  },
  googlePlay: {
    [theme.breakpoints.down("sm")]: {
      width: 103.75,
      height: 31.04,
    },
  },
  appStoreIcon: {
    marginTop: -8,
    [theme.breakpoints.down("sm")]: {
      width: 103.75,
      height: 31.04,
    },
  },
  neendApps: {
    display: "flex",
    width: 340,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: 224.92,
      display: "flex",
      alignItems: "center",
    },
  },
  ourDreamText: {
    color: "#fff",
    fontSize: 24,
    marginBlockEnd: 28.02,
    fontWeight: 700,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      marginBottom: 5,
    },
  },
  helpingIndiaText: {
    color: "#937DE2",
    fontFamily: "Comfortaa",
    fontWeight: 600,
    fontSize: 48,
    marginBlockEnd: 86.73,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginBottom: 43,
      marginLeft: 62,
      marginRight: 63,
    },
  },
  msgText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    width: 509,
    textAlign: "center",
    marginBlockEnd: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      width: 187,
    },
  },
  dotText: {
    color: "#937DE2",
    fontWeight: 400,
    fontSize: 20,
    marginBlockEnd: 32.54,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginBottom: 20,
    },
  },
  downloadImg: {
    [theme.breakpoints.down("sm")]: {
      width: 224,
    },
  },
  bgImg: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      top: 66,
    },
  },
}));
