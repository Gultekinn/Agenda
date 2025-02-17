import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

 



  return (
    <>
    
     
        <div className="login">
          <Formik initialValues={{
            email: "",
            password: ""
          }}
            //validation schema
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
              password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters long')
                .max(20, 'Password must not exceed 20 characters')
            })}

            onSubmit={(values, { resetForm }) => {
              console.log(values);
              axios.post("http://localhost:7075/auth/login", values, {
                withCredentials: true
              }).then(res => {
                console.log(res.data.data.isAdmin);
                if (res.data.data.isAdmin === true) {
                  console.log('admin');
                  navigate('/admin')
                }
                else {
                  navigate('/')
                }
              })
              resetForm()
            }}
          >
            {
              ({ values, handleSubmit, handleChange, handleBlur, dirty, touched, errors }) => (
                <form className="formm" onSubmit={handleSubmit}>
                            <h1>Sign in</h1>

                  <input className="input" type="email" placeholder='Email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                  {touched.email && errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}

                  <input className="input" type="password" placeholder='Password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                  {touched.password && errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                  <button className="btnnn" type='submit' disabled={!dirty}>Submit</button>
                  <p className="forgot-password text-right">
                    Don't have an account? <Link id="ln" onClick={() => navigate('/register')}>Register</Link>
                  </p>
                </form>
              )
            }
          </Formik>
        </div>
     

    </>
  );
};

export default Login;
