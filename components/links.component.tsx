import React from 'react';
import Item from '../components/item.component';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
  createdAt?: string;
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
}

const Links = ({
  textColor,
  link,
  linkText,
  bgColor,
  createdAt,
  description,
  price,
  discount,
}: Props) => {
  return (
    <div className='px-1'>
      <Item
        textColor={textColor}
        link={link}
        linkText={linkText}
        bgColor={bgColor}
        createdAt={createdAt}
        description={description}
        price={price}
        discount={discount}
      />
    </div>
  );
};

export default Links;
