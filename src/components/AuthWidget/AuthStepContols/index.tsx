import { Button, Stack } from '@mui/material';

interface IAuthStepControls {
  isBackShown: boolean;
  handleClickBack: () => void;
}

export default function AuthStepControls({
  isBackShown,
  handleClickBack,
}: IAuthStepControls) {
  return (
    <Stack direction="row" gap={2.5}>
      {isBackShown && (
        <Button variant="outlined" type="button" onClick={handleClickBack}>
          Назад
        </Button>
      )}
      <Button variant="contained" type="submit" fullWidth>
        Продолжить
      </Button>
    </Stack>
  );
}
