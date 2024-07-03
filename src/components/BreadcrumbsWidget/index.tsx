import { useLocation } from 'react-router-dom';
import BreadcrumbsWidgetUi from './ui';

export default function BreadcrumbsWidget() {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((x) => x);

  return <BreadcrumbsWidgetUi {...{ crumbs }} />;
}
