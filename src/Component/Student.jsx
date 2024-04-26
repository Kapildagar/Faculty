import React, { useState } from 'react'
import { data } from './utilis/data'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Student = () => {

    const [tech, settech] = useState(null)
    const [StudentData, setstudentData] = useState(null)

    const handleClick = (value) => {
        console.log(value)
        if (tech == null)
            settech(value)
        else if (value && value !== tech) {
            settech(value)
        }
        else {
            settech(null)
        }
    }
  
    const datalength=data.length-1;
    console.log(datalength)

    const handleyearClick = (year) => {
        console.log()
        console.log("year", tech + year)
        setstudentData(tech+year)
    }
    return (
        <>
            <h1 className='text-[35px] text-blue-700 font-bold mx-auto w-fit my-[20px]'>Students</h1>
            <div className='border-[1px] border-black w-4/6 flex flex-row mx-auto'>
                <div className='border-[1px] border-black w-3/12 p-[10px]'>
                    {data && data.map((el, index) => {
                        return (
                            <div key={index} className={`border-black border-[1px] border-b-${index===datalength?"[1px]":"0"} rounded-${index==="0"&&"md"} rounded-b-${(index===datalength)&&"lg"}`}>
                                <button className={`border-[1px] ${el?.name === tech && "bg-blue-800 border-blue-300 border-[5px]"}  w-full mx-auto flex items-center justify-between p-[5px] ${el?.name !== tech && "hover:bg-blue-200"}`} onClick={() => handleClick(el?.name)}>
                                    <h1 className={`text-blue-800 ${el?.name === tech && "text-white"} font-semibold`}>{el.name}</h1>
                                    {el?.name === tech ? <IoIosArrowDown className={`text-${el?.name === tech ? "white" : "blue-800"} font-semibold `} /> : <IoIosArrowForward className={`text-${el?.name === tech ? "white" : "blue-800"} font-semibold`} />}
                                </button>
                                {el?.name === tech && el.year.map((el, index) => {
                                    return (
                                        <button key={index} onClick={() => handleyearClick(el.name)} className='flex flex-col'>
                                            <h1 className='text-blue-600'>{el.name}</h1>
                                        </button>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='border-[1px] border-black w-9/12'>
                    <h1>{StudentData?StudentData:"No Data"}</h1>
                </div>
            </div>
        </>
    )
}

export default Student