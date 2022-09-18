import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Title from "../../components/OurTeamTitle";
import TeamCard from "../../components/TeamCard";
import OurBelieverCard from "../../components/OurBelieverCard";
import founderLine from "../../images/founderLine.svg";
import hiringSection from "../../images/hiringSection.svg";
import mobileHiringSection from "../../images/mobileHiringSection.svg";
import FeaturedCard from "../../components/Featured";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import Carousel from "react-elastic-carousel";
import bgImg from "../../images/bg-img.svg";
import resImg from "../../images/resBg.svg";
import founderImg from "../../images/founderImg.svg";
import MobileDrawer from "../../components/MobileDrawer";
import promoter_a from "../../images/promoter_a.svg";
import promoter_b from "../../images/promoter_b.svg";
import promoter_c from "../../images/promoter_c.svg";
import promoter_d from "../../images/promoter_d.svg";
import promoter_e from "../../images/promoter_e.svg";
import promoter_f from "../../images/promoter_f.svg";
import article_a from "../../images/article_a.svg";
import article_b from "../../images/article_b.svg";
import article_c from "../../images/article_c.svg";

import { teamMembersData } from "../../utils/comman.utils";

const OurTeam = () => {
  const aboutRef = useRef();
  const classes = useStyles();
  const [mobileDrawer, setMobileDrawer] = useState(false);
  console.log("first", teamMembersData);
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
    <Box component="div">
      <Navbar
        onClick={() => setMobileDrawer(true)}
        click={() => aboutRef.current.scrollIntoView()}
        active="Team"
      />
      <MobileDrawer
        aboutUsHandler={() => {
          setMobileDrawer(false);
          setTimeout(() => {
            aboutRef.current.scrollIntoView();
          }, 500);
        }}
        open={mobileDrawer}
      />
      <Box className={classes.founderBg} component="img" src={bgImg} />
      <Box className={classes.founderImgBg} component="img" src={resImg} />
      <Box display="flex" className={classes.outerDiv} component="div">
        <Box className={classes.contentDiv} component="div" display="flex">
          <Title fontSize={42} title="Our Story" />
          <Typography className={classes.storyText}>
            In a world obsessed with the ‘hustle’, we at Neend, want you to
            re-discover the important things in life - and it all begins with a
            good night’s sleep. More than 55% of Indian adults face trouble
            falling asleep at least 3 nights a week. Launched in 2021, Neend is
            on a mission to change that. Inspired by ancient wisdom and driven
            by scientific research, we are here to bring you the best of both
            worlds! Disclaimer: All our solutions come with one side effect -
            you’ll fall in love with us!
          </Typography>
          <Title fontSize={32} title="" fontFamily="Open Sans" />

          <Box display="flex" className={classes.founderSection}>
            <Box
              className={classes.founderImg}
              component="img"
              src={founderImg}
            />
            <Box component="div">
              <Typography className={classes.descriptionText}>
                “I realised the superpower that sleep is only when I seemed to
                have lost mine a few years back!
                <br />
              </Typography>
              <Box component="div">
                <Typography className={classes.descriptionText}>
                  Lying awake in bed, desperate for relief, I felt the dearth of
                  natural non-habit-forming products for falling asleep. I also
                  realised - I am not the only one struggling. So, Neend was
                  born. <br />
                </Typography>
              </Box>
              <Box component="div">
                <Typography className={classes.descriptionText}>
                  When you sleep, you dream. But when you sleep well, you wake
                  up wanting to go after your dreams! I want every Indian to
                  have this superpower.
                  <br />
                </Typography>
              </Box>
              <Box component="div">
                <Typography className={classes.descriptionText}>
                  As for me - knowing you’re sleeping well, I’m sleeping
                  peacefully too!”
                </Typography>
              </Box>

              <Box display="flex" className={classes.founderDetail}>
                <Box
                  component="img"
                  className={classes.founderLine}
                  src={founderLine}
                />
                <Box className={classes.founderBox}>
                  <Typography className={classes.founderNameText}>
                    Surbhi Jain
                  </Typography>
                  <Typography className={classes.founderText}>
                    Founder
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography className={classes.contentText}>
            <Box component="div">
              <Typography className={classes.contentText}>
                “I realised the superpower that sleep is only when I seemed to
                have lost mine a few years back!
                <br />
              </Typography>
              <Box component="div">
                <Typography className={classes.contentText}>
                  Lying awake in bed, desperate for relief, I felt the dearth of
                  natural non-habit-forming products for falling asleep. I also
                  realised - I am not the only one struggling. So, Neend was
                  born. <br />
                </Typography>
              </Box>
              <Box component="div">
                <Typography className={classes.contentText}>
                  When you sleep, you dream. But when you sleep well, you wake
                  up wanting to go after your dreams! I want every Indian to
                  have this superpower.”
                  <br />
                </Typography>
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box component="div" display="flex" className={classes.teamMemberBox}>
        <Title fontSize={32} title="Say Hello to the Sleep Tribe" />
        <Typography className={classes.msgText}>
          All the crazy go-getters who turned their love into a profession:
          sleep!
        </Typography>
        <Box component="div" display="flex" className={classes.teamMembers}>
          {teamMembersData.map((item) => (
            <TeamCard
              img={item?.img}
              key={item?.id}
              memberName={item?.memberName}
              work={item?.work}
            />
          ))}
        </Box>
      </Box>
      <Box display="flex" className={classes.ourBeliever}>
        <Title fontSize={32} title="Our Believers" />
        <Box className={classes.ourBelieverBox} component="div" display="flex">
          <OurBelieverCard
            img={promoter_a}
            name="Vaibhav Domkundwar"
            companyName="Better Capital"
          />
          <OurBelieverCard
            img={promoter_b}
            name="Kunal Shah"
            companyName="Cred"
          />
          <OurBelieverCard
            img={promoter_c}
            name="Kunal Bahl"
            companyName="Snapdeal"
          />
          <OurBelieverCard
            img={promoter_d}
            name="Rohit Bansal"
            companyName="Snapdeal"
          />
          <OurBelieverCard
            img={promoter_e}
            name="Sandeep Singhal"
            companyName="Ex-Nexus"
          />
          <OurBelieverCard
            img={promoter_f}
            name="Nandan Reddy"
            companyName="Swiggy"
          />
        </Box>
      </Box>
      <Box display="flex" className={classes.featuredMainBox}>
        <Title fontSize={32} title="Featured In" />
        <Box display="flex" className={classes.featuredBox}>
          <Carousel
            enableAutoPlay={true}
            autoPlaySpeed={4000}
            breakPoints={breakPoints}
            showArrows={false}
          >
            <FeaturedCard
              url="https://lifestyle.livemint.com/health/wellness/have-trouble-sleeping-this-app-may-be-the-answer-111650416480552.html"
              img={article_a}
              title="Have trouble sleeping? This app may be the ans..."
              duration="5 min"
            />
            <FeaturedCard
              url="https://openthemagazine.com/cover-stories/the-gift-of-sleep"
              img={article_b}
              title="Wellness Cover Story - The Gift of Sleep"
              duration="10 min"
            />
            <FeaturedCard
              url="https://yourstory.com/herstory/2022/04/woman-entrepreneur-sleep-startup-regional-languages-neend"
              img={article_c}
              title="This app aims to help people sleep better with..."
              duration="5 min"
            />
          </Carousel>
        </Box>
      </Box>
      <Box className={classes.careerCard}>
        <img className={classes.hiringImg} src={hiringSection} />
        <img className={classes.mobileHiringImg} src={mobileHiringSection} />
        <Typography className={classes.bigGoal}>
          A Big Goal needs great people and we need YOU... <br />
          <span className={classes.emailMsgText}>
            Feel free to drop us an email at:
          </span>
          <br />
          <span className={classes.neendMail}>career@neend.app</span>
        </Typography>
      </Box>
      <Box>
        <ContactUs scrollRef={aboutRef} />
      </Box>
      <Footer />
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  storyText: {
    textAlign: "center",
    color: "#fff",
    width: 930,
    fontSize: 17,
    fontFamily: "Open Sans",
    marginTop: 20,
    marginBottom: 62,
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      width: 300,
      fontSize: 14,
      marginTop: 13,
      marginBottom: 35,
    },
  },
  contactUs: {
    flexAline: "left",
  },
  founderImgBg: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: 555,
      width: "100%",
    },
  },
  bigGoal: {
    display: "none",
    fontSize: 22,
    fontFamily: "Open Sans",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 17,
      width: 300,
      marginInline: 20,
      display: "Block",
      marginBottom: 100,
      textAlign: "center",
    },
  },
  neendMail: {
    fontSize: 22,
    fontFamily: "Open Sans",
    fontWeight: 400,
    color: "#F8E71C",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  founderLine: {
    height: 68,
    width: 3,
    [theme.breakpoints.down("sm")]: {
      height: 38,
    },
  },
  contentDiv: {
    width: 908,
    alignItems: "center",
    paddingTop: 50,
    flexDirection: "column",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 23,
    },
  },
  founderBg: {
    position: "absolute",
    zIndex: -999,
    top: 730,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      display: "none",
    },
  },
  outerDiv: {
    justifyContent: "center",
  },
  founderSection: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  founderDetail: {
    marginLeft: 71,
    marginTop: 38,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 12,
    },
  },
  neendYouText: {
    fontFamily: "Open Sans",
    fontSize: 22,
    fontWeight: 600,
    color: "#fff",
  },
  mailText: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: 22,
    fontWeight: 600,
  },
  msgText: {
    marginTop: 11,
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: 300,
    fontSize: 18,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      width: 300,
      textAlign: "center",
      marginBlock: 13,
    },
  },
  descriptionText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Open Sans",
    fontWeight: 300,
    width: 632,
    marginLeft: 70,
    marginBottom: 10,
    lineHeight: 1.6,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Featured: {
    flexDirection: "row",
  },
  founderText: {
    color: "#F8E71C",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  founderNameText: {
    color: "#fff",
    fontFamily: "Comfortaa",
    fontSize: 24,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  careerCard: {
    marginTop: 47,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
    },
  },
  founderBox: {
    marginLeft: 24,
  },

  teamMembers: {
    flexWrap: "wrap",
    justifyContent: "center",
    width: 952,
    [theme.breakpoints.down("sm")]: {
      width: 360,
      justifyContent: "space-around",
      marginTop: 12,
      paddingInline: 24,
    },
  },
  teamMemberBox: {
    alignItems: "center",
    flexDirection: "column",
    marginTop: 108,
    [theme.breakpoints.down("sm")]: {
      marginTop: 52,
    },
  },
  ourBelieverBox: {
    width: 888,
    marginTop: 56,
    marginBottom: 88,
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      width: 294,
      flexWrap: "wrap",
      marginBottom: 58,
    },
  },
  ourBeliever: {
    alignItems: "center",
    flexDirection: "column",
    marginTop: 60,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
  featuredBox: {
    width: 872,
    marginTop: 52,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      width: 300,
    },
  },
  featuredMainBox: {
    alignItems: "center",
    flexDirection: "column",
  },
  hiringImg: {
    width: "100%",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileHiringImg: {
    width: "100%",
    marginBottom: 17,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  founderImg: {
    width: 245,
    height: 330,
    [theme.breakpoints.down("sm")]: {
      width: 148,
      height: 176,
    },
  },
  emailMsgText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  contentText: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: 12,
      color: "#fff",
      width: 300,
      marginTop: 15,
      fontFamily: "Open Sans",
      fontWeight: 300,
    },
  },
}));
export default OurTeam;
