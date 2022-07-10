import React from 'react';
import Link from 'next/link';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
  createdAt?: string;
}

const Item = ({ textColor, link, linkText, bgColor, createdAt }: Props) => {
  return (
    <Link href={`${link}`}>
      <div className='space-y-1'>
        <div
          className={`flex justify-center ${textColor} py-1 px-2 truncate ... rounded-lg ${bgColor} font-semibold cursor-pointer`}
        >
          {linkText}
        </div>
        <div className='text-xs flex justify-end font-extralight dark:text-gray-200'>
          {
            createdAt &&
              new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })
          }
        </div>
      </div>
    </Link>
  );
};

export default Item;
