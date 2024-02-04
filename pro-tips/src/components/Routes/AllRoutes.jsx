import React from 'react'
import Home from '../Home'
import Contact from '../Contact'
import { Route,Routes } from 'react-router-dom'
import PageNotFound from '../PageNotFound'
import Registration from '../Registration'

const AllRoutes = () => {
  return (
    <div>
        <Routes >
            <Route path='/' element={ <Home/>}/>
            <Route path='/Registration' element={<Registration/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes> 
    </div>
  )
}

export default AllRoutes