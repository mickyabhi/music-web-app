import React, { useEffect, useState } from "react";
import "./ToggleButton.css";
import "./Navbar.css";
import logo from "../../images/neendLogo.svg";
import menuIcon from "../../images/menuIcon.svg";
import playStoreIcon from "../../images/playStoreIcon.svg";
import {
  AppBar,
  Fade,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const Navbar = (props: any) => {
  const styles = useStyles(props);
  const [navPosition, setNavPosition] = useState(false);
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  useEffect(() => {
    setNavPosition(trigger);
  }, [trigger]);

  return (
    <Fade in={!navPosition}>
      <AppBar position="sticky" className={styles.headerView}>
        <IconButton
          onClick={props?.onClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          s
        >
          <img className={styles.menuIconStyle} src={menuIcon} alt="" />
        </IconButton>
        <img id="logo" src={logo} alt="" />
        <Toolbar className={styles.navHeading}>
          <a href="https://neend.app/">
            <Typography className={styles.navHomeText}>HOME</Typography>
          </a>
          <Typography onClick={props.click} className={styles.navButtons}>
            ABOUT US
          </Typography>
          <a href="https://blog.neend.app/">
            <Typography className={styles.navButtons}>BLOG</Typography>
          </a>
          <a href="https://neend.app/#/team">
            <Typography className={styles.teamButton}>TEAM</Typography>
          </a>
          <a href="https://shop.neend.app">
            <ButtonComponent
              width={100}
              mobileWidth={69}
              height={48}
              mobileHeight={32}
              title="Shop"
              variant="outlined"
              borderColor="#937DE2"
              radius={40}
              borderWidth={2}
              titleColor="#fff"
              textSize={14}
              mobileTextSize={12}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.neend&utm_source=website">
            <img className={styles.playStoreIcon} src={playStoreIcon} alt="" />
          </a>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

const useStyles = makeStyles((theme) => ({
  headerView: {
    backgroundColor: "#03174C",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingInline: 250,
    paddingBlock: 15,
    alignItems: "center",
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      paddingInline: 25,
      paddingBlock: 12,
    },
  },
  playStoreIcon: {
    width: 31.82,
    height: 32,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 15.31,
    },
  },
  navHeading: {
    display: "flex",
    width: 524,
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
  },
  navHomeText: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 400,
    color: (props) => (props?.active == "Home" ? "#937DE2" : "#fff"),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navButtons: {
    "&:hover": {
      color: "#937de2",
    },
    cursor: "pointer",
    fontSize: 13,
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  teamButton: {
    color: (props) => (props?.active == "Team" ? "#937DE2" : "#fff"),
    "&:hover": {
      color: "#937de2",
    },
    cursor: "pointer",
    fontSize: 13,
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIconStyle: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingInline: 12,
    },
  },
}));

export default Navbar;
