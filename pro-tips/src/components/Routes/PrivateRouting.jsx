import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UseContext'
import { useNavigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {

    const { isLogin } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLogin){
            navigate("/login")
        }
    },[])

    return (
        <div>{children}</div>
    )
}

export default PrivateRouting