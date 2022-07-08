import React from 'react';
import Item from '../components/item.component';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
}

const Socials = ({ textColor, link, linkText, bgColor }: Props) => {
  return (
    <div className='px-1'>
      <Item
        textColor={textColor}
        link={link}
        linkText={linkText}
        bgColor={bgColor}
      />
    </div>
  );
};

export default Socials;
