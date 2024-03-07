import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {

  const roseImage = new URL('../assets/rose.jpg', import.meta.url).href

  return (
    <div className='fixed w-full h-14'>
        <div className='flex h-full justify-end items-center gap-6 px-4'>
            <div className='invisible sm:visible cursor-pointer flex h-10 px-4 gap-2 justify-center items-center bg-color-secondary rounded-3xl'>
                <HomeIcon />
                <p>Home</p>
            </div>
            <EmailOutlinedIcon className='cursor-pointer invisible sm:visible' />
            <NotificationsNoneOutlinedIcon className='cursor-pointer invisible sm:visible' />
            <img
              src={roseImage}
              className='object-cover h-8 w-8 rounded-full cursor-pointer'
            />

        </div>
    </div>
  )
}

export default Navbar
