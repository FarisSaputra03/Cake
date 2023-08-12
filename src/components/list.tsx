'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const List = () => {
  const [selectedTitle, setSelectedTitle] = useState('Pink Cake');
  const listProduct = [
    {
      image: '/img/cake.png',
      title: 'Cake',
      description: 'Kue pink dengan cream di atas kue dan di taburi meses',
      price: 24000,
    },
    {
      image: '/img/happy cake.png',
      title: 'Happy Birthday Cake',
      description:
        'Kue ulang tahun yang dihiasi di atas kue bertulisan Happy Birthday',
      price: 30000,
    },
    {
        image: '/img/slice cake.png',
        title: 'Slice Cake',
        description:
          'Sepotong kue original di taburi toping-toping kecil',
        price: 15000,
      },
  ];
 let colorIndex =0;  
  return (
    <div className='flex flex-col text-center w-full mb-20'>
      <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-pink-500'>
        Beberapa varian Cake
      </h1>
      <div className='mt-10'>
        <nav
          className='-mb-0.5 flex justify-center  space-x-6'
          aria-label='Tab'
          role='tablist'
        >
          <button
            onClick={() => {
              setSelectedTitle('Pink Cake');
            }}
            type='button'
            className={`font-medium px-5 rounded-lg  hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  ${
              selectedTitle == 'Pink Cake'
                ? 'bg-pink-200 text-black'
                : 'bg-white text-black'
            }  active`}
            id='horizontal-alignment-item-1'
            data-hs-tab='#horizontal-alignment-1'
            aria-controls='horizontal-alignment-1'
            role='tab'
          >
            Pink Cake
          </button>
          <button
            onClick={() => {
              setSelectedTitle(' Cake');
            }}
            type='button'
            className={`font-medium px-5  rounded-lg hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap ${
              selectedTitle == 'Cake'
                ? 'bg-pink-200 text-black'
                : 'bg-white text-black'
            }active`}
            id='horizontal-alignment-item-2'
            data-hs-tab='#horizontal-alignment-2'
            aria-controls='horizontal-alignment-2'
            role='tab'
          >
            Cake
          </button>
          <button
            onClick={() => {
              setSelectedTitle('Cup Cake');
            }}
            type='button'
            className={`font-medium px-5  rounded-lg hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap ${
              selectedTitle == 'Cup Cake'
                ? 'bg-pink-200 text-black'
                : 'bg-white text-black'
            }active`}
            id='horizontal-alignment-item-3'
            data-hs-tab='#horizontal-alignment-3'
            aria-controls='horizontal-alignment-3'
            role='tab'
          >
            Cup Cake
          </button>
          <button
            onClick={() => {
              setSelectedTitle('Party Cake');
            }}
            type='button'
            className={`font-medium px-5  rounded-lg hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap ${
              selectedTitle == 'Party Cake'
                ? 'bg-pink-200 text-black'
                : 'bg-white text-black'
            }active`}
            id='horizontal-alignment-item-3'
            data-hs-tab='#horizontal-alignment-3'
            aria-controls='horizontal-alignment-3'
            role='tab'
          >
            Party Cake
          </button>
        </nav>
        <div className='flex justify-center'>
          {listProduct.map((data: any, index) => (
            <div key={index + 1} className='lg:w-1/4 md:w-1/2 p-4 w-full'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <Image width={420} height={260} src={data.image} alt='' />
              </a>
              <div className='mt-4'>
                <h3 className='text-gray-900 title-font text-lg font-medium'>
                  {data.title}
                </h3>
                <h2 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                  {data.description}
                </h2>
                <p className='mt-1'>Rp. {data.price}</p>
              </div>
              <button
              onClick={() => { 
                colorIndex =index;
                setSelectedTitle('Beli Sekarang');
              }}
              className={`inline-flex border-0 py-2 px-8 mt-20 font-normal focus:outline-none rounded-full text-lg ${
                selectedTitle == 'Beli Sekarang'
                  ? 'bg-pink-800 text-white'
                  : 'bg-pink-500 text-white'
              }`}
            >
              Beli Sekarang
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
