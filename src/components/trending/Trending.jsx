import React, { useState } from 'react'
import "./style.css"
import { trending } from '../../dummyData'
import { Home } from './../homes/Home';
export const Trending = () => {
  const [items, setItems] =useState(trending)
  return (
    <section className='trending'>
    <Home items={items}/>
    </section>
  )
}

