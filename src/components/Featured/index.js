import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import hoverImg from "../../images/hoverImage.svg";

const FeaturedCard = (props: any) => {
  const styles = useStyles();
  const [hover, setHover] = useState(false);
  return (
    <a
      href={props.url}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box component="div" className={styles.ourBelievers}>
        {hover && <img className={styles.hoverImg} src={hoverImg} />}
        <img className={styles.newsImg} src={props?.img} />
        <Typography className={styles.featuredNews}>{props?.title}</Typography>
        <Typography className={styles.newsTime}>{props?.duration} </Typography>
      </Box>
    </a>
  );
};

export default FeaturedCard;
const useStyles = makeStyles((theme) => ({
  ourBelievers: {
    alignItems: "canter",
  },
  featuredNews: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: 18,
    marginTop: 9,
    marginBottom: 4,
      width: 248,
    fontWeight:300,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  newsTime: {
    color: "#F8E71C",
    fontFamily: "Open Sans",
    fontSize: 12,
  },
  newsImg: {
    borderRadius: 8,
    width: 246,
    height: 165,
    opacity: 4,
  },
  hoverImg: {
    position: "absolute",
  },
}));
