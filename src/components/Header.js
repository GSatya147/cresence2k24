import React from 'react';
import Logo from '../assets/logo.png' ;
import about from './About';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8 lg:pt-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* <h1 className='text-[35px] text-gradient'>
            CreSencE
          </h1> */}
          <a href='#'>
            <img src={Logo} alt='' className='h-[76px]'></img>
          </a>
          <Link className='btn btn-sm' to = "about" smooth= {true}>
            Explore!
          </Link>
        </div>
      </div>
    </header>
  
  )
};

export default Header;
