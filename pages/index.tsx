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
  const [linksData, setLinksData] = useState<any>([]);
  const [socialsData, setSocialsData] = useState<any>([]);
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    setUserData(user);
    setLinksData(links);
    setSocialsData(socials);
  }, [linksData, socialsData, userData]);

  if (userData == 0 || linksData == 0 || socialsData == 0) {
    return (
      <div className='flex justify-center items-center h-screen text-xl'>
        Loading...⌛️
      </div>
    );
  }

  let currentLocation = window.location.href;
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
        <title>{userData?.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex w-full flex-1 justify-center'>
        <div className='space-y-4'>
          {/* avatar */}
          <div className='flex space-x-2 justify-between items-center w-full'>
            <Image
              src={`/${userData?.imageName}`}
              alt='avatar'
              placeholder='empty'
              width={75}
              height={75}
              className='justify-center items-center flex rounded-lg'
            />
            <button
              className={`
                ${
                  share
                    ? `bg-green-200 ring-green-500 focus:ring-2 text-green-800 font-semibold`
                    : `bg-blue-100 font-semibold text-gray-500`
                }         hover:ring-2 text-xs py-1 px-2 rounded-lg`}
              onClick={onShare}
            >
              {share ? 'URL Copied ✅' : 'Share URL 🔗'}
            </button>
          </div>
          <div className='space-y-4 max-w-xs'>
            {/* heading */}

            <Heading
              title={` ${userData?.title}`}
              subTitle={` ${userData?.subTitle}`}
            />
            {/* socials */}
            {userData?.socialSection && (
              <Section title='Socials 🚀' borderColor='border-violet-400'>
                <div className='gap-1 items-center w-full'>
                  <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                    {socialsData?.map((socialsData: any) => (
                      <Socials
                        key={socialsData?.id}
                        textColor='text-violet-700'
                        bgColor='bg-violet-200'
                        link={socialsData?.link}
                        linkText={socialsData?.linkText}
                      />
                    ))}
                  </div>
                </div>
              </Section>
            )}
            {/* links */}
            {userData?.linksSection && (
              <Section title='Mentioned Links 🖇' borderColor='border-blue-400'>
                <div className='gap-1 items-center w-full'>
                  <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                    {linksData.map((linksData: any) => (
                      <Links
                        key={linksData?.id}
                        textColor='text-blue-700'
                        bgColor='bg-blue-200'
                        link={linksData?.link}
                        linkText={linksData?.linkText}
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
