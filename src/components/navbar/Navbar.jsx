'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portifolio',
    url: '/portifolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  return (
    <div>
      {' '}
      <Link href={'/'}>itSC</Link>
      <div className={styles.custom_container}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log('Logged out')}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
