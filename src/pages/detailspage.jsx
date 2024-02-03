import React from 'react';
import Header from '../components/Header';
import Details from '../components/detailspagecomp'; 
import Footer from '../components/footer';
// import Nav from '../components/Nav';
import HomeComp from '../components/HomeComp';


const Events = () => {
  return (
    <div className='bg-site bg-no-repeat overflow-hidden flex flex-col justify-center lg:h-[full]'>
        < Header/>,
        < Details/>,
        {/* <div > */}
            < Footer/>
        {/* </div> */}
        < HomeComp/>
    </div>
    

  );
};

export default Events;