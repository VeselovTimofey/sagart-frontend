import { Stack, Typography } from '@mui/material';

const stepsData = [
  {
    name: 'Шаг 1',
    description: 'Авторизация',
  },
  {
    name: 'Шаг 2',
    description: 'Тип пользователя',
  },
  {
    name: 'Шаг 3',
    description: 'Заполнение профиля продавца / Выбор стиля работ',
  },
];

interface IAuthSteps {
  currentStep: number;
}

export default function AuthSteps({ currentStep }: IAuthSteps) {
  return (
    <Stack direction="column" width={184} style={{ boxSizing: 'border-box' }}>
      {stepsData.map(({ name, description }, index) => (
        <Stack
          direction="column"
          key={name}
          alignItems="center"
          gap={1}
          p={3}
          // TODO: Use variable for color
          bgcolor={currentStep - 1 === index ? '#FAFAFA' : 'transparent'}
          color={currentStep - 1 === index ? '#1F2020' : '#A5A6A6'}
          borderRight={
            currentStep - 1 === index
              ? '0.25em solid #1F2020'
              : '0.25em solid #A5A6A6'
          }
        >
          <Typography variant="h3" color="inherit">
            {name}
          </Typography>
          <Typography color="inherit" fontSize={14}>
            {description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
