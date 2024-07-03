import { useCallback, useState } from 'react';

import type { Control, FieldValues } from 'react-hook-form';

import type { IFilterFields } from '../lib';

import FilterBlockUi from './ui';

interface IFilterBlock<T extends FieldValues> {
  control: Control<T>;
  fields: IFilterFields;
  name: string;
  key: string;
}

export default function FilterBlock<T extends FieldValues>(
  props: IFilterBlock<T>
) {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisible = useCallback(() => setIsVisible((prev) => !prev), []);

  return (
    <FilterBlockUi
      {...props}
      onToggleVisible={toggleVisible}
      {...{ isVisible }}
    />
  );
}
