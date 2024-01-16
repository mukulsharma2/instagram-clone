import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../context/firebase';

const Login = () => {
  const navigate = useNavigate();
const {context} = useContext(FirebaseContext);

  return (
    <div>
      login page
    </div>
  )
}

export default Login
