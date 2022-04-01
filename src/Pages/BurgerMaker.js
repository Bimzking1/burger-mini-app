import React from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {
  
  return (
    // Route cara 1:
    // <Layout>
    //   <Burger/>
    // </Layout>

    // Route cara 2: Layout diletakan pada App.js
      // <Burger/>
      
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
          <Controller/>
      </div>
      <div className={style.burger_display}>
          <Burger/>
      </div>
    </div>
  )
}

export default BurgerMaker