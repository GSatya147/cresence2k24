import React from 'react';
import Footer from '../components/footer';
import Details from '../components/detailspagecomp'; 
import Header from '../components/Header';

const Events = () => {
  return (
    <div className='bg-site bg-no-repeat overflow-hidden flex flex-col justify-center lg:h-[full]'>
        < Header/>,
        < Details/>,
        < Footer/>
    </div>
    

  );
};

export default Events;