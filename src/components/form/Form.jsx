import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form';

const Form = ({title , getUserData, firebaseError}) => {

  const { register, handleSubmit , formState : {errors} , reset} = useForm({
    mode : 'onChange'
  });

  const onSubmit = async ({email , password}) => {
    getUserData(email, password);
    reset();
  }

  const userEmail = {
    required: '이메일을 입력해주세요.',
     pattern: {
      value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      message: '입력하신 이메일 주소가 올바르지 않습니다.',
    },
  }

  const userPassword = {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: 10,
      message: '비밀번호는 최소 10자 이상이어야 합니다.',
    },
    // pattern: {
    //   value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9!@#$%^&*()-_=+\\|[\]{};:'",.<>/?]).{10,}$/,
    //   message: '영어 대문자, 소문자, 숫자, 특수문자 중 2종류 문자 조합이어야 합니다.',
    // }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
        type="email"
        placeholder="E-mail" 
        {...register("email" , userEmail)}
        />
        {errors?.email && 
        <div>
          <span className={styles.form_error}>
            {errors.email.message}
          </span>
        </div>
           }
     </div>
     
      <div>
        <input
        type="password"
        placeholder="Password"
        {...register("password" , userPassword)} />
        {errors?.password &&
        <div>
          <span className={styles.form_error}>
          {errors.password.message}
          </span>
        </div>
        }
      </div>
      <button type='submit'>{title}</button>
      {firebaseError && (
      <span className={styles.form_error}>
        {firebaseError}
      </span>
      )}
    </form>
  )
}

export default Form
