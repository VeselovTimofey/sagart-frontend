import { Link, Stack, Typography } from '@mui/material';

import SignUpWidget from '../SignUpWidget';
import SignInWidget from '../SignInWidget';

import SuccessScreenUi from './SuccessScreen';

export type Ttabs = 'sign-in' | 'sign-up' | 'success';
interface IAuthWidgetUi {
  tab: Ttabs;
  toggleTab: (tab: Ttabs) => void;
  onSuccess: () => void;
}

export function AuthWidgetUi({ tab, toggleTab, onSuccess }: IAuthWidgetUi) {
  return tab === 'success' ? (
    <SuccessScreenUi onSkip={onSuccess} />
  ) : (
    <Stack>
      {tab === 'sign-in' ? (
        <SignInWidget {...{ onSuccess }} />
      ) : (
        <SignUpWidget onSuccess={() => toggleTab('success')} />
      )}
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
