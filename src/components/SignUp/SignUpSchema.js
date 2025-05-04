import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    username: Yup.string().min(5, 'Kullanıcı adı en az 5 karakter olmalıdır').required('Kullanıcı adı gereklidir'),
    email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta gerekli'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalı').required('Şifre gerekli'),
});

export default SignUpSchema