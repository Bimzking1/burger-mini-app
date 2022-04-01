// Dependencies
import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BurgerContext from './Contex/BurgerContext';

// Components
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker';
import Layout from './Layouts/Layout';

function App() {

  // Inisiasi state 'ingredients' dan setter 'setIngredients'
  const [ingredients, setIngredients] = useState([])

  // Handler untuk menambahkan ingredient
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

  // Handler untuk mengurangi ingredient
  const removeIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menghapus ingredient pada state 'ingredients' berdasarkan indexnya
      newState.splice( index, 1 )
      // Mereturn data baru untuk state 'ingredients'
      return newState
    })
  }

  // Handler untuk menggeser ingredient ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients ( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser keatas dan disimpan di variabel 'temp'
      const temp = newState[index-1]
      // Mengassign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index-1] = newState[index]
      // Mengassign variabel 'temp' ke index saat ini
      newState[index] = temp
      // newState[index] = tempMereturn state baru
      return newState
    })
  }

  // Handler untuk menggeser ingredient ke bawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients ( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser kebawah dan disimpan di variabel 'temp'
      const temp = newState[index+1]
      // Mengassign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index+1] = newState[index]
      // Mengassign variabel 'temp' ke index saat ini
      newState[index] = temp
      // newState[index] = tempMereturn state baru
      return newState
    })
  }
  return (
    <>
      {/*
      <h1>INI DEFAULT LAYOUT</h1>
      // Defaut Layout tidak ikut berubah mengikuti routing
      
      <Link to="/"><p>Home</p></Link>
      <Link to="/burger-maker"><p>Burger Maker</p></Link>
      */}
      
      <BurgerContext.Provider value={{ingredients, setIngredients, addIngredientsHandler, removeIngredientsHandler, moveUpIngredientsHandler, moveDownIngredientsHandler}}>
        <Layout>
          <Routes>   {/* Hanya element didalam Routes yang ikut berubah mengikuti routing */}
            <Route path="/" element={<Home/>}/>
            <Route path="/burger-maker" element={<BurgerMaker/>}/>
          </Routes>
        </Layout>
      </BurgerContext.Provider>
    </>
  );
}

export default App;