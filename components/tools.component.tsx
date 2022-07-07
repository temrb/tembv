import React from "react";
import Link from 'next/link';

const Tools = () => {
  return (
    <>
      <div className='gap-1 items-center'>
        <div className='overflow-x-auto grid grid-cols-3 items-center'>
          <div className='flex justify-center text-blue-400 hover:text-blue-600 transition-all ease-in-out rounded-lg font-semibold cursor-pointer'>
            <Link href='https://shortlyai.com/?fp_ref=tembee'>ShortlyAI</Link>
          </div>
          <div className='flex justify-center text-blue-400 hover:text-blue-600 transition-all ease-in-out rounded-lg font-semibold cursor-pointer'>
            <Link href='https://www.copy.ai/?via=tembee'>CopyAI</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
