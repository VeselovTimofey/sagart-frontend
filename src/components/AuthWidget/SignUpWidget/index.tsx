import { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { signUpUser } from '../../../store/actions/authUserAction';
import type { AppDispatch, AppStore } from '../../../utils/types/appDispatch';
import type { ICredentialsSignUp } from '../../../utils/types';

import { getSessionStorageValues, setSessionStorageValues } from '../lib';
import AuthWidgetUi from './ui';

const defaultValues: ICredentialsSignUp = {
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  phone: '',
  password: '',
};

interface ISignUpWidget {
  onSuccess: () => void;
}

export default function SignUpWidget({ onSuccess }: ISignUpWidget) {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: AppStore) => state.authSlice);

  const { register, handleSubmit, watch, formState } =
    useForm<ICredentialsSignUp>({
      // NOTE: Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
      mode: 'onTouched',
      // NOTE: Get initial values from browser session storage or use const
      defaultValues: async () =>
        getSessionStorageValues<ICredentialsSignUp>(
          'signUpFormValues',
          defaultValues
        ),
    });

  // NOTE: Add listener for values updates and update session storage
  useEffect(() => {
    const subscription = watch((values) =>
      setSessionStorageValues(values as never, 'signUpFormValues')
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<ICredentialsSignUp> = useCallback(
    (data) => dispatch(signUpUser(data)),
    [dispatch]
  );

  useEffect(() => {
    if (authState.success) {
      onSuccess();
    }
  }, [authState.success, onSuccess]);

  return (
    <AuthWidgetUi
      onSubmit={handleSubmit(onSubmit)}
      {...{ register }}
      {...{ formState }}
      {...{ authState }}
    />
  );
}
