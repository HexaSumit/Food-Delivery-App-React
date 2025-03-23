import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddItem } from '../redux/CartSlice';

function Card({id,img,name,price,foodtype}) {

    let dispatch=useDispatch()
    return (
    <div key={id} className=" cursor-pointer bg-white rounded-2xl shadow-lg p-4 w-64 hover:border-3 border-green-300 transition-all duration-150" >
        {/* Image */}
        <div className="rounded-xl overflow-hidden">
            <img
                src={img}
                alt="Margherita Pizza"
                className="w-full h-40 object-cover"
            />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-3">{name}</h3>

        {/* Price & Veg Icon */}
        <div className="flex items-center justify-between mt-1">
            <span className="text-green-600 font-medium">Rs {price}/-</span>
            <span className="text-green-600 flex items-center">
                <span className="ml-1">{foodtype}</span>
            </span>
        </div>

        {/* Button */}
        <button className="w-full bg-green-400 text-white md:bg-green-100 md:text-green-700 font-medium py-2 mt-3 rounded-lg hover:bg-green-200 transition" onClick={()=>dispatch(AddItem({id:id,name:name,price:price,image:img,qty:1}))}>
            Add to Dish
        </button>
    </div>
    )
}

export default Card