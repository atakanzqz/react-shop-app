import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import SignUpSchema from './SignUpSchema'; // "SingUpSchema" yazım hatası olabilir
import './SignUp.css';

function SignUp() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Verileri:', values);

    // API'ye gönderme işlemi yapılabilir
    resetForm(); // Formu sıfırlıyoruz
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }} >
      <h2>Kayıt Ol</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <div>
                <label htmlFor="username">Kullanıcı adı</label>
              </div>
              <Field name="username" type="text" id="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div>
                <label htmlFor="email">E-posta</label>
              </div>
              <Field name="email" type="email" id="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div>
                <label htmlFor="password">Şifre</label>
              </div>
              <Field name="password" type="password" id="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Kayıt Ol
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
