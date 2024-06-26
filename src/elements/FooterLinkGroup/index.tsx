import FooterLinkGroupUi, { IFooterLinkGroup } from './ui/index';

function FooterLinkGroup({ name, links }: IFooterLinkGroup) {
  return <FooterLinkGroupUi name={name} links={links} />;
}

export default FooterLinkGroup;
