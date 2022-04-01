import React, { useState } from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

  const [ingredients, setIngredients] = useState([])

  const addIngredientsHandler = (ingredient) => {
    console.log('ini ingredient:', ingredient)
      setIngredients( prevState => {
          const newState = [ingredient, ...prevState]
          // console.log('ini prevsate bro:', prevState)
          // console.log('nanti ngereturn newState: ', newState)
          return newState
      })
      // console.log('ini ingredients:', ingredients)
  }
  
  return (
    // Route cara 1:
    // <Layout>
    //   <Burger/>
    // </Layout>

    // Route cara 2: Layout diletakan pada App.js
      // <Burger/>
      
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
          <Controller ingredients={ingredients} addIngredientsHandler={addIngredientsHandler}/>
      </div>
      <div className={style.burger_display}>
          <Burger ingredients={ingredients}/>
      </div>
    </div>
  )
}

export default BurgerMaker