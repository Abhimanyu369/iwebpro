import About from '../components/NewPage/About';
import BackTop from '../components/NewPage/BackTop';
import Banner from '../components/NewPage/Banner';
import Footer from '../components/NewPage/Footer';
import Header from '../components/NewPage/Header';
import Process from '../components/NewPage/Process';
import Process2 from '../components/NewPage/Process2';
import Slider from '../components/NewPage/Slider';
import Testimonial from '../components/NewPage/Testimonial';
import WorkFlow from '../components/NewPage/WorkFlow';
import Current from '../components/NewPage/Current';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Skill from '../components/NewPage/Skill';

const MainPage = () => {

  const routePath = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[routePath]);

  return (
    <>
      <Header />
      <Banner />
      <Current />
      <About />
      <WorkFlow />
      <Process />
      <Process2 />
      <Testimonial />
      <Skill />
      <Slider />
      <Footer />
      <BackTop />
    </>
  )
}

export default MainPage;