import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { AiFillGithub } from "react-icons/ai"
import { ImLocation } from "react-icons/im"
const InputMain = () => {
    return (
        <div className='h-[100%] lg:h-[100%] lg:p-5 md:h-[100%] md:mt-8 md:p-10 mt-20 ml-5 mr-5  lg:flex md:flex sm:flex justify-around items-center gap-20'>
            <div className='md:mb-20' >
                <h1 className='font-bold lg:text-8xl mb-10 md:text-4xl text-4xl md:mb-40 '>Let's discuss <br /> your project </h1>
                <div className='flex font-bold mb-6'>
                    <FiPhoneCall /> <div>+994 55 637 1733</div>
                </div>
                <div className='flex font-bold mb-6'>
                    <IoMailUnreadOutline /> <div>raminisrafilli@gmail.com</div>
                </div>
                <div className='flex font-bold mb-6'>
                    <AiFillGithub /> <div>https://github.com/IsrafilliRamin</div>
                </div>
                <div className='flex font-bold mb-6'>
                    <ImLocation /> <div>Azerbaijan Baku</div>
                </div>
            </div>
            <div>
                <h3 className='mb-10 lg:text-ms '> <span className='font-bold lg:text-xl text-ms' >What's your story?</span> Get touch Always avaiable for freelancing if the <br /> right project comes alang me </h3>
                <form action="">
             <input type="text" placeholder='Name' className='border-b-2  text-lg mb-10 outline-none w-[80vw] lg:w-[50vw]  md:w-[50vw] ' /> <br />
             <input type="Subject" placeholder='Name' className='border-b-2  text-lg mb-10 outline-none w-[80vw] lg:w-[50vw]  md:w-[50vw]' /><br />
             <input type="email" name="" id="" placeholder='Email' className='border-b-2  text-lg mb-10 outline-none w-[80vw] lg:w-[50vw]  md:w-[50vw]' /><br />
             <textarea name="" id="" cols="50" rows="5" placeholder='Message' className='border-2 outline-none w-[80vw] h-20 lg:w-[50vw] md:w-[50vw] '></textarea><br />
             <input type="submit" value="Submit" className='bg-green-700 border-2 border-cyan-900 rounded-sm mt-4 cursor-pointer  w-[10vw] mb-[5vw]' />
             </form>
            </div>
        </div>
    )
}

export default InputMain