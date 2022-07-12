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
  logo?: string;
  coupon?: string;
  couponAmt?: string;
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
  logo,
  coupon,
  couponAmt,
}: Props) => {
  console.log('🚀 ~ file: item.component.tsx ~ line 34 ~ coupon', coupon);
  return (
    <Link href={`${link}`}>
      <div className='space-y-1 cursor-pointer'>
        <div
          className={`flex text-sm justify-center ${textColor} py-1 px-2 truncate ... rounded-lg ${bgColor} font-semibold cursor-pointer`}
        >
          {linkText}
        </div>
        <div className='text-xs flex justify-center font-extralight dark:text-gray-200'>
          {createdAt &&
            new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
        </div>
        {description && (
          <div className='grid justify-end space-y-1'>
            <>
              {description && (
                <div className='text-xs font-extralight dark:text-gray-200 justify-end flex'>
                  {description}
                </div>
              )}
            </>
            {discount ? (
              <div className='flex justify-evenly space-x-4 items-center'>
                {logo && <div className='flex'>{logo}</div>}
                <div className='text-xs bg-red-200 text-red-800 py-1 px-2 rounded-lg flex space-x-2'>
                  <div className='italic line-through text-red-600'>
                    ${price}
                  </div>
                  <div>
                    <span className='font-semibold'>{discount}% </span>
                    Off 🔥
                  </div>
                </div>
                <div className='flex'>
                  <div className='text-lg font-bold text-orange-600 dark:text-orange-200'>
                    ${discountCalc(price || 0, discount)}
                  </div>
                </div>
              </div>
            ) : (
              price && (
                <div className='flex justify-evenly space-x-4 items-center'>
                  {logo && <div className='flex'>{logo}</div>}
                  <div className='text-lg font-bold text-orange-600 dark:text-orange-300'>
                    ${price}
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {coupon && (
          <div className='text-xs grid justify-center'>
            ↘️ {couponAmt} Off ↙️
            <div className='font-semibold flex justify-center'>"{coupon}"</div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Item;
