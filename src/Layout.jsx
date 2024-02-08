import React, { useState } from 'react'
import NavPage from './NavPage'
import Footer from './Footer'

export default function Layout({children}) {

  const[scroll,setScroll] = useState(true);
  

  document.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0){
      // mouse wheel down
      setScroll(false);
    }else if(e.deltaY < 0){
      // mouse whell up
      setScroll(true);
    }
  });

  return (
    <div>
        <NavPage scroll={scroll} />
        {children}
        <Footer/>
    </div>
  )
}
