import React from 'react';
import Item from '../components/item.component';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
  createdAt?: string;
}

const Links = ({ textColor, link, linkText, bgColor, createdAt }: Props) => {
  console.log(
    '🚀 ~ file: links.component.tsx ~ line 13 ~ Links ~ createdAt',
    createdAt
  );
  return (
    <div className='px-1'>
      <Item
        textColor={textColor}
        link={link}
        linkText={linkText}
        bgColor={bgColor}
        createdAt={createdAt}
      />
    </div>
  );
};

export default Links;
