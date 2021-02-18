import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

function Contacts() {
  return (
    <div className='flex flex-col md:flex-row lg:justify-center p-5'>
      <ul className='text-left w-full md:w-1/2'>
        {/* <li className='py-3'>
          <FontAwesomeIcon icon={faPhone} className='text-blue-500' /> :
          +
        </li> */}
        <li className='py-3'>
          <FontAwesomeIcon icon={faMailBulk} className='text-blue-500' />{' '}
          <a href='mailto: giedrius.jasutis@gmail.com' className='underline'>
            giedrius.jasutis@gmail.com
          </a>
        </li>
        <li className='py-3'>
          {' '}
          <FontAwesomeIcon icon={faCity} className='text-blue-500' /> Vilnius,
          Lietuva
        </li>
        <li className='py-3'>
          {' '}
          <FontAwesomeIcon icon={faAlignLeft} className='text-blue-500' /> HTML,
          CSS, JAVASCRIPT
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
