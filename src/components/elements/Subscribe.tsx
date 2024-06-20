import {
  Button,
  Checkbox,
  Input,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import subscribeAction from '../../store/actions/subscribeActions';

function Subscribe() {
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Typography variant="h3" component="h3">ПОДПИСКА НА НОВОСТИ</Typography>
      <Input placeholder="Email *" />
      <Button onClick={() => dispatch(subscribeAction('esa@d.ru'))}>Подписаться</Button>
      <Checkbox />
      <Typography variant="body1" component="span">Соглашение на обработку персональных данных</Typography>
    </Grid>
  );
}

export default Subscribe;
