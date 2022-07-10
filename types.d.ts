export interface SocialsTypes {
  _id: string;
  _createdAt: string;
  link: string;
  linkText: string;
}

export interface LinksTypes {
  _id: string;
  _createdAt: string;
  link: string;
  linkText: string;
}

export interface UserTypes {
  _id: string;
  name: string;
  contactEmail: string;
  title: string;
  subTitle: string;
  footer: string;
  darkMode: boolean;
  showFooterSection: boolean;
  showSocialSection: boolean;
  showLinksSection: boolean;
  image: {
    asset: {
      url: string;
    };
  };
}
