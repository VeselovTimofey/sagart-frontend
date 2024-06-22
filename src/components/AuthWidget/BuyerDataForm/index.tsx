import { useEffect } from 'react';

import { Controller, type SubmitHandler, useForm } from 'react-hook-form';

import { Autocomplete, Stack, TextField, Typography } from '@mui/material';

import type { ICredentialsSignUpThirdStepBuyer } from '../../../utils/types/user';

import { getSessionStorageValues, setSessionStorageValues } from '../lib';
import AuthStepControls from '../AuthStepContols';

const artStylesOptions = [
  'Сюрреализм',
  'Символизм',
  'Фовизм',
  'Импрессионизм',
  'Фотореализм',
  'Футуризм',
];

const defaultValues: ICredentialsSignUpThirdStepBuyer = { interests: [] };

interface IBuyerDataForm {
  onClickBack: () => void;
  onClickForward: () => void;
}

export default function BuyerDataForm({
  onClickBack,
  onClickForward,
}: IBuyerDataForm) {
  const { control, handleSubmit, watch } =
    useForm<ICredentialsSignUpThirdStepBuyer>({
      defaultValues: async () =>
        getSessionStorageValues<ICredentialsSignUpThirdStepBuyer>(
          'buyerFormValues',
          defaultValues
        ),
    });

  useEffect(() => {
    const subscription = watch((values) =>
      setSessionStorageValues(values as never, 'buyerFormValues')
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<ICredentialsSignUpThirdStepBuyer> = () =>
    onClickForward();

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      gap={2.5}
    >
      <Typography variant="h3">Предпочтительные стили работ</Typography>
      <Typography>
        Система предложит произведения авторов, работающих в выбранных стилях.
      </Typography>

      <Controller
        name="interests"
        control={control}
        render={({ field: { value, onChange, onBlur, ...props } }) => (
          <Autocomplete
            {...props}
            fullWidth
            value={value || []}
            multiple
            options={artStylesOptions}
            onChange={(_event, newValue) => onChange(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Стили" placeholder="Поиск" />
            )}
          />
        )}
      />
      <AuthStepControls isBackShown={true} handleClickBack={onClickBack} />
    </Stack>
  );
}
