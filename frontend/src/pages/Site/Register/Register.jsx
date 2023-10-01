import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Register/Register.scss'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Adınızı giriniz'),
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta adresi zorunlu'),
    password: Yup.string().required('Parola zorunlu'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Parolalar uyuşmuyor')
      .required('Parola tekrarı zorunlu'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="formm">
        <div className="register-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Adınız</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirmPassword">Parola Tekrarı</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>

          <button type="submit">Kayıt Ol</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default Register;

