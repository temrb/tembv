import React from 'react';
import Link from 'next/link';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
}

const Item = ({ textColor, link, linkText, bgColor }: Props) => {
  return (
    <div
      className={`flex justify-center ${textColor} py-1 px-2 truncate ... rounded-lg ${bgColor} font-semibold cursor-pointer`}
    >
      <Link href={`${link}`}>{linkText}</Link>
    </div>
  );
};

export default Item;
