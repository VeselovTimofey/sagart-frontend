import { object, string, boolean } from 'yup';

const newsSubscriptionSchema = object({
  email: string()
    .required()
    .email('Пожалуйста, введите действительный адрес электронной почты.'),
  agreement: boolean(),
});

export default newsSubscriptionSchema;
