import React, { useContext } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import BottomNavigationComp from '../components/BottomNavigation'
import CreatePost from '../components/CreatePost'
import Feed from '../components/Feed'

const HomePage = () => {
  return (
    <div className='bg-color-bg w-full h-full text-white fixed overflow-y-scroll'>
      <Navbar />

      <Sidebar />

      <div className='flex-col h-full w-full sm:w-3/4 lg:w-1/2 px-2 pt-14 mx-auto'>
        <CreatePost />
        <Feed />
        <BottomNavigationComp />
      </div>


    </div>
  )
}

export default HomePage
