import React from 'react';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
}

const Section = ({ children, bgColor }: Props) => {
  return (
    <div className={`${bgColor} p-3 rounded-lg`}>
      <div className='flex justify-between items-center'></div>
      {children}
    </div>
  );
};

export default Section;
