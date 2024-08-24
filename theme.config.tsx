import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';

const config: DocsThemeConfig = {
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
