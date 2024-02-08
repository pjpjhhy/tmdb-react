import React from 'react'
import Logo from './images/icon.svg'
import { TiPlus } from "react-icons/ti";
import { FaBell,FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { color } from 'framer-motion';

export default function NavPage({scroll}) {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={` sticky top-0 ${scroll ? 'translate-y-0': '-translate-y-[60px]'} duration-700 z-20 w-full h-[70px] bg-[#032541] flex justify-center`}>
      {/* 중앙정렬된 컨테이너 */}
      <div className='max-w-[1400px] px-6 w-full h-full flex justify-between'>
          {/* 왼쪽: 로고 + 메뉴 */}
          <div className='flex space-x-8 h-full'>
            {/* 로고 */}
            <div className='h-full flex items-center'>
              <Link to="/"><img className='w-[120px]' src={Logo} alt="main logo" /></Link>
            </div>
            {/* 메뉴 */}
            <div className='h-full flex items-center space-x-6 text-white font-semibold'>
              <Link to="/banana"><p>Movies</p></Link>
              <Link to="/grape"><p>Tv Shows</p></Link>
              <Link to="/detail"><p>People</p></Link>
              <p>More</p>
            </div>
          </div>
          {/* 오른쪽: 아이콘 영역 */}
          <div className='flex space-x-7 items-center '>
            <div className='text-white text-xl'>
            <TiPlus />
            </div>
            <div className='border border-white text-white p-1 text-xs hover:bg-white hover:text-black'>
            EN
            </div>
            <div className='text-white text-lg'>
              <FaBell/>
            </div>
            <div onClick={toggleColorMode} className='text-white text-lg cursor-pointer'>
              {colorMode === 'light' ? <MdSunny  className='text-2xl text-red-600' />: <BsMoonStarsFill className='text-2xl text-yellow-300'/> }
            </div>
            <div className='flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#0177D2] text-xl'>
              J
            </div>
            <div className='text-[#01B4E4] text-xl'>
            <FaSearch />
            </div>
          </div>
      </div>
    </div>
  )
}
