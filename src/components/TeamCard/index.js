import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const TeamCard = (props: any) => {
  const styles = useStyles();

  return (
    <Box className={styles.membersCard} component="div">
      <img className={styles.teamMemberImg} src={props?.img} />
      <Typography className={styles.memberName}>{props?.memberName}</Typography>
      <Typography className={styles.memberWork}>{props.work}</Typography>
    </Box>
  );
};

export default TeamCard;
const useStyles = makeStyles((theme) => ({
  membersCard: {
    marginTop: 57,
    marginInline: 44,
    [theme.breakpoints.down("sm")]: {
      marginInline: 22,
      marginTop: 14,
    },
  },
  memberName: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: "#fff",
      marginTop: 3,
    textAlign:"center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
        marginTop: 2,
      textAlign:"center",
    },
  },
  memberWork: {
    fontSize: 14,
    color: "#F8E71C",
      fontFamily: " Open Sans",
    textAlign:"center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
        letterSpacing: 2,
        textAlign: "center",
    },
  },
  teamMemberImg: {
    width: 150,
    height: 158,
    [theme.breakpoints.down("sm")]: {
      width: 108,
      height: 123,
    },
  },
}));
