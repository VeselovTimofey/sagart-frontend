import { Grid, Link, Slider, Typography } from '@mui/material';

import style from '../style/styles.module';

function LastNewsUi() {
  return (
    <Grid component="section" direction="column" alignItems="center" container>
      <Grid item justifyContent="space-evenly" container>
        <Grid xs={1} item direction="column" justifyContent="center" container>
          <Grid item>
            <Typography component="h1" variant="h1">
              Выставка современного искусства
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#">Подробнее</Link>
          </Grid>
        </Grid>
        <Grid xs={1} item>
          <img
            style={style.imgstyle}
            src="https://s3-alpha-sig.figma.com/img/2f8e/0a54/fa685ea708227716b980b92e0a6a1b79?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lcs8fSQ0zJ7toPQiP4klRSAv9r-VuBWMINxJMzK5ALgC7PGl3exQbMA9uz7lQfjKRde2BHOVwWzop6GbLw8mXY9JludBk9XodPUj8SIXwAd12z4ILbCY1rt-wNvX-wyBZFcmwdR3O24Zfkxou9R0fSxv9m5pOjPkRGz~f7kfuGCfo9btnUb2UJtEgaXB1I91gW1TfxCn1Z~Tv5ErThEY~8K1eHKlguJpI5Cnkc7gznDURAdRKBV2pBHiTPURsKOBqZqevz-Y0hb61EqgYwFWn6i3YjrwUGLSkmrftTA66DhxPhE2ZcEtrYoSUEx0aDt5FsN6deOEL2QyYA0lqpAqmA__"
          />
        </Grid>
      </Grid>
      <Grid item>
        <Slider
          style={style.sliderstyle}
          defaultValue={1}
          step={1}
          min={1}
          max={3}
        />
      </Grid>
    </Grid>
  );
}

export default LastNewsUi;
