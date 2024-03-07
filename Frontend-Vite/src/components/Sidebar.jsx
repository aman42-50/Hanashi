import React from 'react'

import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const Sidebar = () => {

  const roseImage = new URL('../assets/rose.jpg', import.meta.url).href
  return (
    <div className='w-1/4 h-full fixed invisible lg:visible'>
        <div className='pt-14 flex-col ml-4 mr-2'>
            <div className='bg-color-container rounded-xl p-4 text-center'>
                <img
                    src={roseImage}
                    className='object-cover mx-auto h-16 w-16 rounded-full cursor-pointer'
                />
                <p className='mt-4 mb-1'>Aman Malviya</p>
                <p className='text-xs text-gray-400 tracking-wide'>@aman_m42</p>
                <hr className='mt-2 border-gray-700'/>
                <div className='my-4 flex'>
                    <div className='flex-col w-1/2 items-center'>
                        <p>15</p>
                        <p className='text-xs text-gray-400'>Posts</p>
                    </div>
                    <div className='h-8 border-[1px] border-gray-700 my-auto'>
                    </div>
                    <div className='flex-col w-1/2 items-center'>
                        <p>72</p>
                        <p className='text-xs text-gray-400'>Following</p>
                    </div>
                    <div className='h-8 border-[1px] border-gray-700 my-auto'>
                    </div>
                    <div className='flex-col w-1/2 items-center'>
                        <p>450</p>
                        <p className='text-xs text-gray-400'>Followers</p>
                    </div>
                </div>
                <hr className='mt-2 border-gray-700'/>
                <p className='pt-8 pb-4 text-color-cyan cursor-pointer'>My Profile</p>
            </div>
            <div className='mt-4 bg-color-container rounded-xl p-6'>
                Direct Messaging
                <div className='flex-col'>
                    <div className='flex justify-between my-4'>
                        <div className='flex gap-4'>
                            <img 
                                src={roseImage}
                                className='object-cover h-12 w-12 rounded-full'
                            />
                            <div className='flex-col my-auto'>
                                <p>Joe Mama</p>
                                <p className='text-xs text-gray-400'>@joemama</p>
                            </div>
                        </div>
                        <button type='button' className='my-auto hover:text-blue-200'><MessageOutlinedIcon /></button>
                    </div>

                    <div className='flex justify-between my-4'>
                        <div className='flex gap-4'>
                            <img 
                                src={roseImage}
                                className='object-cover h-12 w-12 rounded-full'
                            />
                            <div className='flex-col my-auto'>
                                <p>Minato</p>
                                <p className='text-xs text-gray-400'>@yellow_flash</p>
                            </div>
                        </div>
                        
                        <button type='button' className='my-auto hover:text-blue-200'><MessageOutlinedIcon /></button>
                    </div>

                    <div className='flex justify-between my-4'>
                        <div className='flex gap-4'>
                            <img 
                                src={roseImage}
                                className='object-cover h-12 w-12 rounded-full'
                            />
                            <div className='flex-col my-auto'>
                                <p>Jon Doe</p>
                                <p className='text-xs text-gray-400'>@jon_doe_77</p>
                            </div>
                        </div>
                        
                        <button type='button' className='my-auto hover:text-blue-200'><MessageOutlinedIcon /></button>
                    </div>
                </div>
                <p className='text-sm mt-8 text-color-cyan cursor-pointer'>Show More</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
