import * as Yup from 'yup';
export const contactValidatonSchema = Yup.object().shape({

    fullName:Yup.string().required('نام و نام خانوادگی الزامی است'),
    email:Yup.string().email('آدرس ایمیل معتبر نیست')
    .required('وارد کردن ایمیل الزامی است'),
    subject:Yup.string().required('وارد کردن عنوان پیام الزامی است'),
    message:Yup.string().required('وارد کردن پیام الزامی است'),
    recaptcha:Yup.string().required('کپتچا الزامی است')
});