import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Section from '../components/section.component';
import Links from '../components/links.component';
import Socials from '../components/socials.component';
import Heading from '../components/heading.component';
import { links } from '../data/linkData';
import { socials } from '../data/socialsData';
import { user } from '../data/userData';

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
    <div className='flex py-8 min-h-screen overflow-auto flex-col items-center justify-center'>
      <Head>
        <title>{user.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex w-full flex-1 justify-center'>
        <div className='space-y-4'>
          {/* avatar */}
          <div className='flex space-x-2 justify-between items-center w-full'>
            <Image
              src={`/${user.imageName}`}
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
                    ? `bg-green-200 ring-green-500 focus:ring-2 font-semibold`
                    : `bg-blue-100 font-semibold`
                }         hover:ring-2 text-xs py-1 px-2 rounded-lg`}
              onClick={onShare}
            >
              {share ? 'URL Copied ✅' : 'Share URL 🔗'}
            </button>
          </div>
          <div className='space-y-4'>
            {/* heading */}
            <Heading title={` ${user.title}`} subTitle={` ${user.subTitle}`} />

            {/* socials */}
            {user.socialSection && (
              <Section title='Socials 🚀' borderColor='border-violet-400'>
                <div className='gap-1 items-center w-full'>
                  <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                    {socials.map((social) => (
                      <Socials
                        key={social.id}
                        textColor={social.textColor}
                        link={social.link}
                        linkText={social.linkText}
                      />
                    ))}
                  </div>
                </div>
              </Section>
            )}

            {/* links */}
            {user.linksSection && (
              <Section
                title='Mentioned Links 🔗'
                borderColor='border-blue-400 '
              >
                <div className='gap-1 items-center w-full'>
                  <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                    {links.map((link) => (
                      <Links
                        key={link.id}
                        textColor={link.textColor}
                        link={link.link}
                        linkText={link.linkText}
                      />
                    ))}
                  </div>
                </div>
              </Section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
