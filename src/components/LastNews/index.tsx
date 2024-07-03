import { useDispatch, useSelector } from 'react-redux';

import LastNewsUi from './ui';
import { AppDispatch, AppStore } from '../../utils/types/appDispatch';
import { ISliderChange } from '../../utils/types/lastNewsState';
import { currentNewsChange } from '../../store/slice/lastNewsSlice';

function LastNews() {
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector((state: AppStore) => state.lastNews);
  const { currentNews } = useSelector((state: AppStore) => state.lastNews);

  const onCurrentNewsChange: ISliderChange = (value) => {
    dispatch(currentNewsChange(value.target));
  };

  return (
    <LastNewsUi
      news={news}
      onCurrentNewsChange={onCurrentNewsChange}
      currentNews={currentNews}
    />
  );
}

export default LastNews;
