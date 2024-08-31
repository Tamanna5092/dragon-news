import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] text-xl'>{moment().format("dddd,")} <span className='text-[#706F6F]'>{moment().format("MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;