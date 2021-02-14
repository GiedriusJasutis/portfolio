import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

function Contacts() {
  return (
    <div className='flex'>
      <ul className='text-left mx-2'>
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
