import React from 'react';
import Item from '../components/item.component';

interface Props {
  link: string;
  linkText: string;
  createdAt?: string;
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  logo?: string;
  coupon?: string;
  couponAmt?: string;
}

const Links = ({
  link,
  linkText,
  createdAt,
  description,
  price,
  discount,
  logo,
  coupon,
  couponAmt,
}: Props) => {
  return (
    <div className=' px-1 rounded-lg pt-1 pb-2 bg-white'>
      <Item
        link={link}
        linkText={linkText}
        createdAt={createdAt}
        description={description}
        price={price}
        discount={discount}
        logo={logo}
        coupon={coupon}
        couponAmt={couponAmt}
      />
    </div>
  );
};

export default Links;
