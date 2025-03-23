import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AddItem, decreaseQuantity, RemoveItem } from '../redux/CartSlice';

function Card2({name,price,id,image,qty}) {

    let dispatch=useDispatch() // TO USE THE REDUCER REMOVE ITEM
  return (
    <div className=' w-full h-[120px] p-2 shadow-lg flex'>
        <div className=" w-[60%] h-full flex gap-5">
            <div className=' w-[50%] h-full rounded-lg overflow-hidden'>
                <img src={image}
                 className=' object-cover'
                />
            </div>
            <div className=' w-[40%] h-full flex flex-col gap-3'>
                <div className=' md:text-xl text-md font-semibold '>{name}</div>
                <div className=' font-bold text-green-400 text-lg h-[50px] w-[110px] flex border-2 border-green-500 rounded-lg overflow-hidden shadow-lg'>
                    <button className=' h-full w-[30%] flex items-center justify-center hover:bg-slate-200' onClick={()=>dispatch(decreaseQuantity(id))}>-</button>
                    <span className='  h-full w-[40%] flex items-center justify-center bg-slate-200'>{qty}</span>
                    <button className=' h-full w-[30%] flex items-center justify-center hover:bg-slate-200'>+</button>
                </div>
            </div>
        </div>
        <div className="right w-[40%] flex flex-col items-end justify-start gap-6">
                <span className=' md:text-2xl text-lg text-green-500'>Rs {price}/-</span>
            <FaRegTrashAlt className=' text-red-400 w-[25px] md:h-[30px] h-[20px] cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2