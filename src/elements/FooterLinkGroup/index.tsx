import { IFooterLinkGroup } from '../../utils/types/footerLinkGroup';
import FooterLinkGroupUi from './ui/index';

function FooterLinkGroup({ name, links }: IFooterLinkGroup) {
  return <FooterLinkGroupUi name={name} links={links} />;
}

export default FooterLinkGroup;
