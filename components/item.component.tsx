import React from 'react';
import Link from 'next/link';

interface Props {
  textColor: string;
  link: string;
  linkText: string;
  bgColor: string;
  createdAt?: string;
  description?: string;
  price?: number;
  discount?: number;
}

const discountCalc = (price: number, discount: number) => {
  const discountPrice = price - price * (discount / 100);
  return discountPrice;
};

const Item = ({
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
    <Link href={`${link}`}>
      <div className='space-y-1 cursor-pointer'>
        <div
          className={`flex text-sm justify-center ${textColor} py-1 px-2 truncate ... rounded-lg ${bgColor} font-semibold cursor-pointer`}
        >
          {linkText}
        </div>
        <div className='text-xs flex justify-end font-extralight dark:text-gray-200'>
          {createdAt &&
            new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
        </div>
        <div className='grid justify-end space-y-1'>
          <div>
            {description && (
              <div className='text-xs font-extralight dark:text-gray-200 justify-end flex'>
                {description}
              </div>
            )}
          </div>
          {discount ? (
            <div className='flex justify-end space-x-4 items-center'>
              <div className='text-xs bg-red-200 text-red-800 py-1 px-2 rounded-lg'>
                {discount}% Off 🔥
              </div>
              <div className='text-lg font-semibold italic line-through text-red-600 dark:text-red-300'>
                ${discountCalc(price || 0, discount)}
              </div>
              <div className='text-lg font-bold text-orange-600 dark:text-orange-300'>
                ${price}
              </div>
            </div>
          ) : (
            price && (
              <div className='flex justify-end'>
                <div className='text-lg font-bold text-orange-600 dark:text-orange-300'>
                  ${price}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Link>
  );
};

export default Item;
