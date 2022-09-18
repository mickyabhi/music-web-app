import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Title = (props: any) => {
  const classes = useStyles(props);

  return <Typography className={classes.title}>{props?.title}</Typography>;
};
const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("sm")]: {
      fontSize: (props) => props.fontSize,
      color: "#F8E71C",
      fontFamily: (props) =>
        props?.fontFamily ? props?.fontFamily : "Comfortaa",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      color: "#F8E71C",
      fontFamily: (props) =>
        props?.fontFamily ? props?.fontFamily : "Comfortaa",
      width: 233,
      textAlign: "center",
    },
  },
}));
export default Title;
