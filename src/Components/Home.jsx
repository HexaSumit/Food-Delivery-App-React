import React, { useContext, useState } from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Nav from './Nav'
import Card from './Card'
import FoodData from '../food'
import { DataContext } from '../context/UseContext';
import Card2 from './Card2';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

function Home() {
  const foodItemsMenus = [
    {
      id: 1,
      name: 'All',
      image: <TiThSmallOutline className='  w-[60px] h-[60px] text-green-600' />
    },
    {
      id: 2,
      name: 'Breakfast',
      image: <MdOutlineFreeBreakfast className='  w-[60px] h-[60px] text-green-600' />
    },
    {
      id: 3,
      name: 'Soup',
      image: <LuSoup className='  w-[60px] h-[60px] text-green-600' />
    },
    {
      id: 4,
      name: 'Pasta',
      image: <CiBowlNoodles className='  w-[60px] h-[60px] text-green-600' />
    },
    {
      id: 5,
      name: 'Main Course',
      image: <MdFoodBank className='  w-[60px] h-[60px] text-green-600' />
    }, {
      id: 6,
      name: 'Pizza',
      image: <GiFullPizza className='  w-[60px] h-[60px] text-green-600' />
    },
    {
      id: 7,
      name: 'Burger',
      image: <GiHamburger className='  w-[60px] h-[60px] text-green-600' />
    },
  ]
  let { foodCategories, setfoodCategories, input, toggler, setToggler } = useContext(DataContext)
  function filter(category) {
    if (category === 'All') setfoodCategories(FoodData)
    else {
      let newli = FoodData.filter((item) => item.category === category)
      setfoodCategories(newli)
    }
  }

  let items = useSelector((state) => state.cart)   //SEEE HERE 
  console.log(items)
  // console.log(items.length)
  let subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryfee = 20;
  let taxes = subtotal * 0.5 / 100;
  let Total = Math.floor(subtotal + deliveryfee + taxes);

  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
      <Nav />

      {/* CATEGORIES COMPONENT  */}
      {!input ? <div className=' pb-10 w-full flex flex-wrap items-center justify-center gap-5'>
        {foodItemsMenus.map((item) => {
          return <div onClick={() => filter(item.name)} key={item.id} className=' cursor-pointer transition-all duration-200 rounded-md shadow-xl hover:bg-green-200 w-[110px] h-[110px] md:w-[130px] md:h-[140px] bg-white px-4 py-2 flex flex-col gap-4 text-lg font-semibold'>
            {item.image}
            {item.name}
          </div>
        })}
      </div> : ''}

      {/* CARD COMPONENT  */}

      <div className=' flex justify-center items-center'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-6'>
          {foodCategories.map((item, index) => {
            return <Card key={index} id={item.id} img={item.img} name={item.name} price={item.price} foodtype={item.foodType} />
          })}
        </div>
      </div>

      {/* CARD COMPONENT  */}
      {toggler ? <div
        className={` md:w-[40vw] w-full h-full overflow-auto bg-white fixed top-0 right-0 p-[25px] shadow-xl
       transition-all duration-500  flex flex-col items-center ${toggler ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className=' text-2xl text-green-400'>Order items</span>
          <RxCross2
            className=' text-4xl text-green-600 hover:text-gray-500 cursor-pointer'
            onClick={() => setToggler((prev) => !prev)}
          />
        </header>

          {/* CART FEATURE  */}
        {items.length>0 ? <>
          <div className=' w-full mt-8 flex flex-col gap-8'>
          {items.map((item) => {
            return <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          })}
        </div>

          {/* PRICESS SECTION IN CART  */}
        <div className=' w-full border-t-2 border-b-2 border-gray-500 mt-7 pb-7'>
          <div className=' flex flex-col mt-4 gap-2 md:text-xl text-md text-gray-400 font-bold'>
            <div className=' w-full  flex justify-between items-center '>
              <span>Subtotal</span>
              <span className=' text-green-400 font-semibold'>Rs- {subtotal}/-</span>
            </div>
            <div className=' w-full flex justify-between items-center'>
              <span>Delivery Fee</span>
              <span className=' text-green-400 font-semibold'>Rs- {deliveryfee}/-</span>
            </div>
            <div className=' w-full flex justify-between items-center'>
              <span>Taxes</span>
              <span className=' text-green-400 font-semibold'>Rs- {taxes}/-</span>
            </div>
          </div>
        </div>

          {/* TOTAL PRICE  */}
        <div className=' w-full mt-3 flex justify-between items-center md:text-2xl text-xl'>
          <span className=' font-bold'>Total</span>
          <span className=' text-green-500 font-semibold'>Rs- {Total}/-</span>
        </div>

        <div className=' w-full flex justify-center items-center mt-10'>
          <button className="bg-green-500 text-white md:text-lg md:px-60 md:py-3 text-md px-20 py-2 rounded-lg hover:bg-green-600 transition" onClick={()=>{toast.success(`Order Placed Successfully......`)}}>
            Place Order
          </button>
        </div>

        </>:<div className=' md:text-3xl text-2xl text-green-500 absolute top-[30%]'>Empty Cart</div>}
      </div> : ''}

    </div>
  )
}

export default Home