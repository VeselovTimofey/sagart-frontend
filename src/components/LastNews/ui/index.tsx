import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Slider, Stack, Typography } from '@mui/material';

import style from '../style/styles.module';
import { INews, ISliderChange } from '../../../utils/types/lastNewsState';

interface ILastNewsUi {
  news: INews[];
  onCurrentNewsChange: ISliderChange;
  currentNews: {
    value: 0 | 1 | 2;
  };
}

function LastNewsUi({ news, onCurrentNewsChange, currentNews }: ILastNewsUi) {
  const CurrentNews = news[currentNews.value];

  return (
    <Stack direction="column" gap={2}>
      <Stack
        component="section"
        direction="row"
        justifyContent="space-between"
        gap={2}
        px={7.5}
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
