import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { type SubmitHandler, useForm } from 'react-hook-form';

import type { AppDispatch, AppStore } from '../../../utils/types/appDispatch';
import type { ICredentialsSignIn } from '../../../utils/types';

import { SignInWidgetUi } from './ui';

const defaultValues: ICredentialsSignIn = {
  email: '',
  password: '',
};

export default function SignInWidget() {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: AppStore) => state.authSlice);

  const { register, handleSubmit, formState } = useForm<ICredentialsSignIn>({
    // NOTE: Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
    mode: 'onTouched',
    defaultValues,
  });

  // TODO: Add submit logic here
  const onSubmit: SubmitHandler<ICredentialsSignIn> = useCallback(
    // (data) => dispatch(signUpUser(data)),
    (data) => console.log(data),
    [dispatch]
  );

  return (
    <SignInWidgetUi
      onSubmit={handleSubmit(onSubmit)}
      {...{ register }}
      {...{ formState }}
      {...{ authState }}
    />
  );
}
