import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Blof Documentation',
      };
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {/* <meta property='og:title' content='Blof Documentation' /> */}
      <link rel='icon' href='/favicon.ico' />
      <meta
        property='og:description'
        content='The markdown(MDX) blog starter for developers and development teams.'
      />
    </>
  ),
  logo: (
    <Image
      src='/blof-logo.png'
      alt='blof logo'
      width={40}
      height={40}
      className='rounded-[7px]'
    />
  ),
  project: {
    link: 'https://github.com/Blof-Dev',
  },
  // chat: {
  //   link: 'https://x.com/blof_dev',
  // },
  docsRepositoryBase: 'https://github.com/Blof-Dev',
  footer: {
    text: 'Blof',
  },
};

export default config
