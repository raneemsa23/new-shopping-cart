import React from 'react'
import '../../css/Header/Header.css'
import { staticWords } from '../../staticWords'
export default function Header() {
  return (
    <div className='header'>
     {staticWords.headerTitle}
    </div>
  )
}
