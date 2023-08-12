"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const Contact = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Isi Formulir
          </h1>
          <p className='mb-8 leading-relaxed'>
            Operator kami akan menghubungi Anda dalam waktu 30 detik.
          </p>
          <div className="relative flex-grow w-96">
        <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Pilih Kue"/>
      </div>
      <div className=" grid gap-x-5 gap-y-4 grid-cols-3  pt-6">
        <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Nama Anda"/>
        <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="No.Telepon"/>
      </div>
          <div className='flex pt-6 justify-center'>
          <button
              onClick={() => {
                setSelectedTitle('Buat Pesanan');
              }}
              className={`inline-flex border-0 py-2 px-6 font-normal focus:outline-none rounded-full text-lg ${
                selectedTitle == 'Buat Pesanan'
                  ? 'bg-pink-800 text-white'
                  : 'bg-pink-500 text-white'
              }`}
            >
              Buat Pesanan
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

export default Contact;
