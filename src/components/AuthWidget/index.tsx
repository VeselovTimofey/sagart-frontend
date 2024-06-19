import { Stack } from '@mui/material';
import AuthSteps from './AuthSteps';

export default function AuthWidget() {
  return (
    <Stack direction="row" justifyContent="space-between" p="2.5rem">
      {/* TODO: Use logic */}
      <AuthSteps currentStep={1} />
      <div>Form</div>
    </Stack>
  );
}
