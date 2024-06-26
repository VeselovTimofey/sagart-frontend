import { Grid, Link, Typography } from '@mui/material';

interface ILink {
  name: string;
  link: string;
}

export interface IFooterLinkGroup {
  name: string;
  links: ILink[];
}

function FooterLinkGroupUi({ name, links }: IFooterLinkGroup) {
  return (
    <Grid item xs direction="column" container>
      <Grid item>
        <Typography component="h3" variant="inherit">
          {name}
        </Typography>
      </Grid>
      {links.map((link) => (
        <Grid item key={link.name}>
          <Link href={link.link}>
            <Typography component="p">{link.name}</Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default FooterLinkGroupUi;
