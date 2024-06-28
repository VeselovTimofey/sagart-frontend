import { Grid } from '@mui/material';

import LastNews from '../../components/LastNews';

function MainPage() {
  return (
    <Grid component="main" alignItems="center" container>
      <Grid item>
        <LastNews />
      </Grid>
    </Grid>
  );
}

export default MainPage;
