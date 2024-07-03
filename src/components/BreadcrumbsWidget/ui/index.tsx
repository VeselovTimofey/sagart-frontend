import { Link as RouterLink } from 'react-router-dom';

import {
  Breadcrumbs,
  Link,
  type LinkProps,
  Typography,
  type BreadcrumbsProps,
} from '@mui/material';

import breadcrumbNameMap from '../../../utils/const';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

interface IBreadcrumbsWidgetUi extends BreadcrumbsProps {
  crumbs: string[];
}

export default function BreadcrumbsWidgetUi({
  crumbs,
  ...props
}: IBreadcrumbsWidgetUi) {
  return (
    <Breadcrumbs aria-label="breadcrumb" {...props}>
      <LinkRouter underline="hover" color="text.primary" to={'/'}>
        Главная
      </LinkRouter>
      {crumbs.map((_crumb, index) => {
        const last = index === crumbs.length - 1;
        const to = `/${crumbs.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="text.secondary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="text.primary" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
