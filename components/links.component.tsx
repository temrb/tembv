import React from 'react';
import Item from '../components/item.component';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
}

const Links = ({ textColor, link, linkText }: Props) => {
  return (
    <>
      <Item textColor={textColor} link={link} linkText={linkText} />
    </>
  );
};

export default Links;
