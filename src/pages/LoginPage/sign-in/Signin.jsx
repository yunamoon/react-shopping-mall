import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import app from '../../../firebase'
import { setUser } from '../../../store/user/user.slice';

function Signin() {

  const navigate =  useNavigate();
  const [firebaseError , setFirebaseError] =  useState("");

  const auth = getAuth(app);
  
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth , email , password)
    .then(userCredential => {
      dispatch(setUser({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid
    }))
      navigate('/');
    })
    .catch(error => {
      return error & setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
  }
  return (
    <Form title={"로그인"} 
     getUserData={handleLogin}
     firebaseError={firebaseError}/>
  )
}

export default Signin
