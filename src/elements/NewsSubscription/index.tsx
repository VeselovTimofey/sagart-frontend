import { useDispatch, useSelector } from 'react-redux';

import NewsSubscriptionUi from './ui/index';

import {
  emailChange,
  agreementChange,
} from '../../store/slice/newsSubscriptionSlice';
import newsSubscriptionAction from '../../store/actions/newsSubscriptionActions';
import { AppStore, AppDispatch } from '../../utils/types/appDispatch';
import {
  IButtonChange,
  ICheckboxChange,
} from '../../utils/types/newsSubscriptionState';

function NewsSubscription() {
  const dispatch = useDispatch<AppDispatch>();
  const subscribeValue = useSelector(
    (state: AppStore) => state.newsSubscription
  );

  const onEmailChange: IButtonChange = (value) => {
    dispatch(emailChange(value.target.value));
  };

  const onAgreementChange: ICheckboxChange = (value) => {
    dispatch(agreementChange((value.target as HTMLInputElement).checked));
  };

  const onNewsSubscriptionClick = (): void => {
    dispatch(newsSubscriptionAction(subscribeValue.subscribe.email));
  };

  return (
    <NewsSubscriptionUi
      subscribeValue={subscribeValue}
      onEmailChange={onEmailChange}
      onAgreementChange={onAgreementChange}
      onNewsSubscriptionClick={onNewsSubscriptionClick}
    />
  );
}

export default NewsSubscription;
