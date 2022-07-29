import React from 'react'
import img1 from "../Images/one1.png"
import img2 from "../Images/one2.png"
import img3 from "../Images/one3.png"
import img4 from "../Images/one4.png"
import img5 from "../Images/one5.png"
import img6 from "../Images/two.png"

const MyProje = () => {
  return (
    <div className=' ml-[5vw] flex flex-col items-center'>
        <h1 className='font-sans font-bold lg:text-5xl text-2xl mb-10'>Create & inspire.It's Lama</h1>
        <p className='font-sans font-semibold mb-10 lg:text-center md:text-center text-center '>Lama is a creative portfolio that your work has been waiting for. Beautiful homes, <br/> stunning portfolio styles & a whole lot more awaits inside. </p>
        <div className='flex  flex-wrap gap-24 lg:ml-[0vw] md:ml-[4vw] items-center justify-center text-center mr-5 '>
            <img className='lg:h-[240px] h-[240px]   rounded-lg hover:animate-bounce cursor-wait' src={img1} alt="1" />
            <img className='lg:h-[240px] h-[240px] rounded-lg hover:animate-bounce cursor-wait ' src={img2} alt="2" />
            <img className='lg:h-[240px] h-[240px] rounded-lg hover:animate-bounce cursor-wait ' src={img3} alt="3" />
            <img className='lg:h-[240px] h-[240px] rounded-lg hover:animate-bounce cursor-wait' src={img4} alt="4" />
            <img className='lg:h-[240px] h-[240px] rounded-lg hover:animate-bounce cursor-wait'  src={img5} alt="5" />
            <img className='lg:h-[240px] h-[240px] rounded-lg hover:animate-bounce cursor-wait' src={img6} alt="6" />
        </div>
    </div>
  )
}

export default MyProje