import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../components/section.component';
import Links from '../components/links.component';
import Socials from '../components/socials.component';
import Heading from '../components/heading.component';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon, MailIcon } from '@heroicons/react/solid';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { setLightMode } from '../redux/fetaures/utilsSlice';
import { SocialsTypes, LinksTypes, UserTypes, ProductsTypes } from '../types';
import { sanityClient, urlFor } from '../sanity';

interface RootState {
  utils: any;
}

interface Props {
  socials: [SocialsTypes];
  links: [LinksTypes];
  user: [UserTypes];
  products: [ProductsTypes];
}

const Home: NextPage<Props> = ({ socials, links, user, products }) => {
  const [share, setShare] = useState(false);
  const lightMode = useAppSelector((state: RootState) => state.utils.lightMode);

  const onShare = () => {
    const clipboard = navigator.clipboard.writeText(window.location.href);
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
    <div className='flex py-8 min-h-screen overflow-auto flex-col dark:bg-slate-800 bg-white items-center justify-center'>
      <Head>
        <title>{user[0].name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex w-full flex-1 justify-center'>
        <div className='space-y-4'>
          {/* avatar */}
          <div className='flex justify-between items-center w-full'>
            <div className='flex'>
              <Image
                src={urlFor(user[0].image).url()}
                alt='avatar'
                placeholder='empty'
                width={75}
                height={75}
                className=' items-center flex rounded-lg'
              />
            </div>
            <div className='flex justify-end'>
              <div className='flex space-x-2'>
                <button
                  className={`
                    ${
                      share
                        ? `bg-green-200 ring-green-500 focus:ring-2 text-green-800 font-semibold`
                        : `bg-blue-100 font-semibold text-gray-500 dark:text-gray-600`
                    }         ring-2 text-xs py-1 px-2 rounded-full`}
                  onClick={onShare}
                >
                  {share ? 'URL Copied! ✅' : 'Copy URL! 🔗'}
                </button>
                <div className='cursor-pointer flex justify-end'>
                  <Link href={`mailto:${user[0].contactEmail}`}>
                    <MailIcon className='text-gray-400 h-7' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-3 max-w-xs'>
            {/* heading */}
            <Heading
              title={` ${user[0].title}`}
              subTitle={` ${user[0].subTitle}`}
            />
            <motion.p
              className='text-gray-500 dark:text-gray-200 text-xs font-light flex justify-end'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ↔️ scroll ⤵️
            </motion.p>
            {/* products */}
            {user[0].showProductsSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              >
                <Section
                  title={user[0].productsTitle}
                  borderColor='border-orange-400'
                >
                  <div className='grid items-center w-full'>
                    <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                      {products
                        .sort((a: any, b: any) => {
                          return (
                            new Date(b._createdAt).getTime() -
                            new Date(a._createdAt).getTime()
                          );
                        })
                        ?.map((product: any) => (
                          <Links
                            key={product._id}
                            textColor='text-orange-700'
                            bgColor='bg-orange-200'
                            borderColor='border-orange-300'
                            link={product.link}
                            linkText={product.name}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            discount={product.discount || null}
                            logo={product.logo}
                          />
                        ))}
                    </div>
                    <div className='flex justify-center items-center text-xs'>
                      {products.length} total product(s)
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
            {/* links */}
            {user[0].showLinksSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <Section
                  title={user[0].linksTitle}
                  borderColor='border-blue-400'
                >
                  <div className='gap-1 grid items-center w-full'>
                    <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                      {links
                        .sort((a: any, b: any) => {
                          return (
                            new Date(b._createdAt).getTime() -
                            new Date(a._createdAt).getTime()
                          );
                        })
                        ?.map((link: any) => (
                          <Links
                            key={link._id}
                            textColor='text-blue-700'
                            bgColor='bg-blue-200'
                            link={link.link}
                            linkText={link.linkText}
                            createdAt={link._createdAt}
                          />
                        ))}
                    </div>
                    <div className='flex justify-center items-center text-xs'>
                      {links.length} total link(s)
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
            {/* socials */}
            {user[0].showSocialSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              >
                <Section
                  title={user[0].socialsTitle}
                  borderColor='border-violet-400'
                >
                  <div className='gap-1 items-center w-full'>
                    <div className='overflow-x-auto py-4 flex gap-2 items-center'>
                      {socials.map((social: any) => (
                        <Socials
                          key={social._id}
                          textColor='text-violet-700'
                          bgColor='bg-violet-200'
                          link={social.link}
                          linkText={social.linkText}
                        />
                      ))}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
            {/* footer */}
            <motion.div
              className={`flex ${
                user[0].darkMode ? 'justify-between' : 'justify-end'
              } items-center`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
            >
              {user[0].darkMode && (
                <div className='flex'>
                  {lightMode ? (
                    <button
                      onClick={() => {
                        useAppDispatch(setLightMode(false));
                      }}
                    >
                      <SunIcon className='text-yellow-500 h-5' />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        useAppDispatch(setLightMode(true));
                      }}
                    >
                      <MoonIcon className='text-gray-500 h-5' />
                    </button>
                  )}
                </div>
              )}

              {user[0].showFooterSection && (
                <div className='text-xs font-light flex justify-end dark:text-gray-200'>
                  {user[0].footer}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const userQuery = `*[_type =='editUser']{
  _id,
  image,
  name,
  contactEmail,
  title,
  subTitle,
  socialsTitle,
  linksTitle,
  productsTitle,
  footer,
  darkMode,
  showFooterSection,
  showSocialSection,
  showLinksSection,
  showProductsSection,
}`;
  const linksQuery = `*[_type =='links']{
  _id,
  _createdAt,
  link,
  linkText,
}`;
  const productsQuery = `*[_type =='products']{
  _id,
  _createdAt,
  name,
  logo,
  description,
  price,
  discount,
  link
}`;
  const socialsQuery = `*[_type =='socials']{
  _id,
  link,
  linkText,
}`;

  //set loading true when fetching data and false when data is fetched

  const [user, links, socials, products] = await Promise.all([
    sanityClient.fetch(userQuery),
    sanityClient.fetch(linksQuery),
    sanityClient.fetch(socialsQuery),
    sanityClient.fetch(productsQuery),
  ]);
  return {
    props: {
      user: user,
      links: links,
      socials: socials,
      products: products,
    },
  };
};

export default Home;
