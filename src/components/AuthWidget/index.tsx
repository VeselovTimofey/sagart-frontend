import { useCallback, useState } from 'react';

import { Stack, Typography } from '@mui/material';

import type { IUserRole } from '../../utils/types';

import { stepsData } from './lib';
import AuthSteps from './AuthSteps';
import UserDataForm from './UserDataForm';
import UserRoleForm from './UserRoleForm';
import BuyerDataForm from './BuyerDataForm';

export default function AuthWidget() {
  const [signUpStep, setSignUpStep] = useState(0);
  const [role, setRole] = useState<Array<IUserRole | undefined> | undefined>(
    undefined
  );

  const doStepBack = useCallback(() => {
    if (signUpStep === 0) {
      return;
    }

    setSignUpStep(signUpStep - 1);
  }, [signUpStep]);

  const doStepForward = useCallback(() => {
    if (signUpStep === stepsData.length - 1) {
      // TODO: Add final submit
      return;
    }

    setSignUpStep(signUpStep + 1);
  }, [signUpStep]);

  const selectRole = useCallback(
    (newRole: Array<IUserRole | undefined> | undefined) => {
      setRole(newRole);
    },
    []
  );

  const renderForm = () => {
    switch (signUpStep) {
      case 0:
        return (
          <UserDataForm
            onClickBack={doStepBack}
            onClickForward={doStepForward}
          />
        );
      case 1:
        return (
          <UserRoleForm
            onClickBack={doStepBack}
            onClickForward={doStepForward}
            onRoleSelect={selectRole}
          />
        );
      case 2:
        console.log('ROLE: ', role);
        return (
          <BuyerDataForm
            onClickBack={doStepBack}
            onClickForward={doStepForward}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Stack direction="row" justifyContent="space-between" p="2.5rem">
      <AuthSteps {...{ signUpStep }} />
      <Stack
        direction="column"
        gap={4}
        sx={{
          width: '24.125rem',
          marginX: 'auto',
        }}
      >
        <Stack direction="row" gap={2.25}>
          <Typography fontSize={32} variant="h2">
            Регистрация
          </Typography>
          <Typography
            fontSize={32}
            variant="h2"
            component="span"
            color="#A5A6A6"
          >
            Шаг {signUpStep + 1}
          </Typography>
        </Stack>
        {renderForm()}
      </Stack>
    </Stack>
  );
}
