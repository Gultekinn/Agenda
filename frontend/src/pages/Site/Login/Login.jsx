import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { Email, Facebook, Google } from '@mui/icons-material'; // İkonları içe aktardık
import "../Login/Login.scss"
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: '',
      };
    
      const validationSchema = Yup.object({
        email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta adresi zorunlu'),
        password: Yup.string().required('Parola zorunlu'),
      });
    
      const handleSubmit = (values) => {
        console.log(values); // Giriş işlemi burada gerçekleştirilebilir
      };

      return (
        <div className="formm">
            <div className="login-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresi</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Parola</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
    
              <button type="submit">Giriş Yap</button>
            </Form>
          </Formik>
    
          <div className="signup-link">
            Henüz hesabınız yok mu? <Link onClick={() => navigate('/register')}>Kaydolun</Link>
          </div>
    
          <div className="social-login">
        {/* Google ile Devam Et düğmesine Google ikonunu ekledik */}
        <Button className="google-login" startIcon={<Google />}>
          Google ile Devam Et
        </Button> 

        {/* Facebook ile Devam Et düğmesine Facebook ikonunu ekledik */}
        <Button className="facebook-login" startIcon={<Facebook />}>
          Facebook ile Devam Et
        </Button>
      </div>
        </div>
        </div>
      );
    
}

export default Login
