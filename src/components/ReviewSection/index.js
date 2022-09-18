import React from "react";
import firstReviewImg from "../../images/1.svg";
import secReviewImg from "../../images/2.svg";
import thirdReviewImg from "../../images/3.svg";
import lines from "../../images/lines.svg";
import mobileLines from "../../images/mobileBg.svg";
import { Box, makeStyles } from "@material-ui/core";
import "./index.css";
import Carousel from "react-elastic-carousel";

const CarouselScreen = () => {
  const styles = useStyles();
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 600,
      itemsToShow: 2,
    },
    {
      width: 800,
      itemsToShow: 3,
    },
    {
      width: 1500,
      itemsToShow: 3,
    },
  ];
  return (
    <Box mt={7} id="ig" className={styles.carousalBox} component="div">
      <Carousel
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        breakPoints={breakPoints}
        showArrows={false}
      >
        <img className={styles.reviewImg} src={firstReviewImg} />
        <img className={styles.reviewImg} src={secReviewImg} />
        <img className={styles.reviewImg} src={thirdReviewImg} />
      </Carousel>
      <img className={styles.linesImg} src={lines} />
      <img className={styles.mobileLines} src={mobileLines} />
    </Box>
  );
};
export default CarouselScreen;
const useStyles = makeStyles((theme) => ({
  carousalBox: {
    paddingInline: 272,
    [theme.breakpoints.down("sm")]: {
      paddingInline: 44,
    },
  },
  linesImg: {
    position: "absolute",
    marginTop: -180,
    left: 0,
    zIndex: -1,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileLines: {
    position: "absolute",
    width: "100%",
    display: "none",
    zIndex: -1,
    left: 0,
    marginTop: -180,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  reviewImg: {
    [theme.breakpoints.down("sm")]: {
      width: 190,
    },
  },
}));
