import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import INewsSubscriptionState, {
  IButtonChange,
  ICheckboxChange,
} from '../../../utils/types/newsSubscriptionState';

interface INewsSubscriptionUi {
  subscribeValue: INewsSubscriptionState;
  onEmailChange: IButtonChange;
  onAgreementChange: ICheckboxChange;
  onNewsSubscriptionClick: () => void;
}

function NewsSubscriptionUi({
  subscribeValue,
  onEmailChange,
  onAgreementChange,
  onNewsSubscriptionClick,
}: INewsSubscriptionUi) {
  let helperTextEmail: string;
  if (subscribeValue.error === '' && subscribeValue.success === '') {
    helperTextEmail = '';
  } else {
    helperTextEmail = subscribeValue.error + subscribeValue.success;
  }

  return (
    <Stack
      component="form"
      direction="column"
      gap={2}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onNewsSubscriptionClick();
      }}
    >
      <Typography variant="body1" component="h2">
        ПОДПИСКА НА НОВОСТИ
      </Typography>
      <Stack direction="column" gap={0.5}>
        <Stack direction="row" gap={1} alignItems="flex-start">
          <TextField
            size="small"
            placeholder="Email*"
            onChange={onEmailChange}
            error={subscribeValue.error !== ''}
            helperText={helperTextEmail}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            size="large"
          >
            Подписаться
          </Button>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center" color="secondary">
          <FormControlLabel
            sx={{ color: '#A5A6A6', fontSize: '0.875rem', fontWeight: 400 }}
            control={<Checkbox onClick={onAgreementChange} color="secondary" />}
            label="Соглашение на обработку персональных данных"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default NewsSubscriptionUi;
