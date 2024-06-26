import { object, string, boolean } from 'yup';

const newsSubscriptionSchema = object({
  email: string()
    .required('Пожалуйста, введите адрес электронной почты.')
    .email('Пожалуйста, введите действительный адрес электронной почты.'),
  agreement: boolean(),
});

export default newsSubscriptionSchema;
