import { Grid, Link, Slider, Typography } from '@mui/material';

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
    <Grid component="section" direction="column" alignItems="center" container>
      <Grid item justifyContent="space-evenly" container>
        <Grid xs={1} item direction="column" justifyContent="center" container>
          <Grid item>
            <Typography component="h1" variant="h1">
              {CurrentNews.title}
            </Typography>
          </Grid>
          <Grid item>
            <Link href={CurrentNews.link}>Подробнее</Link>
          </Grid>
        </Grid>
        <Grid xs={1} item>
          <img style={style.imgstyle} src={CurrentNews.imageUrl} />
        </Grid>
      </Grid>
      <Grid item>
        <Slider
          style={style.sliderstyle}
          defaultValue={0}
          step={1}
          min={0}
          max={2}
          onChange={onCurrentNewsChange}
        />
      </Grid>
    </Grid>
  );
}

export default LastNewsUi;
