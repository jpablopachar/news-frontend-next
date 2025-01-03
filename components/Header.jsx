import headerBg from '@/assets/images/header-bg.jpg'
import { DateTime } from 'luxon'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import HeaderCategory from './HeaderCategory'

const Header = () => {
  return (
    <header className="bg-[#333333] text-[#cccccc]">
      <div className="px-5 lg:px-8 flex justify-between items-center py-2 border-b border-[#444444]">
        <span className="text-sm font-medium">
          {DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}
        </span>
        <div className="flex space-x-2">
          <a
            href=""
            className="w-8 h-8 flex justify-center items-center bg-[#2045ea] rounded-full hover:bg-slate-500 transition duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="w-8 h-8 flex justify-center items-center bg-[#5271ff] rounded-full hover:bg-slate-500 transition duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="w-8 h-8 flex justify-center items-center bg-[#ff5157] rounded-full hover:bg-slate-500 transition duration-200"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${headerBg.src})` }}
        className="bg-cover bg-center text-center py-6"
      >
        <div className="px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="md:w-4/12 w-full flex flex-col items-center md:items-start space-y-3">
            <Image
              className="w-[200px] h-full"
              alt="logo"
              src='/images/logo.png'
              priority
              width={200}
              height={100}
            />
            <h2 className="text-[#cccccc] text-md md:text-md font-semibold tracking-wide text-center md:text-left">
              Media that rocks your world
            </h2>
          </div>
          <div className="md:w-8/12 w-full hidden md:flex justify-end relative">
            <Image
              className="max-w-full h-auto object-cover"
              alt="add"
              src='/images/add.png'
              priority
              fill
            />
          </div>
        </div>
      </div>
      <HeaderCategory />
    </header>
  )
}

export default Header
