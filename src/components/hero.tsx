'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const Hero = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900'>
            Celestial Delights: A Heavenly Symphony of Sweetness
          </h1>
          <p className='mb-8 leading-relaxed'>
            Celestial Delights: A Heavenly Symphony of Sweetness adalah
            kue yang indah dan imajinatif yang membangkitkan rasa takjub dan
            pesona. Kue ini dirancang untuk menarik perhatian dan imajinasi
            orang-orang yang menjumpainya, menarik mereka ke dalam dunia rasa
            surgawi dan kesenangan.
          </p>
          <div className='flex justify-center'>
            <button
              onClick={() => {
                setSelectedTitle('Beli Sekarang');
              }}
              className={`inline-flex border-0 py-2 px-6 font-normal focus:outline-none rounded-full text-lg ${
                selectedTitle == 'Beli Sekarang'
                  ? 'bg-pink-800 text-white'
                  : 'bg-pink-500 text-white'
              }`}
            >
              Beli Sekarang
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <Image
            width={0}
            height={0}
            src='/img/sweet.png'
            alt=''
            sizes='1000vw'
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
              height: 'auto',
              width: '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
