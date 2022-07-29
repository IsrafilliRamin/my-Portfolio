import React from 'react'
import Pilot from "../Images/WhatsApp Image 2022-05-30 at 13.19.07.jpeg"
import Awards from "../Images/award.png"

const AboutMe = () => {
    return (
        <div className='lg:flex md:flex sm:flex w-[100%] h-[130vw] lg:h-[50vw] md:h-[60vw] pr-5 lg:gap-40 gap-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
            <div>
                <div className='flex relative ml-10 lg:mt-10 md:mt-10 pt-2'>
                    <div className='lg:h-[35vw] lg:w-[27vw] md:h-[30vw] md:w-[23vw] h-[50vw] w-[45vw]  lg:text-4xl rounded-xl bg-gradient-to-r from-sky-900 to-indigo-900 animate-pulse '></div>
                    <img className='lg:h-[35vw] lg:w-[35vw] md:h-[30vw] md:w-[35vw] h-[50vw] w-[45vw] lg:text-4xl rounded-xl absolute left-14 top-14 hover:animate-ping cursor-pointer' src={Pilot} alt="" />
                </div>
            </div>
            <div className='h-[50vw] flex flex-col items-start pl-10 py-20 lg:gap-5 md:gap-5 sm:gap-5 xl:gap-5 gap-1'>
                <h1 className='font-bold lg:text-4xl text-lg sm:mb-10 lg:mb-10 text-[4vw] phone:m-0 '>About Me</h1>
                <p className='lg:mb-2 sm:mb-1 lg:text-lg md:text-sm text-[2.5vw] md:mb-1 '>It is a long established fact a reader will be distracted by readable content</p>
                <p className='lg:text-sm md:text-sm text-[2.5vw] md:mt-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore maxime eligendi fuga consequatur odio iure omnis delectus repellat iusto numquam sed, cum iste, reiciendis est illo eveniet magni. Repudiandae repellendus quo odio repellat, nobis et quam suscipit nemo sed odit molestias natus ipsa commodi corporis amet assumenda doloremque eaque!</p>
                <div className='flex items-center xl:mt-[10vw]'>
                    <img className='lg:h-[8vw] h-[10vw] rounded-xl' src={Awards} alt="" />
                    <div>
                        <h2 className=' ml-[2vw]  lg:text-sm  md:text-sm text-[2vw] '>International Design Awards 2021</h2>
                        <p className=' ml-[2vw] lg:text-sm md:text-sm text-[2vw] md:mt-1 md:pt-1'>Nemo enim ipsam valuptatem quia voluptas sit aspernatur audit and fugit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe