import { useDispatch } from 'react-redux';

import { Stack } from '@mui/material';

import { AppDispatch } from '../../utils/types/appDispatch';
import lastNewsAction from '../../store/actions/lastNewsAction';

import LastNews from '../../components/LastNews/index';
import Categories from '../../components/Сategories/index';
import ShowCase from '../../components/Showcase';

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(lastNewsAction());

  return (
    <Stack
      component="main"
      direction="column"
      gap={10}
      sx={{ paddingTop: '2.5rem', paddingBottom: '10rem' }}
    >
      <LastNews />
      <Categories />
      <ShowCase title="Новинки" link="#" />
      <ShowCase title="Работы до 50 000 рублей" link="#" />
      <ShowCase title="Работы до 500 000 рублей" link="#" />
    </Stack>
  );
}

export default MainPage;
