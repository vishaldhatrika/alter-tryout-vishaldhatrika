export interface TopNavMenuOpenSectionItem {
  id: string;
  title: string;
  link: string;
  badge?: string;
}

export interface TopNavMenuOpenSectionDropDownItem {
  id: string;
  title: string;
  links: TopNavMenuOpenSectionItem[];
}
