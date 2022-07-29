
import './index.css'
import Home from './Pages/Home'
import {useContext} from 'react'
import {AppContext} from './Context/context'



const App = ()=>{
  const {darkmode} = useContext(AppContext)
  return (
  <div className={`${darkmode && "!bg-black !text-white"} bg-white text-black`}>
    <Home/>
  </div>
  )
}

export default App



