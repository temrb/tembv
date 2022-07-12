import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  borderColor: string;
}

const Section = ({ children, title, borderColor }: Props) => {
  return (
    <div className={`border-2 ${borderColor} p-3 rounded-lg`}>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-xl flex dark:text-gray-200'>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Section;
