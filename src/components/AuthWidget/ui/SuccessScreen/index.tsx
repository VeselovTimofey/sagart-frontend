import { Link as RouterLink } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

interface ISuccessScreenUi {
  onSkip: () => void;
}

export default function SuccessScreenUi({ onSkip }: ISuccessScreenUi) {
  return (
    <Stack gap={7} sx={{ maxWidth: '26rem' }}>
      <Stack gap={3} alignItems="center">
        <Typography variant="h2" fontSize={32} textAlign="center">
          Вы зарегестировались!
        </Typography>
        <Typography variant="h5" textAlign="center">
          На Вашу почту отправлено уведомление для подтвеждения почты
        </Typography>
        <Typography textAlign="center">
          Чтобы начать продавать свои работы на нашем сервисе, вам необходимо
          перейти в «Профиль» и дополнительно заполнить необходимые данные.
        </Typography>
      </Stack>
      <Stack gap={1.5} alignItems="center">
        <Button
          component={RouterLink}
          type="button"
          to="#"
          variant="contained"
          sx={{ maxWidth: '23.625rem' }}
          fullWidth
        >
          Перейти в профиль
        </Button>
        <Button
          type="button"
          variant="outlined"
          sx={{ maxWidth: '23.625rem' }}
          fullWidth
          onClick={onSkip}
        >
          Пропустить
        </Button>
      </Stack>
    </Stack>
  );
}
