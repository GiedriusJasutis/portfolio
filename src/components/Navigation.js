import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// const linkStyles = '';

function Navigation() {
  const [linkColor, setLinkColor] = useState({
    homePage: 'bg-gray-700',
    homePageText: 'text-white',
    contactsPage: '',
    contactsPageText: '',
  });

  return (
    <nav className='w-full block'>
      <ul className='flex justify-center lg:justify-start text-2xl mb-12 sm:mb-32'>
        <NavLink
          to='/'
          className={`p-5 ${linkColor.homePageText} ${linkColor.homePage}`}
          onClick={() => {
            let colors = {
              homePage: 'bg-gray-700',
              homePageText: 'text-white',
              contactsPage: '',
              contactsPageText: '',
            };
            setLinkColor(colors);
          }}
        >
          <li>
            <FontAwesomeIcon icon={faHome} />
          </li>
        </NavLink>

        <NavLink
          to='/contacts'
          className={`p-5 ${linkColor.contactsPageText} ${linkColor.contactsPage}`}
          onClick={() => {
            let colors = {
              homePage: '',
              homePageText: '',
              contactsPage: 'bg-gray-700',
              contactsPageText: 'text-white',
            };
            setLinkColor(colors);
          }}
        >
          <li>Kontaktai</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
