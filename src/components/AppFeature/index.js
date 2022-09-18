import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import mobile from "../../images/mobile.svg";
import moonCloud from "../../images/moonCloud.svg";
const AppFeature = () => {
  const styles = useStyles();
  return (
    <Box component="div" display="block">
      <Box component="div" className={styles.appFeatureMainBox}>
        <Box className={styles.mobileColumn} component="div" display="flex">
          <img className={styles.mobileImage} src={mobile} />
        </Box>
        <Box className={styles.textColumn} component="div" display="flex">
          <Box className={styles.dotBox} component="div" display="flex">
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Bedtime Stories,
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Yog Nidra
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Guided
              Meditation, &
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Calming Music
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Added Every
              Single Day
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>In Regional
              Languages
            </Typography>
            <Typography className={styles.liText}>
              <Typography className={styles.dot}>●</Typography>Well, Mostly at
              Night
              <img className={styles.moonCloudImg} src={moonCloud} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AppFeature;
const useStyles = makeStyles((theme) => ({
  mobileColumn: {
    flex: 1,
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  textColumn: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "Center",
      marginBottom: 56,
    },
  },
  dotBox: {
    flexDirection: "column",
    padding: 101,
    [theme.breakpoints.down("sm")]: {
      marginTop: 28,
      padding: 0,
    },
  },
  dotText: {
    color: "#937DE2",
    fontSize: 22.12,
  },
  liText: {
    display: "flex",
    flexDirection: "row",
    fontSize: 18,
    color: "#fff",
    fontFamily: "Lato",
    fontWeight: 400,
    letterSpacing: 1,
    marginBottom: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  dot: {
    color: "#937DE2",
    fontSize: 18,
    marginRight: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  mobileImage: {
    marginTop: 28,
    [theme.breakpoints.down("sm")]: {
      width: 219,
    },
  },
  appFeatureMainBox: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  moonCloudImg: {
    marginLeft: 10,
  },
}));