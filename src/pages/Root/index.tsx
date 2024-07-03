import { useEffect } from 'react';
import { Grid } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStore } from '../../utils/types/appDispatch';
import lastNewsAction from '../../store/actions/lastNewsAction';

import LastNews from '../../components/LastNews/index';
import Categories from '../../components/Сategories/index';
import ShowCase from '../../components/Showcase';

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(lastNewsAction());
  }, [dispatch]);

  const { products } = useSelector((state: AppStore) => state.products);
  const newProducts = products.slice(0, 10);
  const cheapProducts = products.filter((product) => product.price < 50000);
  const expensiveProducts = products.filter(
    (product) => product.price < 500000 && product.price > 50000
  );

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
        <ShowCase title="Новинки" link="#" products={newProducts} />
      </Grid>
      <Grid style={{ width: '1321px' }} item>
        <ShowCase
          title="Работы до 50 000 рублей"
          link="#"
          products={cheapProducts}
        />
      </Grid>
      <Grid style={{ width: '1321px' }} item>
        <ShowCase
          title="Работы до 500 000 рублей"
          link="#"
          products={expensiveProducts}
        />
      </Grid>
    </Grid>
  );
}

export default MainPage;
