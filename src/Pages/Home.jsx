import React from 'react'
import Mainsection from '../components/Mainsection'
import AboutMe from '../components/AboutMe'
import MyProje from '../components/MyProje'
import InputMain from '../components/InputMain'
const Home = () => {
  return (
    <div className='Home'>
    <Mainsection/>
    <AboutMe/>
    <MyProje/>
    <InputMain/>
    </div>
  )
}

export default Home