import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({setRoles}) => {
  const navigate = useNavigate();
  return (
    useEffect(() => {
        axios.get("http://localhost:3001/auth/logout")
        .then(res => {
            if(res.data.logout) {
              setRoles(""); 
              navigate("/");
            }
        })  
        .catch(res => console.log(err)) 
    }, [])
  )
}

export default Logout