import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Roma from "../Images/roma-removebg-preview.png"
import Moon from "../Images/moon.png"
import Sun from "../Images/sun.png"
import "../../src/Global.css"
import Home from '../Pages/Home'
import { IoBody } from 'react-icons/io5'
import { AppContext } from '../Context/context'
const Mainsection = () => {
    const { setDarkmode, darkmode } = useContext(AppContext)


    return (
        <div className='flex justify-between h-[80vw] sm:h-[50vw] lg:h-[50vw] xl:h-[50vw] 2xl:h-[50vw]   w-[100%]  items-center  font-sans '>
             {/* left div start */}
            <div className='text-start m-10 flex-1 w-[10vw]'>
                <div className=''>
                    <h3 className=' sm:text-lg lg:text-2xl phone:text-[3vw] text-sm '>Hello, My name is</h3>
                    <h1 className='font-bold  mt-5 lg:text-5xl md:text-lg sm:text-2xl text-xl truncate o:text-[1vw]'>Ramin Israfilli</h1>
                    <h2 className='clip-path-clipPath bg-gradient-to-r from-sky-500 to-indigo-500 lg:text-3xl font-bold my-5 animate-bounce lg:w-[40vw] sm:w-[40vw] truncate w-[45vw] text-[4vw]  '>Front end Developer</h2>
                    <p className='text-start font-semibold mt-10  lg:w-[50vw] md:w-[35vw] sm:w-[35vw] xl:text-[10vw] lg:text-xl sm:text-[13px] w-36 phone:text-[2vw] text-[2vw] lg:leading-tight ' >I design and develop services for customers of all sizes,specializing in creating stylish, modern websites, web services and online stores</p>
                </div>
            </div>
            {/* left div end */}
            {/* right div start/ img */}
            <div className='clip-path-mainPath bg-gradient-to-r from-sky-500 to-indigo-500 lg:h-[50vw] sm:h-[50vw] h-[80vw] relative flex-1 overflow-hidden  '>
                 {/* IMG */}
                <img className='absolute   h-[61vw]    ml-[20vw] mt-[10vw] mb-[15vw] lg:h-[50vw] sm:h-[60vw] xl:ml-[15vw] object-cover lg:ml-[15vw] md:ml-[15vw] md:pb-[10vw] md:mt-[0vw]  ' src={Roma} alt="Roma" />
                <div className='flex ease-in-out duration-500  absolute right-10  border rounded-xl mt-5 bg-white'>
                    {/* Dark mode start */}
                    <div onClick={() => setDarkmode(!darkmode)} className={`${darkmode && "lg:!left-7 md:!left-7 !left-4 "} absolute bg-black ease-in-out duration-500 rounded-3xl   lg:left-0 md:left-0 lg:bottom-0 md:bottom-0 left-0 lg:w-6 md:w-6  lg:h-[24px] md:h-[24px] w-3 h-[12px] cursor-pointer z-20`}  ></div>
                    <img className='lg:h-6 md:h-6 lg:w-6 md:w-6 h-3 w-3 mr-1' src={Sun} alt="sun" />
                    <img className='lg:h-6 md:h-6 lg:w-6 md:w-6 h-3 w-3 ' src={Moon} alt="moon" />
                     {/* Dark mode end */}
                </div>
            </div>
             {/* right div end/ img */}
        </div>

    )
}




export default Mainsection