import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../components/section.component';
import Links from '../components/links.component';
import Socials from '../components/socials.component';
import { motion } from 'framer-motion';
import { MailIcon } from '@heroicons/react/solid';
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
    <div className='flex py-8 min-h-screen overflow-auto flex-col bg-white items-center justify-center'>
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
            {/* socials */}
            {user[0].showSocialSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              >
                <Section>
                  <div className='gap-1 items-center w-full'>
                    <div className='overflow-x-auto grid grid-cols-2 gap-2 items-center'>
                      {socials.map((social: any) => (
                        <Socials
                          key={social._id}
                          link={social.link}
                          linkText={social.linkText}
                        />
                      ))}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
          </div>

          <div className='flex items-center justify-between'>
            <div className='font-light text-sm flex'>
              {/* heading */}
              {user[0].title}
            </div>
            <div className='flex space-x-2'>
              <button
                className={`
                    ${
                      share
                        ? ` text-green-800 font-semibold`
                        : ` text-gray-500`
                    }         text-xs py-1 px-2`}
                onClick={onShare}
              >
                {share ? 'URL Copied! ✅' : 'Copy URL! 🔗'}
              </button>
              <div className='cursor-pointer flex justify-end'>
                <Link href={`mailto:${user[0].contactEmail}`}>
                  <MailIcon className='text-gray-400 h-6' />
                </Link>
              </div>
            </div>
          </div>
          <div className='space-y-3 max-w-xs lg:max-w-lg'>
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
                <h1 className='font-semibold text-xl pb-2 pt-4 flex justify-end'>
                  {user[0].productsTitle}
                </h1>
                <Section bgColor='bg-slate-200 shadow-lg'>
                  <div className='grid items-center space-y-2 w-full'>
                    <div className='overflow-x-auto flex gap-2 items-center'>
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
                    <div className='flex justify-between items-center text-xs'>
                      <p>{products.length} product(s)</p>
                      {products.length > 1 && <p>↔️</p>}
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
                <h1 className='font-semibold text-xl pb-2 pt-4 flex justify-end'>
                  {user[0].linksTitle}
                </h1>
                <Section bgColor='bg-slate-200 shadow-lg'>
                  <div className='gap-1 grid items-center space-y-2 w-full '>
                    <div className='overflow-x-auto flex gap-2 items-center'>
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
                            link={link.link}
                            linkText={link.linkText}
                            description={link.description}
                            createdAt={link._createdAt}
                            coupon={link.coupon}
                            couponAmt={link.couponAmt}
                          />
                        ))}
                    </div>
                    <div className='flex justify-between items-center text-xs'>
                      <p>{links.length} link(s)</p>
                      {links.length > 1 && <p>↔️</p>}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
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
  socialsTitle,
  linksTitle,
  productsTitle,
  showSocialSection,
  showLinksSection,
  showProductsSection,
}`;
  const linksQuery = `*[_type =='links']{
  _id,
  _createdAt,
  link,
  linkText,
  coupon,
  couponAmt
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
