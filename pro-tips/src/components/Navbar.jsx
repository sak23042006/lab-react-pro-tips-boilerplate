import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav-Bar' >
      <Link to={"/"} >
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around"}} >
          <h1 style={{paddingLeft:"30px"}} >Kalvium</h1>
          <img style={{paddingLeft:"30px"}} src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </div>
      </Link>
      <div style={{width:"30%",display:"flex",alignItems:"center",paddingRight:"30px",justifyContent:"space-around"}} >
        <Link to={"/Contact"} >
          <h2>Contact</h2>        
        </Link>

        <Link to={"/login"} >
          <h2>Login</h2>
        </Link>

        <Link to={"/Registration"} >
          <h2>Registration</h2>  
        </Link>
      </div>
    </div>
  )
}

export default Navbar