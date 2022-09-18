import { Typography, Modal, Box, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar";
import drawerLine from "../../images/drawerLine.svg";
const MobileDrawer = (props: any) => {
  const styles = useStyles();
  return (
    <Modal open={props?.open} onClose={props?.aboutUsHandler}>
      <Box className={styles.navButtonBox} component="div">
        <Navbar onClick={props?.aboutUsHandler} />
        <a href="https://neend.app/">
          <Typography className={styles.navText}>HOME</Typography>
        </a>
        <img className={styles.imgLine} src={drawerLine} />
        <Typography onClick={props.aboutUsHandler} className={styles.navText}>
          ABOUT US
        </Typography>
        <img className={styles.imgLine} src={drawerLine} />
        <a href="https://blog.neend.app/">
          <Typography className={styles.navText}>BLOG</Typography>
        </a>
        <img className={styles.imgLine} src={drawerLine} />

        <a href="https://neend.app/#/team">
          <Typography className={styles.navText}>TEAM</Typography>
        </a>
      </Box>
    </Modal>
  );
};

export default MobileDrawer;
const useStyles = makeStyles(() => ({
  navButtonBox: {
    backgroundColor: "#03174C",
    paddingBlockEnd: 14,
  },
  navText: {
    color: "#fff",
    fontSize: 14,
    marginBlock: 14,
    marginLeft: 40,
  },
  divider: {
    borderWidth: 1,
    color: "#937DE2",
    width: 234,
    height: 3,
  },
  imgLine: {
    marginLeft: 40,
  },
}));
