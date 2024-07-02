import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Slider, Stack, Typography } from '@mui/material';

import style from '../style/styles.module';
import ILastNewsState, {
  ISliderChange,
} from '../../../utils/types/lastNewsState';

interface ILastNewsUi {
  lastNewsValue: ILastNewsState;
  onCurrentNewsChange: ISliderChange;
}

function LastNewsUi({ lastNewsValue, onCurrentNewsChange }: ILastNewsUi) {
  const CurrentNews = lastNewsValue.news[lastNewsValue.currentNews.value];

  return (
    <Stack direction="column" gap={2}>
      <Stack
        component="section"
        direction="row"
        justifyContent="space-between"
        gap={2}
        sx={{ paddingX: '3.75rem' }}
      >
        <Stack
          direction="column"
          gap={1}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ paddingTop: '5rem', paddingBottom: '6rem' }}
        >
          <Typography component="h3" variant="h1">
            {CurrentNews.title}
          </Typography>
          <Button
            component={RouterLink}
            to={CurrentNews.link}
            variant="contained"
          >
            Подробнее
          </Button>
        </Stack>
        <Box>
          <Box
            component="img"
            sx={style.imgstyle}
            src={CurrentNews.imageUrl}
            alt={CurrentNews.title}
          />
        </Box>
      </Stack>
      <Stack alignItems="center">
        <Slider
          style={style.sliderstyle}
          defaultValue={0}
          step={1}
          min={0}
          max={2}
          onChange={onCurrentNewsChange}
        />
      </Stack>
    </Stack>
  );
}

export default LastNewsUi;
