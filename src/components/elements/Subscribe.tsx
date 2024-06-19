import {
  Button,
  Checkbox,
  Input,
  Grid,
  Typography,
} from '@mui/material';

function Subscribe() {
  return (
    <Grid container>
      <Typography variant="h3" component="h3">ПОДПИСКА НА НОВОСТИ</Typography>
      <Input placeholder="Email *" />
      <Button>Подписаться</Button>
      <Checkbox />
      <Typography variant="body1" component="span">Соглашение на обработку персональных данных</Typography>
    </Grid>
  );
}

export default Subscribe;
