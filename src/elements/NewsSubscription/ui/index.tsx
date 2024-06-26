import { Button, Checkbox, Input, Grid, Typography } from '@mui/material';

import {
  IButtonChange,
  ICheckboxChange,
} from '../../../utils/types/newsSubscriptionState';

interface INewsSubscriptionUi {
  onEmailChange: IButtonChange;
  onAgreementChange: ICheckboxChange;
  onNewsSubscriptionClick: () => void;
}

function NewsSubscriptionUi({
  onEmailChange,
  onAgreementChange,
  onNewsSubscriptionClick,
}: INewsSubscriptionUi) {
  return (
    <Grid
      item
      xs
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      container
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
          <Input placeholder="Email *" onChange={onEmailChange} />
        </Grid>
        <Grid item>
          <Button onClick={onNewsSubscriptionClick}>Подписаться</Button>
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
