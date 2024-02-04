import React, { useContext } from 'react'
import { userContext } from './Context/UseContext'

const login = () => {

    const {isLogin} = useContext(userContext) 

    return (
        <div>
            <button onClick={()=>{
                isLogin:true
            }} >Log In</button>
            <button onClick={()=>{
                isLogin:false
            }} >Log Out</button>
        </div>
    )
}

export default login