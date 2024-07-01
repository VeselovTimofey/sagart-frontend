import { Grid } from '@mui/material';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../utils/types/appDispatch';
import lastNewsAction from '../../store/actions/lastNewsAction';

import LastNews from '../../components/LastNews/index';
import Categories from '../../components/Сategories/index';
import ShowCase from '../../components/Showcase';

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(lastNewsAction());

  return (
    /* //TODO: Set the width of main and its section to certain sizes */
    <Grid component="main" direction="column" alignItems="center" container>
      <Grid item>
        <LastNews />
      </Grid>
      <Grid item>
        <Categories />
      </Grid>
      <Grid style={{ width: '1321px' }} item>
        <ShowCase title="Новинки" link="#" />
      </Grid>
      <Grid style={{ width: '1321px' }} item>
        <ShowCase title="Работы до 50 000 рублей" link="#" />
      </Grid>
      <Grid style={{ width: '1321px' }} item>
        <ShowCase title="Работы до 500 000 рублей" link="#" />
      </Grid>
    </Grid>
  );
}

export default MainPage;
