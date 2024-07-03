import { Box, Link, Stack, Typography } from '@mui/material';

export interface ILink {
  name: string;
  link: string;
}

export interface IFooterLinkGroup {
  name: string;
  links: ILink[];
}

function FooterLinkGroupUi({ name, links }: IFooterLinkGroup) {
  return (
    <Stack direction="column" gap={2.5}>
      <Typography component="h3" variant="body1">
        {name}
      </Typography>
      <Stack
        component="ul"
        direction="column"
        gap={1.5}
        sx={{ listStyle: 'none', padding: 0, margin: 0 }}
      >
        {links.map((link) => (
          <Box key={link.name}>
            <Link href={link.link}>{link.name}</Link>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

export default FooterLinkGroupUi;
