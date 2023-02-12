


import React from "react";
import { getDumpArray } from "@/app/Redux/colorSlice";

import { increment } from "@/app/Redux/colorSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";



const ContentMain = () => {
const dispatch=useDispatch()
const value=useSelector((state:RootState)=>state.colors.value)


const {dumpArray}=useSelector((state:RootState)=>state.colors)








  return (
    <div className="flex-[0.7]">
      <div className="flex border border-gray-500 justify-between bg-indigo-500 text-white mt-3  ">
        <div className="">Q No.:{value}</div>
        <div className="text-black">
          <label className="text-white">View In.:</label>
          <select name="cars" id="cars">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="flex border border-gray-300   ">
        <div className="w-1/2   border  ">
          <div className="flex items-start text-indigo-500">
            Question instructtion
          </div>
        </div>
        <div className="w-1/2 border ">
          <div className="flex items-start text-indigo-500"> Question no {value}</div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex-[0.5] border">
          <p>
            Passage you want to hit a small box on the floor with a marble fired
            from a spring-loaded gun that is mounted on a table.The target box
            is a distance R horizontally from the edge of the table; see the
            figure to the right . you can compress the spring of distance d ,but
            the center of the box .how far should by a distance r of the center
            of the box.how dar should you compress the spring score a direct
            hit(neglect friction)
          </p>
        </div>
        <div className="flex-[0.5] border">
          <p>
            A block of mass m is projected with velocity vo shown in the fig.
            the distance of the block during motion
          </p>
          <img src="https://haygot.s3.amazonaws.com/questions/1386859_60ebc96f4cc94b9db329fcb0ae65882c.png" alt="" />
          <div className="flex flex-col items-start mt-4 ">
              <div className="flex w-full border  pb-2 pt-2 ">
              <input type="radio" value={"a"} name="ans" />
              <label htmlFor="">(A)</label>
              </div>
              <div className="flex  w-full border  pb-2 pt-2 ">
              <input type="radio" value={"b"} name="ans"/>
              <label htmlFor="">(B)</label>
              </div>
              <div className="flex  w-full border pb-2 pt-2  ">
              <input type="radio" value={"c"}  name="ans"/>
              <label htmlFor="">(c)</label>
              </div>
              <div className="flex w-full border pb-2 pt-2 ">
              <input type="radio" value={"d"}  name="ans"/>
              <label htmlFor="">(D)</label>
              </div>
          </div>
          
        </div>
      </div>
      <div className="pl-2 mt-4 ml-[20px] w-full">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded ml-2 mr-2">
          ClearResponse
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded ml-2">
          Review
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded ml-2" onClick={()=>{dispatch(getDumpArray(value))}}>
          Dump
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded ml-2" onClick={()=>dispatch(increment(value-1))} >
          Previous
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded ml-2" onClick={()=>{dispatch(increment(value+1))}}>
          Next
        </button>
      </div>


    </div>
  );
};

export default ContentMain;
