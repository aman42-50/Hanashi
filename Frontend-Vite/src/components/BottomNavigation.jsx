import React from 'react'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const BottomNavigationComp = () => {

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{bgcolor: "#06141d" }} className='w-full visible sm:invisible fixed bottom-0' value={value} onChange={handleChange}>
      <BottomNavigationAction
        value="home"
        icon={<HomeOutlinedIcon className='text-white' />}
      />
      <BottomNavigationAction
        value="messages"
        icon={<EmailOutlinedIcon className='text-white' />}
      />
      <BottomNavigationAction
        value="notifications"
        icon={<NotificationsOutlinedIcon className='text-white' />}
      />
    </BottomNavigation>
  )
}

export default BottomNavigationComp
