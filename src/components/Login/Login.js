import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from './LoginSchema';


const Login = () => {
  const handleSubmit = (values, {resetForm}) => {
    console.log('Form verileri:', values);
    
    // burada API'ye gönderim vs yapılabilir
    resetForm()
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Giriş Yap</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <div>
                <label htmlFor="email">E-posta</label>
              </div>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div>
                <label htmlFor="email">Şifre</label>
              </div>
              <Field name="password" type="password" disabled={isSubmitting}/>
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
