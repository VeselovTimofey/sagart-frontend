import type { Control, FieldValues } from 'react-hook-form';

import { Stack } from '@mui/material';

import type { IForm } from '../lib';
import FilterBlock from '../FilterBlock';

interface IFilterBarWidgetUi<T extends FieldValues> {
  control: Control<T>;
  form: IForm;
}

export default function FilterBarWidgetUi<T extends FieldValues>({
  control,
  form,
}: IFilterBarWidgetUi<T>) {
  return (
    <Stack direction="column" gap={3}>
      {form.map((filter) => (
        <FilterBlock {...filter} {...{ control }} key={filter.name} />
      ))}
    </Stack>
  );
}
