import React, { createContext, useState } from 'react'
import FoodData from '../Food.js'

export const DataContext=createContext()
function UseContext({children}) {
    let [input,setInput]=useState('')
    let [foodCategories, setfoodCategories] = useState(FoodData)
    let [toggler,setToggler]=useState(false)
    const data={
        input,
        setInput,
        foodCategories,
        setfoodCategories,
        toggler,
        setToggler
    }

  return (
    <div>
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UseContext