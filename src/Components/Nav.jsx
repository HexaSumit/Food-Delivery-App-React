import React, { useContext, useEffect, useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { DataContext } from '../context/UseContext';
import FoodData from '../Food.js';
import { useSelector } from 'react-redux';

function Nav() {
  let {input,setInput,foodCategories,setfoodCategories,toggler,setToggler}=useContext(DataContext)

  useEffect(()=>{
   let filteritems= FoodData.filter((item)=>item.name.includes(input)||item.name.toLowerCase().includes(input))
   setfoodCategories(filteritems)
  },[input])

  let items=useSelector((state)=>state.cart) // yaha SE ITEMS KI LENGTH MILEGI ITEMS.LENGTH KARKE
  // console.log(items)
  return (
    <div className=' w-full h-[100px] flex items-center justify-between md:px-[30px] gap-2 px-[10px]'>
        <div className=' cursor-pointer w-[50px] h-[50px]  md:w-[60px] md:h-[60px] bg-white flex items-center justify-center shadow-md rounded-md'>
        <MdFastfood className=' w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-green-600'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}
         className=' cursor-pointer flex items-center w-[60%] md:w-[70%] md:h-[60px] h-[50px] bg-white gap-2 px-4 rounded-md shadow-md'>
            <IoSearch className=' w-[15px] h-[15px] md:w-[20px] md:h-[20px] text-green-600'/>
            <input type="text"
              placeholder='Search items' 
              className=' w-[80%] outline-none text-lg'
              onChange={(e)=>setInput(e.target.value)}
              value={input}
              />
        </form>
        <div className=' relative cursor-pointer w-[50px] h-[50px]  md:w-[60px] md:h-[60px] bg-white flex items-center justify-center shadow-md rounded-md'
        onClick={()=>setToggler((prev)=>!prev)}
        >
        <span className=' absolute top-0 right-2 text-green-600 font-bold text-[14px] md:text-[14px]'>{items.length}</span>
        <FiShoppingBag  
        className=' w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-green-600'/>
        </div>
    </div>
  )
}

export default Nav