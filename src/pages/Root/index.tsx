import { Grid } from '@mui/material';

import LastNews from '../../components/LastNews/index';
import Categories from '../../components/Сategories/index';

function MainPage() {
  return (
    <Grid component="main" alignItems="center" container>
      <Grid item>
        <LastNews />
      </Grid>
      <Grid item>
        <Categories />
      </Grid>
    </Grid>
  );
}

export default MainPage;
