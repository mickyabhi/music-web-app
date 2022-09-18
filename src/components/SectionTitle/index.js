import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import purpleLine from "../../images/purpleLine.svg";

const SectionTitle = (props: string) => {
  const styles = useStyles();
  return (
    <Box className={styles.textBox} component="div" display="flex">
      <Typography className={styles.titleText}>{props?.title}</Typography>
      <img src={purpleLine} />
    </Box>
  );
};

export default SectionTitle;
const useStyles = makeStyles((theme) => ({
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 4,
    [theme.breakpoints.down("sm")]: {
      marginTop: 26,
    },
  },

  titleText: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Comfortaa",
    fontWeight: 700,
    marginBottom: 17,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      marginBottom: 6,
    },
  },
}));
