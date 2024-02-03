import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Events from './Events';
// import Contact from './components/Contact';
import Team from './Team'

import Sponsors from './Sponsors';
import Footer from './footer'
import EventSlider from './Eventslider';

const Home = () => {


  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col justify-center lg:h-[full]'>
      <Header />
      <Nav />
      <Banner />
      <About />
      <Events />
      <EventSlider />
      {/* <Timeline /> */}
      <Team />
      {/* <Sponsors /> */}
      <Footer />
    </div>
  );
};

export default Home;
