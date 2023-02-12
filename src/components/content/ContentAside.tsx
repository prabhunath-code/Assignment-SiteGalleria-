import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ContentAside = () => {
  const value = useSelector((state: RootState) => state.colors.value);

  const dumpArray = useSelector((state: RootState) => state.colors.dumpArray);


  return (
    <div className="flex-[0.3] flex flex-col">
      <div className="bg-[rgb(206,236,238)] m-2 flex ">
        <img
          className="w-[60px] h-[60px]  m-4"
          src={
            "https://leadschool.in/wp-content/uploads/2022/02/Img_987-edited-e1643982754142.png"
          }
        />
        <div className="flex flex-col">
          {/* <Clock /> */}
          <p>ashish</p>
        </div>
      </div>
      <div className=" border h-[300px] bg-[rgb(206,236,238)] m-2">
        <div className=" bg-indigo-500 text-white ">Question Pallet</div>
        <div className="grid grid-cols-5 border ">
          {arr.map((i) => (
            <button
              key={i}
              className={`border ${
              dumpArray.find((e)=>(e===i))?"bg-gray-600":i<value?"bg-green-600":"bg-red-400"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-indigo-500 text-white ml-2 mr-2">
          Click to view()
        </div>
        <div className="grid grid-cols-2 border border-gray-500 ml-2 mr-2 p-[0.7px]">
          <button className="flex items-end bg-[rgb(18,142,49)] ">
            4 Answer
          </button>
          <button className="flex items-end bg-[rgb(252,45,48)]">
            2 No Answer
          </button>
          <button className="flex items-end bg-[rgb(157,130,247)]">
            1 Review+Ans
          </button>
          <button className="flex items-end bg-[rgb(245,254,45)]">
            1 review+answer
          </button>
          <button className="flex items-end bg-[rgb(206,203,202)]">
            1 dump
          </button>
          <button className="flex items-end bg-[]">1 No Visit</button>
        </div>

        <div className="flex  flex-col justify-center bg-[rgb(206,236,238)] text-white ml-2 mr-2">
          <button className="bg-indigo-500 mb-2">10 All Question</button>
          <div className="grid grid-cols-2">
            <button className="bg-indigo-500 border m-2">Profile</button>
            <button className="bg-indigo-500 border m-2">Instr</button>
            <button className="bg-indigo-500 border m-2">question</button>
            <button className="bg-indigo-500 border m-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAside;

