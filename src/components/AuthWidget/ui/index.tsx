import { Link, Stack, Typography } from '@mui/material';

import SignUpWidget from '../SignUpWidget';
import SignInWidget from '../SignInWidget';

export type Ttabs = 'sign-in' | 'sign-up';
interface IAuthWidgetUi {
  tab: Ttabs;
  toggleTab: (tab: Ttabs) => void;
}

export function AuthWidgetUi({ tab, toggleTab }: IAuthWidgetUi) {
  return (
    <Stack>
      {tab === 'sign-in' ? <SignInWidget /> : <SignUpWidget />}
      <Typography textAlign="center">
        {tab === 'sign-in' ? 'Еще не зарегистрированы? ' : 'Уже есть аккаунт? '}
        <Link
          onClick={() => toggleTab(tab === 'sign-in' ? 'sign-up' : 'sign-in')}
        >
          {tab === 'sign-in' ? 'Зарегистрироваться' : 'Войти'}
        </Link>
      </Typography>
    </Stack>
  );
}
