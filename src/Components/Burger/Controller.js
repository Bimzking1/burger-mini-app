import React, { useContext } from 'react'
import BurgerContext from '../../Contex/BurgerContext'

import AddButton from './AddButton'
import MapItem from './MapItem'
import style from './controller.module.css'

const Controller = () => {

    const ctx = useContext(BurgerContext)
    // console.log('halooo', ctx)

    return (
        <>
            <div className={style.ingredients_selector}>
                <h5>Add Ingredients</h5>
                <div>
                    <AddButton label="Patty" clickHandler={() => ctx.addIngredientsHandler('patty')} />
                    <AddButton label="Lettuce" clickHandler={() => ctx.addIngredientsHandler('lettuce')} />
                    <AddButton label="Tomato" clickHandler={() => ctx.addIngredientsHandler('tomato')} />
                    <AddButton label="Cheese" clickHandler={() => ctx.addIngredientsHandler('cheese')} />
                    <AddButton label="Bun" clickHandler={() => ctx.addIngredientsHandler('bun')} />
                </div>
            </div>
            <div className={style.ingredients_map}>
                {/* Loop untuk membuat list ingredient sesuai dengan urutan array */}
                {ctx.ingredients.map( (item, index) => {
                    return (
                        <>
                            {/* Merender MapItem untuk setiap item dari 'ingredients' */}
                            <MapItem
                                label={item}
                                key={index}
                                removeHandler={() => ctx.removeIngredientsHandler(index)}
                                upHandler={() => ctx.moveUpIngredientsHandler(index)}
                                downHandler={() => ctx.moveDownIngredientsHandler(index)}
                                firstItem={ index === 0 }
                                lastItem={ index === ctx.ingredients.length -1 }
                            />
                        </>
                    )
                })}
            </div>
        </>
  )
}

export default Controller