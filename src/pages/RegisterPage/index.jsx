import React from 'react'

const RegisterPage = () => {
  return (
    <div className='page'>
    <div className='form_container'> 
    <h1>회원가입</h1>
    <SignUp/>
    <p><Link to ={"/login"}>로그인 하기</Link></p>
    </div>
  </div>
  )
}

export default RegisterPage
