import FooterLinkGroupUi from './ui/index';
import type { IFooterLinkGroup } from './ui/index';

function FooterLinkGroup({ name, links }: IFooterLinkGroup) {
  return <FooterLinkGroupUi name={name} links={links} />;
}

export default FooterLinkGroup;
