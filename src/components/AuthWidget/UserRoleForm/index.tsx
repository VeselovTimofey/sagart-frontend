import { useEffect } from 'react';

import { type SubmitHandler, useForm, Controller } from 'react-hook-form';

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';

import type {
  ICredentialsSignUpSecondStep,
  IUserRole,
} from '../../../utils/types/user';

import { getSessionStorageValues, setSessionStorageValues } from '../lib';
import AuthStepControls from '../AuthStepContols';

const possibleRoles: Array<{ name: IUserRole; label: string }> = [
  { name: 'author', label: 'Продавец' },
  { name: 'buyer', label: 'Покупатель' },
];

const defaultValues: ICredentialsSignUpSecondStep = {
  role: ['buyer'],
};

interface IUserRoleForm {
  onClickBack: () => void;
  onClickForward: () => void;
  onRoleSelect: (newRole: Array<IUserRole | undefined> | undefined) => void;
}

export default function UserRoleForm({
  onClickBack,
  onClickForward,
  onRoleSelect,
}: IUserRoleForm) {
  const { control, handleSubmit, watch, getValues } =
    useForm<ICredentialsSignUpSecondStep>({
      defaultValues: async () =>
        getSessionStorageValues<ICredentialsSignUpSecondStep>(
          'userRoleFormValues',
          defaultValues
        ),
    });

  useEffect(() => {
    const subscription = watch((values) => {
      if (values.role) {
        setSessionStorageValues(values as never, 'userRoleFormValues');
        onRoleSelect(values.role);
      }
    });
    return () => subscription.unsubscribe();
  }, [onRoleSelect, watch]);

  const onSubmit: SubmitHandler<ICredentialsSignUpSecondStep> = () =>
    onClickForward();

  const handleCheckboxChange = (role: IUserRole) => {
    const roles = getValues('role');
    if (roles.includes(role)) {
      return roles.filter((r) => r !== role);
    }
    return [...roles, role];
  };

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      gap={2.5}
    >
      <Typography variant="h3">Тип пользователя*</Typography>
      <Typography>
        Чтобы начать продавать свои работы на нашем сервисе, вам необходимо
        выбрать категорю «Продавец» и дополнительно заполнить профиль продавца.
      </Typography>

      <Controller
        name="role"
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormGroup>
            {possibleRoles.map(({ name, label }) => (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    value={value}
                    checked={value ? value.includes(name) : false}
                    onChange={() => onChange(handleCheckboxChange(name))}
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>
        )}
      />
      <Typography>
        По умолчанию нашим пользователям доступны две роли. Чтобы
        воспользоваться другой ролью, перейдите в раздел «Профиль» и заполните
        необходимые данные.
      </Typography>
      <AuthStepControls isBackShown={true} handleClickBack={onClickBack} />
    </Stack>
  );
}
