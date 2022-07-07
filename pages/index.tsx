import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const [share, setShare] = useState(false);

  let currentLocation: string;
  useEffect(() => {
    currentLocation = window.location.href;
  });

  const onShare = () => {
    const clipboard = navigator.clipboard.writeText(currentLocation);
    clipboard
      .then(() => {
        setShare(true);
      })
      .then(() => {
        setTimeout(() => {
          setShare(false);
        }, 2000);
      });
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Tem</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center'>
        <div className='space-y-4'>
          {/* avatar */}
          <div className='flex space-x-2 justify-between items-center w-full'>
            <Image
              src='/IMG_3823.jpg'
              alt='avatar'
              width={75}
              height={75}
              className='rounded-full
                justify-center items-center flex
                '
            />
            <button
              className={`
                ${
                  share
                    ? `bg-blue-300 ring-blue-500 focus:ring-2 font-semibold`
                    : `bg-blue-200 font-semibold`
                }               text-xs py-1 px-2 rounded-lg`}
              onClick={onShare}
            >
              {share ? 'URL Copied!' : 'Copy URL'}
            </button>
          </div>
          <div className='border-2 border-violet-400 p-4 rounded-lg space-y-2'>
            {/* intro */}
            <div className='space-y-1'>
              <div className='flex'>
                <h1 className='font-bold text-2xl flex'>Hi, I'm Tem! 👋</h1>
              </div>
              <p className='text-md font-light'>
                I'm curious about tech and how it works.
              </p>
            </div>
            <hr />
            {/* socials */}
            <div className='space-y-1'>
              <div className='flex'>
                <h1 className='font-semibold text-xl flex'>Socials 🚀</h1>
              </div>
              <div className='gap-1 items-center'>
                <div className='overflow-x-auto flex gap-2 items-center'>
                  <div className='flex justify-center text-sm bg-orange-400 hover:bg-orange-600 transition-all ease-in-out text-white py-1 px-2 rounded-lg font-semibold cursor-pointer'>
                    <Link href='https://www.tiktok.com/@tem.io'>TikTok</Link>
                  </div>
                  <div className='flex justify-center text-sm bg-blue-400 hover:bg-blue-600 transition-all ease-in-out text-white py-1 px-2 rounded-lg font-semibold cursor-pointer'>
                    <Link href='https://tembee.vercel.app/'>Blog</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content */}
            <div className='space-y-1'>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
