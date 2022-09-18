import { Box, makeStyles, Typography, FormHelperText } from "@material-ui/core";
import Button from "../../components/Button";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../../components/AboutSection";
import MobileDrawer from "../../components/MobileDrawer";
const EmailUnsubscribe = () => {
  const styles = useStyles();
  const aboutRef = useRef(null);

  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState(false);

  useEffect(() => {
    setEmailAddressError(false);
  }, [emailAddress]);

  const submitEmailAddress = async () => {
    if (emailAddress === "" || !emailAddress.includes("@")) {
      setEmailAddressError(true);
      return;
    }
    const res = fetch(
      "https://neend-app-default-rtdb.firebaseio.com/unsubscribe_emails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress,
        }),
      }
    );
    if (res) {
      alert("You Have Been Unsubscribed");
      setEmailAddress("");
    } else {
      alert("Your email not captured try again!");
    }
  };

  return (
    <Box className={styles.emailUnsubscribe} component="div" display="flex">
      <Navbar
        click={() => aboutRef.current.scrollIntoView()}
        onClick={() => setMobileDrawer(true)}
      />
      <MobileDrawer
        aboutUsHandler={() => {
          setMobileDrawer(false);
          setTimeout(() => {
            aboutRef.current.scrollIntoView();
          }, 500);
        }}
        click={() => aboutRef.current.scrollIntoView()}
        open={mobileDrawer}
      />
      <Typography className={styles.unsubscribeText}>Unsubscribe</Typography>
      <Typography className={styles.msgText}>
        We are sorry to see you go!
      </Typography>
      <input
        value={emailAddress}
        className={styles.inputBox}
        placeholder="Email id"
        onChange={(event) => setEmailAddress(event.target.value)}
      />
      <FormHelperText className={styles.helperText} error={emailAddressError}>
        Plz enter valid email!
      </FormHelperText>
      <Button
        titleColor="#fff"
        backgroundColor="#937DE2"
        variant="contained"
        title="Submit"
        width={202}
        height={50}
        radius={40}
        textSize={16}
        borderWidth={2}
        click={submitEmailAddress}
      />
      <About aboutRef={aboutRef} />
      <Footer />
    </Box>
  );
};

export default EmailUnsubscribe;
const useStyles = makeStyles((theme) => ({
  emailUnsubscribe: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  unsubscribeText: {
    marginTop: 160,
    color: "#fff",
    fontSize: 24,
    fontFamily: "Open Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginTop: 100,
    },
  },
  inputBox: {
    width: 340,
    height: 48,
    marginTop: 32,
    borderRadius: 8,
    paddingInline: 12,
    fontSize: 14,
    fontFamily: "Open Sans",
  },
  helperText: {
    fontSize: 14,
    width: 330,
    marginBottom: 32,
    color: "#03164C",
  },
  msgText: {
    marginTop: 8,
    color: "#fff",
    fontSize: 18,
    fontFamily: "Open Sans",
    [theme.breakpoints.down("sm")]: {
      marginTop: 2,
      fontSize: 12,
    },
  },
}));
