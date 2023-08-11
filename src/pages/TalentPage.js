import Header from '../components/NewPage/Header';
import Banner from '../components/Talent/Banner';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import Project from '../components/Talent/Project';
import Service from '../components/Talent/Service';
import Remote from '../components/Talent/Remote';
import GetStarted from "../components/Talent/GetStarted";
import AccessProject from "../components/Talent/AccessProject";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TalentPage = () => {

  const routePath = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[routePath]);

  return (
    <>
      <Header />
      <Banner />
      <Project />
      <AccessProject />
      <Service />
      <Remote />
      <GetStarted />
      <Footer />
      <BackTop />
    </>
  )
}

export default TalentPage;