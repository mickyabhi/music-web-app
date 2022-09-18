import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Button from "../Button";
import productImg from "../../images/productImage.svg";

const ProductSection = () => {
  const styles = useStyles();
  return (
    <Box className={styles.productBox} component="div">
      <Box component="div" display="block">
        <Typography className={styles.introducingText}>Introducing</Typography>
        <Typography className={styles.gumText}>Sleep Gummies</Typography>
        <Typography className={styles.msgFirstText}>
          Helps you fall asleep within 15 mins,
        </Typography>
        <Typography className={styles.msgSecText}>
          without any side effect
        </Typography>
        <a href="https://shop.neend.app/">
          <Button
            titleColor="#fff"
            backgroundColor="#937DE2"
            variant="contained"
            title="ORDER NOW"
            width={202}
            height={50}
            radius={40}
            textSize={16}
            borderWidth={2}
          />
        </a>
      </Box>

      <img className={styles.productImg} src={productImg} />
    </Box>
  );
};
export default ProductSection;
const useStyles = makeStyles((theme) => ({
  productBox: {
    paddingInline: 287,
    marginTop: -92,
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginTop: 0,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    },
  },
  introducingText: {
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 24,
    color: "#937DE2",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginTop: 31,
      fontWeight: 400,
    },
  },
  gumText: {
    fontFamily: "Comfortaa",
    fontWeight: 700,
    fontSize: 28,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginTop: 4,
    },
  },
  msgFirstText: {
    color: "#937DE2",
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 24,
    width: 373,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginTop: 6,
      paddingLeft: 63,
      paddingRight: 63,
    },
  },
  msgSecText: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 24,
    width: 373,
    marginBlockEnd: 42,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginTop: 6,
      paddingLeft: 63,
      paddingRight: 63,
      marginBottom: 300,
    },
  },
  productImg: {
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      let: 0,
      width: 351,
      marginTop: 24,
    },
  },
  freeMsgText: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: 600,
    color: "#F8E71C",
    width: 330,
    marginBlockStart: 17,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 400,
      width: "100%",
      textAlign: "center",
      marginBottom: 14,
    },
  },
}));
