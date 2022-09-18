import React, { useRef, useState } from "react";
import About from "../../components/AboutSection";
import AppFeature from "../../components/AppFeature";
import CenterText from "../../components/Content";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductSection from "../../components/Products";
import SectionTitle from "../../components/SectionTitle";
import CarouselScreen from "../../components/ReviewSection";
import "../../i18n";
import MobileDrawer from "../../components/MobileDrawer";

const Home = () => {
  const aboutRef = useRef(null);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <>
      <Navbar
        click={() => aboutRef.current.scrollIntoView()}
        onClick={() => setMobileDrawer(true)}
        active="Home"
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
      <CenterText />
      <SectionTitle title="APP FEATURES" />
      <AppFeature />
      <SectionTitle title="PRODUCTS" />
      <ProductSection />
      <SectionTitle title="REVIEWS" />
      <CarouselScreen />
      <About aboutRef={aboutRef} />
      <Footer />
    </>
  );
};

export default Home;
