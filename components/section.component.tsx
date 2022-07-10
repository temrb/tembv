import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  borderColor: string;
  scroll?: boolean;
}

const Section = ({ children, title, borderColor, scroll }: Props) => {
  return (
    <div className={`border-2 ${borderColor} p-4 rounded-lg`}>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-xl flex dark:text-gray-200'>{title}</h1>
        {scroll && (
          <p className='text-gray-500 dark:text-gray-200 text-xs font-light'>
            scroll ↔️
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default Section;
