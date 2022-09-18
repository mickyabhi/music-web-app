import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import whatsApp from "../../images/whatsApp.png";
import email from "../../images/email.png";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import { Row } from "react-bootstrap";

const ContactUs = (props: any) => {
  const classes = useStyles();
  return (
    <Box ref={props?.scrollRef} display="flex" className={classes.footerCard}>
      <Box display="flex" className={classes.contactUs}>
        <Box display="flex" className={classes.contacts}>
          <Box display="flex" className={classes.contactWhatsapp}>
            <Box component="img" className={classes.whatsApp} src={whatsApp} />
            <Typography className={classes.contactText}>
              +91-7338058468
            </Typography>
          </Box>
          <Box display="flex">
            <Box component="img" className={classes.email} src={email} />
            <Typography className={classes.contactText}>
              care@neend.app
            </Typography>
          </Box>
        </Box>
        <Box display="flex" className={classes.social}>
          <Typography className={classes.followUsText}>
            Follow us on:
          </Typography>
          <Box>
            <a href=" https://www.facebook.com/achchi.neend">
              <Box
                className={classes.socialIcons}
                component="img"
                src={facebook}
              />
            </a>
            <a href="https://mobile.twitter.com/neend_app">
              <Box
                className={classes.socialIcons}
                component="img"
                src={twitter}
              />
            </a>
            <a href="https://www.linkedin.com/company/neend">
              <Box
                className={classes.socialIcons}
                component="img"
                src={linkedin}
              />
            </a>
            <a i href=" https://www.instagram.com/neend.app/">
              <Box
                className={classes.socialIcons}
                component="img"
                src={instagram}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  social: {
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
      flexDirection: "column",
      marginTop: 45,
    },
  },
  contactWhatsapp: {
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
    },
  },
  contacts: {
    flexDirection: Row,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerCard: {
    justifyContent: "center",
    backgroundColor: "#03174c",
    alignContent: "center",
  },

  contactUs: {
    width: 888,
    height: 92,
    marginLeft: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contactText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Open Sans",
      marginRight: 62,
      [theme.breakpoints.down("sm")]: {
          textAlign: "center",
      }
},
  whatsApp: {
    width: 27,
    height: 27,
      marginRight: 15,
      [theme.breakpoints.down("sm")]: {
          marginLeft: 45,
      }
},
  email: {
    width: 28,
    height: 20,
      marginRight: 15,
      [theme.breakpoints.down("sm")]: {
          marginLeft: 45,
      }
},
  followUsText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 100,
    marginRight: 28,
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      margin: 0,

  marginBottom: 20,
      textAlign:"center",
    },
  },
    socialIcons: {
        marginRight:28,
        [theme.breakpoints.down("sm")]: {
            marginRight: 15,
            marginLeft: 5,
        }
    },
}));
export default ContactUs;
