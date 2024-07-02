import { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { signInUser } from '../../../store/actions/authUserAction';
import type { AppDispatch, AppStore } from '../../../utils/types/appDispatch';
import type { ICredentialsSignIn } from '../../../utils/types';

import { SignInWidgetUi } from './ui';

const defaultValues: ICredentialsSignIn = {
  email: '',
  password: '',
};

export default function SignInWidget() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: AppStore) => state.authSlice);

  const { register, handleSubmit, formState } = useForm<ICredentialsSignIn>({
    // NOTE: Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit: SubmitHandler<ICredentialsSignIn> = useCallback(
    // (data) => dispatch(signUpUser(data)),
    (data) => dispatch(signInUser(data)),
    [dispatch]
  );

  // NOTE: Redirect after succsessful sign in
  useEffect(() => {
    if (authState.success) {
      setTimeout(() => navigate('/'), 3500);
    }
  }, [authState.success, navigate]);

  return (
    <SignInWidgetUi
      onSubmit={handleSubmit(onSubmit)}
      {...{ register }}
      {...{ formState }}
      {...{ authState }}
    />
  );
}
