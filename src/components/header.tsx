import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">My Cake</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-20  flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Tentang</a>
      <a className="mr-5 hover:text-gray-900">Produk</a>
      <a className="mr-5 hover:text-gray-900">Toko</a>
      <a className="mr-5 hover:text-gray-900">Promno</a>
      <a className="mr-5 hover:text-gray-900">Artikel</a>
    </nav>
    <div>
        <p className='font-bold text-black'>8 800 571-98-11</p>
        <p className='flex justify-center'>No.Telepon</p>
    </div>
  </div>
</header>
  )
}

export default Header