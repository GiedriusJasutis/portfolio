import React from 'react';
import { NavLink } from 'react-router-dom';

const listStyle = 'p-3 transform hover:scale-150';

function Footer() {
  return (
    <div>
      <ul className='text-left mx-2 flex '>
        <li className={listStyle}>
          <a
            href='https://github.com/GiedriusJasutis'
            className='text-blue-700 '
            target='_blank'
          >
            <span className='text-4xl '>
              <i class='fab fa-github'></i>
            </span>{' '}
          </a>
        </li>
        <li className={listStyle}>
          <a
            href='https://www.linkedin.com/in/giedrius-jasutis-1085bb1a2'
            target='_blank'
            className='text-blue-700'
          >
            <span className='text-4xl '>
              <i class='fab fa-linkedin'></i>
            </span>{' '}
          </a>
        </li>
        <li className={listStyle}>
          <a
            href='https://mobile.twitter.com/Giedriu78769338'
            className='text-blue-700'
            target='_blank'
          >
            <span className='text-4xl '>
              <i class='fab fa-twitter-square'></i>
            </span>{' '}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
