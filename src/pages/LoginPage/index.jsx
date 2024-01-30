import React from 'react'

const LoginPage = () => {
  return (
    <div className='page'>
      <div className='form_container'> 
      <h1>로그인</h1>
      <SignIn/>
      <p><Link to ={"/register"}>회원가입</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
