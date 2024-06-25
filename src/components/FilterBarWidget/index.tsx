import { useForm } from 'react-hook-form';

import FilterBarWidgetUi from './ui';
import filterBar from '../../utils/mock/filterbar';

export default function FilterBarWidget() {
  const { control } = useForm();

  return <FilterBarWidgetUi form={filterBar} {...{ control }} />;
}
