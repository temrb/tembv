import React from 'react';
import Link from 'next/link';

interface Props {
  link: string;
  linkText: string;
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

const Item = (Props: Props) => {
  return (
    <Link href={`${Props.link}`}>
      <div className='space-y-1 cursor-pointer'>
        <div
          className={`flex text-sm justify-center py-1 px-2 truncate ... rounded-lg font-semibold cursor-pointer`}
        >
          {Props.linkText}
        </div>
        {/* <div className='text-xs flex justify-center font-extralight dark:text-gray-200'>
          {createdAt &&
            new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
        </div> */}
        {Props.description && (
          <div className='grid justify-end space-y-1'>
            <>
              {Props.description && (
                <div className='text-xs font-extralight justify-end flex'>
                  {Props.description}
                </div>
              )}
            </>
            {Props.discount ? (
              <div className='flex justify-evenly space-x-4 items-center'>
                {Props.logo && <div className='flex'>{Props.logo}</div>}
                <div className='text-xs bg-red-200 text-red-800 py-1 px-2 rounded-lg flex space-x-2'>
                  <div className='italic line-through text-red-600'>
                    ${Props.price}
                  </div>
                  <div>
                    <span className='font-semibold'>{Props.discount}% </span>
                    Off 🔥
                  </div>
                </div>
                <div className='flex'>
                  <div className='text-lg font-bold text-orange-600'>
                    ${discountCalc(Props.price || 0, Props.discount)}
                  </div>
                </div>
              </div>
            ) : (
              Props.price && (
                <div className='flex justify-evenly space-x-4 items-center'>
                  {Props.logo && <div className='flex'>{Props.logo}</div>}
                  <div className='text-lg font-bold text-orange-600'>
                    ${Props.price}
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {Props.coupon && (
          <div className='text-xs grid justify-center'>
            ↘️ {Props.couponAmt} Off ↙️
            <div className='font-semibold flex justify-center'>
              "{Props.coupon}"
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Item;
