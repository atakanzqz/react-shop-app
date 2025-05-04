import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta gerekli'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalı').required('Şifre gerekli'),
});

export default LoginSchema