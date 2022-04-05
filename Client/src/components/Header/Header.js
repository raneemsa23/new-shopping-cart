import React from 'react'
import '../../css/Header/Header.css'
import { Words } from '../../staticWords'
import Nav from '../Nav/Nav'
export default function Header() {
  return (
    <>
     <div className='header'>
     {Words.headerTitle}
    </div>
    {/* <Nav/> */}
    </>
   
    
  )
}
