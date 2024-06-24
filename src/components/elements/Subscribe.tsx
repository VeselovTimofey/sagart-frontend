import {
  Button,
  Checkbox,
  Input,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { emailChange, agreementChange } from '../../store/slice/subscribeSlice';
import subscribeAction from '../../store/actions/subscribeActions';
import { AppStore, AppDispatch } from '../../utils/types/appDispatch';

function Subscribe() {
  const dispatch = useDispatch<AppDispatch>();
  const emailValue = useSelector(
    (state: AppStore) => state.reducer.subscribe.subscribe.email,
  );

  return (
    <Grid container>
      <Typography variant="h3" component="h3">ПОДПИСКА НА НОВОСТИ</Typography>
      <Input placeholder="Email *" onChange={(value) => dispatch(emailChange(value.target.value))} />
      <Button onClick={() => dispatch(subscribeAction(emailValue))}>Подписаться</Button>
      <Checkbox onClick={(value) => {
        dispatch(agreementChange((value.target as HTMLInputElement).checked));
      }} />
      <Typography variant="body1" component="span">Соглашение на обработку персональных данных</Typography>
    </Grid>
  );
}

export default Subscribe;
