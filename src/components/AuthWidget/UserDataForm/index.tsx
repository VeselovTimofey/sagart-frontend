import { useEffect } from 'react';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { Avatar, Button, Stack, TextField } from '@mui/material';

import type { ICredentialsSignUpFirstStep } from '../../../utils/types/user';

import { getSessionStorageValues, setSessionStorageValues } from '../lib';
import AuthStepControls from '../AuthStepContols';

const defaultValues: ICredentialsSignUpFirstStep = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  password: '',
  confirm_password: '',
};

interface IUserDataForm {
  onClickBack: () => void;
  onClickForward: () => void;
}

export default function UserDataForm({
  onClickBack,
  onClickForward,
}: IUserDataForm) {
  const { register, handleSubmit, watch } =
    useForm<ICredentialsSignUpFirstStep>({
      defaultValues: async () =>
        getSessionStorageValues<ICredentialsSignUpFirstStep>(
          'userDataFormValues',
          defaultValues
        ),
    });

  useEffect(() => {
    const subscription = watch((values) =>
      setSessionStorageValues(values as never, 'userDataFormValues')
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<ICredentialsSignUpFirstStep> = () =>
    onClickForward();

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      gap={2.5}
    >
      <Stack direction="row" gap={2.25} alignItems="center">
        <Avatar
          sx={{ width: 88, height: 88 }}
          alt="Фотография профиля пользователя"
          src={undefined}
        />
        <Button
          variant="contained"
          size="medium"
          type="button"
          onClick={() => console.log('uploading avatar')}
        >
          Загрузить изображение
        </Button>
      </Stack>
      <TextField
        required
        label="Имя"
        autoComplete="name"
        InputLabelProps={{ shrink: !!watch('first_name') }}
        {...register('first_name')}
      />
      <TextField
        required
        autoComplete="family-name"
        label="Фамилия"
        InputLabelProps={{ shrink: !!watch('last_name') }}
        {...register('last_name')}
      />
      <TextField
        required
        type="email"
        autoComplete="email"
        label="Электронная почта"
        InputLabelProps={{ shrink: !!watch('email') }}
        {...register('email')}
      />
      <TextField
        required
        type="tel"
        autoComplete="tel"
        label="Номер телефона"
        InputLabelProps={{ shrink: !!watch('phone') }}
        {...register('phone')}
      />
      <TextField
        required
        type="password"
        label="Пароль"
        InputLabelProps={{ shrink: !!watch('password') }}
        {...register('password')}
      />
      <TextField
        required
        type="password"
        label="Повторный пароль"
        InputLabelProps={{ shrink: !!watch('confirm_password') }}
        {...register('confirm_password')}
      />
      <AuthStepControls isBackShown={false} handleClickBack={onClickBack} />
    </Stack>
  );
}
