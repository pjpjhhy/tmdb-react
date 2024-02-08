import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./images/icon.svg"

export default function Footer() {
  return (
    <div className='w-full h-[250px] flex items-center justify-center py-16 bg-[#032541] text-white'>
       {/* 1 */}
       <div className='w-[200px] flex flex-col'>
       <Link to="/"><img className='h-[60px] w-[150px]' src={Logo} alt="main logo" /></Link>
       </div>
       {/* 2 */}
       <div className='w-[160px] flex flex-col'>
          <h3 className='uppercase font-semibold'>The Basics</h3>
          <p>TMDB에 대해</p>
          <p>문의하기</p>
          <p>Support Forums</p>
          <p>API</p>
          <p>System Status</p>
       </div>
       {/* 3 */}
       <div className='w-[160px] flex flex-col'>
          <h3 className='uppercase font-semibold'>GET INVOLVED</h3>
          <p>기여 지침서</p>
          <p>새 영화 추가</p>
          <p>새 tv 프로그램 추가</p>
        </div>
       {/* 4 */}
       <div className='w-[160px] flex flex-col'>
          <h3 className='uppercase font-semibold'>COMMUNITY</h3>
          <p>가이드라인</p>
          <p>토론 내역</p>
          <p>기여 랭킹</p>
        </div>
       {/* 5 */}
       <div className='w-[160px] flex flex-col'>
          <h3 className='uppercase font-semibold'>LEGAL MATTERS</h3>
          <p>서비스 이용약관</p>
          <p>API Terms of use</p>
          <p>개인정보약관</p>
          <p>DMCA Policy</p>
       </div>
    </div>
  )
}
