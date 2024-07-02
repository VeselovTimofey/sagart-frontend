import type { UseFormRegister, UseFormStateReturn } from 'react-hook-form';

import {
  Avatar,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import type { AppStore } from '../../../../utils/types/appDispatch';
import type { ICredentialsSignUp } from '../../../../utils/types';
import SuccessScreenUi from './SuccessScreen';

interface ISignUpWidgetUi {
  onSubmit: () => void;
  register: UseFormRegister<ICredentialsSignUp>;
  formState: UseFormStateReturn<ICredentialsSignUp>;
  authState: AppStore['authSlice'];
}

export default function SignUpWidgetUi({
  onSubmit,
  register,
  formState: { isLoading, isSubmitting, errors },
  authState: { loading, success },
}: ISignUpWidgetUi) {
  return success ? (
    <SuccessScreenUi />
  ) : (
    <Stack
      direction="column"
      gap={5}
      component="form"
      noValidate
      onSubmit={onSubmit}
    >
      <Typography fontSize={32} variant="h2" textAlign="center">
        Регистрация
      </Typography>
      <Stack direction="column" gap={2.5}>
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
        <Grid container rowSpacing={0.25} columnSpacing={2.5}>
          <Grid xs={6}>
            <InputLabel htmlFor={'first_name'} required>
              Имя
            </InputLabel>
            <TextField
              required
              autoComplete="name"
              fullWidth
              helperText={errors.first_name?.message || ' '}
              error={Boolean(errors.first_name)}
              {...register('first_name', {
                required: 'Обязательное поле',
              })}
            />
          </Grid>
          <Grid xs={6}>
            <InputLabel htmlFor={'last_name'} required>
              Фамилия
            </InputLabel>
            <TextField
              required
              autoComplete="family-name"
              fullWidth
              helperText={errors.last_name?.message || ' '}
              error={Boolean(errors.last_name)}
              {...register('last_name', {
                required: 'Обязательное поле',
              })}
            />
          </Grid>
          <Grid xs={6}>
            <InputLabel htmlFor={'middle_name'}>Отчество</InputLabel>
            <TextField
              autoComplete="middle-name"
              fullWidth
              helperText={errors.middle_name?.message || ' '}
              error={Boolean(errors.middle_name)}
              {...register('middle_name')}
            />
          </Grid>
          <Grid xs={6}>
            <InputLabel htmlFor={'phone'} required>
              Номер телефона
            </InputLabel>
            <TextField
              required
              type="tel"
              autoComplete="tel"
              fullWidth
              helperText={errors.phone?.message || ' '}
              error={Boolean(errors.phone)}
              {...register('phone', {
                required: 'Обязательное поле',
              })}
            />
          </Grid>
          <Grid xs={6}>
            <InputLabel htmlFor={'email'} required>
              Электронная почта
            </InputLabel>
            <TextField
              required
              type="email"
              autoComplete="email"
              fullWidth
              helperText={errors.email?.message || ' '}
              error={Boolean(errors.email)}
              {...register('email', {
                required: 'Обязательное поле',
              })}
            />
          </Grid>
          <Grid xs={6}>
            <InputLabel htmlFor={'password'} required>
              Пароль
            </InputLabel>
            <TextField
              required
              type="password"
              fullWidth
              helperText={errors.password?.message || ' '}
              error={Boolean(errors.password)}
              {...register('password', {
                required: 'Обязательное поле',
              })}
            />
          </Grid>
        </Grid>
      </Stack>
      <Button
        type="submit"
        variant="contained"
        disableElevation
        size="large"
        fullWidth
        disabled={isLoading || isSubmitting || loading}
        sx={{ maxWidth: '24.125rem', alignSelf: 'center' }}
      >
        {isLoading || isSubmitting || loading ? 'Обработка...' : 'Продолжить'}
      </Button>
    </Stack>
  );
}
