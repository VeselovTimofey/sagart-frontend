import {
  Controller,
  Path,
  type Control,
  type FieldValues,
} from 'react-hook-form';

import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import type { IFilterFields } from '../../lib';

interface IFilterBlockUi<T extends FieldValues> {
  control: Control<T>;
  fields: IFilterFields;
  name: string;
  onToggleVisible: () => void;
  isVisible: boolean;
}

export default function FilterBlockUi<T extends FieldValues>({
  control,
  fields,
  name,
  onToggleVisible,
  isVisible,
}: IFilterBlockUi<T>) {
  return (
    <Stack direction="column" gap={2}>
      <Stack
        sx={{
          cursor: 'pointer',
        }}
        onClick={onToggleVisible}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>{name}</Typography>
        {isVisible ? <ExpandLess /> : <ExpandMore />}
      </Stack>
      <Collapse in={isVisible} timeout="auto" unmountOnExit>
        <FormGroup>
          {fields.map((field) => (
            <FormControlLabel
              control={
                <Controller
                  name={field.inputName as Path<T>}
                  control={control}
                  render={({ field: props }) => (
                    <Checkbox
                      {...props}
                      checked={!!props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label={field.title}
            />
          ))}
        </FormGroup>
      </Collapse>
    </Stack>
  );
}
