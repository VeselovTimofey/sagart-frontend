import type { UseFormRegister, UseFormStateReturn } from 'react-hook-form';

import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import type { AppStore } from '../../../../utils/types/appDispatch';
import type { ICredentialsSignIn } from '../../../../utils/types';

interface ISignInWidgetUi {
  onSubmit: () => void;
  register: UseFormRegister<ICredentialsSignIn>;
  formState: UseFormStateReturn<ICredentialsSignIn>;
  authState: AppStore['authSlice'];
}

export function SignInWidgetUi({
  onSubmit,
  register,
  formState: { isLoading, isSubmitting, errors },
  authState: { loading },
}: ISignInWidgetUi) {
  return (
    <Stack
      direction="column"
      gap={5}
      component="form"
      noValidate
      onSubmit={onSubmit}
    >
      <Typography fontSize={32} variant="h2" textAlign="center">
        Авторизация
      </Typography>
      <Stack direction="column" gap={2.5}>
        <Stack gap={1}>
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
        </Stack>
        <Stack gap={1}>
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
        </Stack>
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
        {isLoading || isSubmitting || loading ? 'Обработка...' : 'Войти'}
      </Button>
    </Stack>
  );
}
