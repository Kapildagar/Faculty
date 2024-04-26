import React, { useState } from 'react'
import { data } from './utilis/data'
const Student = () => {

    const [sideEffect,setsideEffect]=useState({
        btech:false,
        mtech:false
    })

    const handleClick=(value)=>{
            console.log(value)
    } 

    console.log(data)
    return (
        <>
            <h1 className='text-[35px] text-blue-700 font-bold mx-auto w-fit my-[20px]'>Students</h1>


            <div className='border-[1px] border-black w-4/6 flex flex-row mx-auto'>
                <div className='border-[1px] border-black w-1/3'>
                    {data && data.map((el, index) => {
                        return (
                            <button key={index} onClick={()=>handleClick(index)}>
                                {el.name}
                            </button>
                        )
                    })}
                </div>
                <div className='border-[1px] border-black w-2/3'>
                    <h1>datta</h1>
                </div>
            </div>
        </>
    )
}

export default Student