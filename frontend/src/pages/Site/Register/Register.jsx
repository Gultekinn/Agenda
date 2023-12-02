import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
const Register = () => {
  
  const navigate = useNavigate();
  return (
    <>
 
     
        <div className="register">
                         

          <Formik initialValues={{
                username: "",
                email: "",
                password: ""
              }}
                //validation schema
                validationSchema={Yup.object({
                  username: Yup.string().required("Username is required!"),
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
                  axios.post("http://localhost:7075/auth", values).then(res => {
                  })
                  navigate('/login')
                  resetForm()
                }}
              >
                {
                  ({ values, handleSubmit, handleChange, handleBlur , dirty, touched, errors }) => (
            

                    <form id="form" onSubmit={handleSubmit}>
                            <h1>Sign up</h1>
                      <input className="inptt" type="text" placeholder='Username' id='username' value={values.username} onChange={handleChange} onBlur={handleBlur}/>

                      <input  className="inptt" type="email" placeholder='Email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                      {touched.email && errors.email && (
                        <div className='error-message'>{errors.email}</div>
                      )}

                      <input  className="inptt" type="password" placeholder='Password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                      {touched.password && errors.password && (
                        <div className='error-message'>{errors.password}</div>
                      )}

                      <button type='submit' disabled={!dirty}>Submit</button>
                    </form>
                  )
                }
              </Formik>

        </div>
     

    </>
  );
};

export default Register;
