import React from 'react';
import PortfolioPhoto from '../images/photo.jpeg';
import SocialMedia from './SocialMedia';

function Home() {
  return (
    <div className='flex flex-col lg:flex-row-reverse m-5'>
      <div className='mx-auto flex flex-col items-center justify-center lg:justify-between lg:p-5'>
        <img
          src={PortfolioPhoto}
          alt=''
          className='w-2/3 sm:w-1/2 rounded-lg'
        />
        <div className='pt-5'>
          <SocialMedia></SocialMedia>
        </div>
      </div>

      <div className='text-center md:m-2 md:py-3 flex flex-col p-9 font-light text-lg  lg:w-1/2'>
        <div className='my-8'>
          <h3 className='md:py-5 pb-5 text-2xl md:text-2xl font-medium'>
            {' '}
            Giedrius Jasutis
          </h3>
        </div>
        <div className='my-8 '>
          <p>
            Sveiki, esu Giedrius Jasutis, savamokslis programuotojas. Šiuo metu
            dirbu su Canon ofisinių printerių nustatymų automatizavimu. Tam
            naudoju Imacros ir Javascript programavimo kalbą. Taip pat turiu
            patirties su html, css, bootstrap, tailwindcss ir react js.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
