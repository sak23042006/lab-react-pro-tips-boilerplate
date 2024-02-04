import React, { useContext, useState } from 'react'

export const userContext = useContext()

const [isLogin,setIsLogin] = useState(false)

const UseContext = () => {
    return (
        <userContext.Provider value={{isLogin,setIsLogin}} >
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fuga amet tenetur. Minus velit architecto enim. Amet voluptatibus, doloremque porro officia iusto incidunt qui quasi nisi? Saepe possimus expedita eaque?</div>
        </userContext.Provider>
    )
}

export default UseContext