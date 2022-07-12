import React from 'react';
import Item from '../components/item.component';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
  borderColor?: string;
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
  textColor,
  link,
  linkText,
  bgColor,
  borderColor,
  createdAt,
  description,
  price,
  discount,
  logo,
  coupon,
  couponAmt,
}: Props) => {
  return (
    <div
      className={`
    {
      ${
        borderColor
          ? `px-1 border-2 border-dashed ${borderColor} rounded-lg pt-1 pb-2`
          : 'px-1'
      }
    }
    drop-shadow-md
    `}
    >
      <Item
        textColor={textColor}
        link={link}
        linkText={linkText}
        bgColor={bgColor}
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
