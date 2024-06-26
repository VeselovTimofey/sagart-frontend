interface ILink {
  name: string;
  link: string;
}

interface IFooterLinkGroup {
  name: string;
  links: ILink[];
}

interface IFooterLinkGroups extends Array<IFooterLinkGroup> {}

export type { IFooterLinkGroup, IFooterLinkGroups };
