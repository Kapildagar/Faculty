import React, { useState } from 'react'
import { data } from './utilis/data'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios"
import { RxAvatar } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { TiSortNumerically } from "react-icons/ti";
const Student = () => {

    const [tech, settech] = useState(null)
    const [StudentData, setstudentData] = useState([])



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

    const datalength = data.length - 1;
    console.log(datalength)

    const handleyearClick = async (year, course, branch) => {
        console.log()
        console.log("year", year + course + branch)
        const res = await axios.get(`http://localhost:5000/api/student/studentlist?studentyear=${year}&course=${course}&branch=${branch}`)
        console.log(res)
        setstudentData(res.data.data)
    }

    console.log(StudentData.length)
    return (
        <>
            <h1 className='text-[35px] text-blue-700 font-bold mx-auto w-fit my-[20px]'>Students</h1>
            <div className='border-[1px] border-black w-4/6 flex flex-row mx-auto'>
                <div className='border-[1px] border-black w-3/12 p-[10px]'>
                    {data && data.map((el, index) => {
                        return (
                            <div key={index} className={`border-black border-[1px] border-b-${index === datalength ? "[1px]" : "0"} rounded-${index === "0" && "md"} rounded-b-${(index === datalength) && "lg"}`}>
                                <button className={`border-[1px] ${el?.name === tech && "bg-blue-800 border-blue-300 border-[5px]"}  w-full mx-auto flex items-center justify-between p-[5px] ${el?.name !== tech && "hover:bg-blue-200"}`} onClick={() => handleClick(el?.name)}>
                                    <h1 className={`text-blue-800 ${el?.name === tech && "text-white"} font-semibold`}>{el.name}</h1>
                                    {el?.name === tech ? <IoIosArrowDown className={`text-${el?.name === tech ? "white" : "blue-800"} font-semibold `} /> : <IoIosArrowForward className={`text-${el?.name === tech ? "white" : "blue-800"} font-semibold`} />}
                                </button>
                                {el?.name === tech && el.year.map((eldata, index) => {
                                    return (
                                        <button key={index} onClick={() => handleyearClick(eldata.year, el.branch, el.course)} className='flex flex-col'>
                                            <h1 className='text-blue-600'>{eldata.name}</h1>
                                        </button>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className={`border-[1px] border-black w-9/12 sm:h-${StudentData.length > 0&&"[400px]"} overflow-y-${StudentData.length > 0&&"scroll````"}`}>
                    {/* <h1>{StudentData?StudentData:"No Data"}</h1> */}
                    <div>
                        <h1 className='text-[30px] text-blue-600 w-fit mx-auto font-bold'>Student Data</h1>
                        {StudentData.length > 0 ?
                            <div>
                                {StudentData && StudentData.map((el, ind) => {
                                    return (
                                        <div key={ind} className='flex flex-col  border-[1px]  border-black  my-[10px] w-[250px] bg-gray-300 mx-auto p-[10px]'>
                                            {/* <div className='flex flex-row gap-[10px] justify-between items-center'> */}
                                                <div className='flex flex-row items-center justify-start gap-1 '>
                                                <RxAvatar className='text-[25px] text-blue-500 ' />
                                                    <h1 className='text-[25px] text-blue-500'>{el?.name}</h1>
                                                </div>
                                                <div className='flex flex-row items-center justify-start gap-1'>
                                                    <MdEmail className='text-[20px] text-blue-500' />
                                                    <h1>{el?.email}</h1>
                                                </div>
                                                <div className='flex flex-row items-center justify-start gap-1'>
                                                    <TiSortNumerically className='text-[20px] text-blue-500' />
                                                    <h1>{el?.rollno}</h1>
                                                </div>
                                            {/* </div> */}
                                        </div>
                                    )
                                })}
                            </div> :
                            <h1 className='text-[20px] w-fit mx-auto font-serif text-blue-400 '>NO DATA</h1>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Student