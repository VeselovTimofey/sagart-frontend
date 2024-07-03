import type { ILink } from '../../elements/FooterLinkGroup/ui/index';
import { PREFIXPATH } from './routes';

const HEADERLINK: ILink[] = [
  { name: 'Новинки', link: PREFIXPATH },
  { name: 'Авторы', link: PREFIXPATH },
  { name: 'Живопись', link: `${PREFIXPATH}/catalogue/painting` },
  { name: 'Графика', link: `${PREFIXPATH}/catalogue/graphic` },
  { name: 'Фотография', link: `${PREFIXPATH}/catalogue/photography` },
  { name: 'Digital', link: `${PREFIXPATH}/catalogue/digital` },
  { name: 'Принты', link: `${PREFIXPATH}/catalogue/print` },
];

export default HEADERLINK;
