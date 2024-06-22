import { Stack, Typography } from '@mui/material';

import { stepsData } from '../lib';

interface IAuthSteps {
  signUpStep: number;
}

export default function AuthSteps({ signUpStep }: IAuthSteps) {
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
          bgcolor={signUpStep === index ? '#FAFAFA' : 'transparent'}
          color={signUpStep === index ? '#1F2020' : '#A5A6A6'}
          borderRight={
            signUpStep === index
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
