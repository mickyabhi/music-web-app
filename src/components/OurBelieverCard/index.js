import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const OurBelieverCard = (props: any) => {
  const styles = useStyles();

  return (
    <Box component="div" className={styles.ourBelievers}>
      <Box className={styles.believerImg} component="img" src={props?.img} />
      <Typography className={styles.believersMember}>{props?.name}</Typography>
      <Typography className={styles.companyName}>
        {props?.companyName}
      </Typography>
    </Box>
  );
};

export default OurBelieverCard;

const useStyles = makeStyles((theme) => ({
  ourBelievers: {
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 14,
    },
  },
  believersMember: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 4,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  companyName: {
    color: "#F8E71C",
    fontFamily: "Open Sans",
    fontSize: 13,
    fontWeight: 400,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  believerImg: {
      borderRadius: 50,
      [theme.breakpoints.down("sm")]: {
          width:75,
      }
  },
}));
