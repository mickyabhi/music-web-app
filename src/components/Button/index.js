import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const ButtonComponent = (props: any) => {
  const styles = useStyles(props);
  return (
    <Button
      onClick={props.click}
      className={styles.buttonStyle}
      variant={props.variant}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
};
export default ButtonComponent;

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.titleColor,
    width: (props) => props.width,
    height: (props) => props.height,
    borderRadius: (props) => props.radius,
    fontSize: (props) => props.textSize,
    borderColor: (props) => props.borderColor,
    borderWidth: (props) => props.borderWidth,
    fontFamily: "Open Sans",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      height: (props) => props.mobileHeight,
      width: (props) => props.mobileWidth,
      fontSize: (props) => props.mobileTextSize,
    },
  },
}));
