/* eslint-disable react/react-in-jsx-scope */

'use client'

import { baseUrl } from '@/config/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoMdCloseCircle, IoMdList } from 'react-icons/io'

const HeaderCategory = () => {
  const path = usePathname()

  const [categories, setCategories] = useState([])
  const [cateShow, setCateShow] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/category/all`)
      const data = await res.json()

      setCategories(data.categories)
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  const toggleCateShow = () => setCateShow((prev) => !prev)
  const toggleSearchVisible = () => setSearchVisible((prev) => !prev)

  const categoryLinks = useMemo(() => {
    return categories.map((category, index) => (
      <Link
        key={index}
        href={`/news/category/${category.category}`}
        className={`px-6 font-medium py-[13px] ${
          path === category.category ? 'bg-[#00000026]' : ''
        }`}
      >
        {category.category}
      </Link>
    ))
  }, [categories, path])

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="w-full">
      <div className="bg-[#5271ff] w-full text-white uppercase font-semibold relative">
        <div className="px-8 flex justify-between items-center relative h-[50px]">
          <div
            onClick={toggleCateShow}
            className={`text-3xl flex lg:hidden font-bold h-full w-[50px] cursor-pointer justify-center items-center ${
              cateShow ? 'bg-[#00000026]' : ''
            } hover:bg-[#00000026]`}
          >
            <IoMdList />
          </div>
          <div className="flex-wrap hidden lg:flex">
            <Link
              href="/"
              className={`px-6 font-medium py-[13px] ${
                path === '/' ? 'bg-[#00000026]' : ''
              }`}
            >
              Home
            </Link>
            {categoryLinks}
          </div>
          <div className="h-full w-[50px]">
            <div
              onClick={toggleSearchVisible}
              className={`text-xl font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026] ${
                searchVisible ? 'bg-[#00000026]' : ''
              }`}
            >
              {searchVisible ? <IoMdCloseCircle /> : <FaSearch />}
            </div>
            {searchVisible && (
              <div className="absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0">
                <div className="p-3 bg-white">
                  <form className="flex">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-[calc(100%-45px)] h-[40px] p-2 border border-slate-300 outline-none bg-slate-100"
                    />
                    <button className="w-[45px] hover:bg-blue-700 cursor-pointer h-[40px] flex justify-center items-center bg-blue-600 text-white text-xl">
                      <FaSearch />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {cateShow && (
        <div className="flex flex-wrap lg:hidden py-2 px-[30px]">
          <Link
            href="/"
            className={`px-4 font-medium py-[5px] ${
              path === '/' ? 'bg-[#00000026]' : ''
            }`}
          >
            Home
          </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/news/category/${category.category}`}
              className={`px-4 font-medium py-[5px] ${
                path === category.category ? 'bg-[#00000026]' : ''
              }`}
            >
              {category.category}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderCategory
