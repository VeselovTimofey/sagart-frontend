import { Button, Checkbox, Input, Grid, Typography } from '@mui/material';

import {
  IButtonChange,
  ICheckboxChange,
} from '../../../../utils/types/newsSubscriptionState';

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
    <Grid container>
      <Typography variant="h3" component="h3">
        ОДПИСКА НА НОВОСТИ
      </Typography>
      <Input placeholder="Email *" onChange={onEmailChange} />
      <Button onClick={onNewsSubscriptionClick}>Подписаться</Button>
      <Checkbox onClick={onAgreementChange} />
      <Typography variant="body1" component="span">
        Соглашение на обработку персональных данных
      </Typography>
    </Grid>
  );
}

export default NewsSubscriptionUi;
