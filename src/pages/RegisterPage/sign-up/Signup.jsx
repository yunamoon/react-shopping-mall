import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase'
import Form from '../../../components/form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/user/user.slice';

function Signup() {
  const navigate = useNavigate();
  const [firebaseError , setFirebaseError] = useState("");
  
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const handleSignup = (email, password) => {
    createUserWithEmailAndPassword(auth , email , password)
    .then(userCredential=> {
      dispatch(setUser({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid
    }))
      navigate('/');
    })
    .catch(error => {
      console.log(error)
      return error & setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
     
    })
  }
  return (
    <Form 
    title={"가입하기"}
    getUserData={handleSignup}
    firebaseError={firebaseError}
    />
  )
}

export default Signup
