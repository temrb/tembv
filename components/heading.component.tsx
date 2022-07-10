import React from 'react';

interface Props {
  title: string;
  subTitle: string;
}

const Heading = ({ title, subTitle }: Props) => {
  return (
    <div className='space-y-1'>
      <div className='flex'>
        <h1 className='font-bold text-2xl flex dark:text-gray-200'>{title}</h1>
      </div>
      <p className='text-sm font-light dark:text-gray-200'>{subTitle}</p>
    </div>
  );
};

export default Heading;
