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
  coupon: string;
  couponAmt: string;
}

export interface ProductsTypes{
  _id: string;
  _createdAt: string;
  name: string;
  logo: string;
  description: string;
  price: number;
  discount: number;
  link: string;
}

export interface UserTypes {
  _id: string;
  name: string;
  contactEmail: string;
  title: string;
  socialsTitle: string;
  linksTitle: string;
  productsTitle: string;
  showSocialSection: boolean;
  showLinksSection: boolean;
  showProductsSection: boolean;
  image: {
    asset: {
      url: string;
    };
  };
}
