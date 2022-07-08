import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  borderColor: string;
}

const Section = ({ children, title, borderColor }: Props) => {
  return (
    <div className={`border-2 ${borderColor} p-4 max-w-xs rounded-lg`}>
      <h1 className='font-semibold text-xl flex'>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
