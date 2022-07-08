import React from 'react';

interface Props {
    title: string;
    subTitle: string;
}

const Heading = ({title, subTitle}:Props) => {
  return (
    <div className='space-y-1'>
      <div className='flex'>
        <h1 className='font-bold text-2xl flex'>{title}</h1>
      </div>
      <p className='text-md font-light'>
        {subTitle}
      </p>
    </div>
  );
};

export default Heading;
