import React from 'react'
import { PiNumberCircleOneBold } from 'react-icons/pi';
import { PiNumberCircleTwoBold } from 'react-icons/pi';
import { PiNumberCircleThreeBold } from 'react-icons/pi';
import { PiNumberCircleFourBold } from 'react-icons/pi';
const Content = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-pink-500">Tidak sabar untuk memesan?</h1>
    </div>
    <div className="flex  justify-center -m-4">
      <div className="p-4 w-96">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="flex items-center gap-1 text-lg text-gray-900 font-medium title-font mb-2"><PiNumberCircleOneBold size='2rem'/>Pesanan</h2>
          <p className="leading-relaxed text-base">Tinggalkan permintaan di situs web kami atau lakukan pemesanan melalui aplikasi.</p>
        </div>
      </div>
      <div className="p-4 w-96">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="flex items-center gap-1 text-lg text-gray-900 font-medium title-font mb-2"><PiNumberCircleTwoBold size='2rem'/>Detail</h2>
          <p className="leading-relaxed text-base">Operator kami akan menghubungi Anda untuk mengklarifikasi semua detail pesanan Anda.</p>
        </div>
      </div>
      <div className="p-4 w-96">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="flex items-center gap-1 text-lg text-gray-900 font-medium title-font mb-2"><PiNumberCircleThreeBold size='2rem'/>Memasak</h2>
          <p className="leading-relaxed text-base">Kami memproduksi pesanan Anda dan mengemasnya untuk transportasi yang sangat baik.</p>
        </div>
      </div>
      <div className="p-4 w-96">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h2 className="flex items-center gap-1 text-lg text-gray-900 font-medium title-font mb-2"><PiNumberCircleFourBold size='2rem'/>Pengiriman</h2>
          <p className="leading-relaxed text-base">Kurir akan temapat  waktu yang di tentukan dengan lokasi yang sudah Anda kirimkan.</p>
        </div>
      </div>
     </div>
  </div>
</section>
  )
}

export default Content