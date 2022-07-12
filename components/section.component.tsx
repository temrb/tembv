import React from 'react';

interface Props {
  children: React.ReactNode;
  borderColor?: string;
}

const Section = ({ children, borderColor }: Props) => {
  return (
    <div
      className={`${
        borderColor ? `${borderColor} border-2` : ''
      } p-3 rounded-lg`}
    >
      <div className='flex justify-between items-center'></div>
      {children}
    </div>
  );
};

export default Section;
