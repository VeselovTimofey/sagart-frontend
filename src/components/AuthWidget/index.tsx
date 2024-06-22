import { useCallback, useEffect } from 'react';

import { type SubmitHandler, useForm } from 'react-hook-form';

import type { ICredentialsSignUp } from '../../utils/types';

import { getSessionStorageValues, setSessionStorageValues } from './lib';
import AuthWidgetUi from './ui';

const defaultValues: ICredentialsSignUp = {
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  phone: '',
  password: '',
};

export default function AuthWidget() {
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

  // TODO: Add submit logic here
  const onSubmit: SubmitHandler<ICredentialsSignUp> = useCallback(
    async (data) => console.log(data),
    []
  );

  return (
    <AuthWidgetUi
      onSubmit={handleSubmit(onSubmit)}
      {...{ register }}
      {...{ formState }}
    />
  );
}
