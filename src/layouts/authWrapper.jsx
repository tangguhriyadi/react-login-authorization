import React, {  useEffect } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
const AuthWrapper = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token && location.pathname !== '/Login'){
            navigate('/Login')
        } 
    },[navigate, location])
  return (
    <div>{children}</div>
  )
}

export default AuthWrapper