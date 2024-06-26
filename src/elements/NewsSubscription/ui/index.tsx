import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material';

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
    <Grid
      item
      xs
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      container
      component="form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onNewsSubscriptionClick();
      }}
    >
      <Grid item>
        <Typography variant="h3" component="h3">
          ПОДПИСКА НА НОВОСТИ
        </Typography>
      </Grid>
      <Grid
        item
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        container
      >
        <Grid item>
          <TextField
            placeholder="Email *"
            onChange={onEmailChange}
            error={subscribeValue.error !== ''}
            helperText={helperTextEmail}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" disableElevation>
            Подписаться
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
        container
      >
        <Grid item>
          <Checkbox onClick={onAgreementChange} />
        </Grid>
        <Grid item>
          <Typography variant="body1" component="span">
            Соглашение на обработку персональных данных
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewsSubscriptionUi;
