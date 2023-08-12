import React from 'react';
import Image from 'next/image';
const Testimonial = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <h1 className='text-3xl font-medium title-font text-gray-900 mb-12 text-center'>
          Testimonials
        </h1>
        <div className='flex justify-center'>
          <div className='p-4 md:w-1/2 w-full'>
            <div className='h-full bg-gray-100 p-8 rounded-lg'>
              <a className='inline-flex rounded-full items-center'>
                <Image width={100} height={100} src='/img/user.jpeg' alt='' />
                <span className='flex-grow flex flex-col pl-4'>
                  <span className='title-font font-medium text-gray-900'>
                    Thomas
                  </span>
                  <span className='text-gray-500 text-sm'>Pelanggan</span>
                </span>
              </a>
              <p className='leading-relaxed mb-6'>
                Saya senang saya memilih kue ini untuk acara khusus. Itu membuat
                perayaan itu semakin berkesan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
