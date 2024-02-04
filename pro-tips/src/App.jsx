import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import AllRoutes from './components/Routes/AllRoutes'


const App = () => {

  

  return (
    <div>
      <div>
        <Navbar/> 
      </div>

      <div >
        <AllRoutes/>
      </div>

      {/* Perform Routing */}
    </div>
  )
}

export default App