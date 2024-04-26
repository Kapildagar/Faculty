
import React, {  useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
export const Faculty = () => {

 
    const [clicked,setclicked]=useState(false)
   

    return (
        <>
            <div className='text-[40px] mx-auto w-fit text-blue-800 font-bold'>Faculty</div>
            <div className='w-4/5 bg-blue-800 mx-auto lg:w-3/5 my-[20px]'>
                <div className='text-white text-[25px] font-bold mx-auto w-fit p-[2px] '>Head of Department</div>
            </div>
            <div className='border-[1px] border-gray-200 flex flex-col lg:flex lg:flex-row lg:w-3/5  justify-center mx-auto w-4/5 rounded-md lg:p-[30px] shadow-gray-300 shadow-md'>
                <div className=' mx-auto sm:mx-auto lg:mx-none  lg:w-[2/5] my-[10px]' >
                    <img src='https://www.cse.iitb.ac.in/assets/images/people/faculty/varsha.jpg' className='w-[220px] h-[220px] rounded-lg ' alt='imag' />
                </div>
                <div className='flex flex-col justify-center items-start m-[10px]   lg:w-3/5'>
                    <h1 className='text-[25px] font-bold my-[10px]'>Varsha Apte</h1>
                    <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500 my-[5px]'></div>
                    <div className='my-[10px]'>
                        <h2 className='text-[15px] font-bold text-blue-600 my-[3px]'>Research Interests</h2>
                        <h1 className='text-[15px] my-[3pxx]'>Performance Evaluation of Computer Systems and Networks</h1>
                    </div>
                    <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500'></div>
                    <div className='flex flex-wrap justify-start gap-2 my-[10px]'>
                        <h1 className='flex items-center gap-2'>
                            <MdEmail className='text-blue-600 text-[20px]' />
                            <span> head[at]cse[dot]iitb[dot]ac[dot]in</span>
                        </h1>
                        <h1 className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-blue-600 text-[20px]' />
                            <span> +91 22 2576 7731</span>
                        </h1>
                        <h1 className='flex items-center gap-2'>
                            <FaBuilding className='text-blue-600 text-[20px]' />
                            <span> Head's office, Kanwal Rekhi Building</span>
                        </h1>
                    </div>
                </div>
            </div>
            {/* **********************current Faculty************ */}
            <div className='w-4/5 bg-blue-800 mx-auto lg:w-3/5 my-[20px] '>
                <div className='text-white text-[25px] font-bold mx-auto w-fit p-[2px]'>Current Faculty</div>
            </div>
            <div className='  lg:w-4/5  sm:w-4/5  w-4/5 flex justify-end my-[20px] mx-[0] 	position: relative'>
              {clicked&&<h2 className='text-[13px] 	position: absolute text-blue-600 right-[170px] top-[-10px] bg-white transition-all ease-in-out delay-700'>Search</h2>}
                 <div className={`flex items-center border-[1px] border-${clicked?"blue-700":"black"} justify-end w-[220px] rounded-md`}>
                <input type='text' onFocus={()=>setclicked(true)} onBlur={()=>setclicked(false)} className=' h-[40px] outline-none' placeholder={!clicked?'Search':""} />
                 <button><IoIosSearch className='text-blue-700 text-[30px]' /></button>
                </div>
            </div>
            <div className=' flex flex-col lg:flex lg:flex-row lg:w-4/5  sm:w-4/5 sm:flex sm:flex-row   justify-center mx-auto w-4/5 rounded-md lg:p-[30px]   gap-10 flex-wrap'>
              

                <div className='flex flex-col border-[1px] border-gray-200 sm:w-2/5 lg:w-1/4 p-[30px] rounded-md'>
                    <div className=' mx-auto sm:mx-auto lg:mx-none  lg:w-[2/5] mt-[10px]' >
                        <img src='https://www.cse.iitb.ac.in/assets/images/people/faculty/varsha.jpg' className='w-[220px] h-[220px] rounded-lg ' alt='imag' />
                    </div>
                    <div className='flex flex-col justify-center items-start mb-[10px] text-center '>
                        <h1 className='text-[25px] font-bold mt-[5px] mb-[10px] text-blue-800 text-center mx-auto w-fit'>Varsha Apte</h1>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500 my-[5px]'></div>
                        <div className='my-[10px]'>
                            <h2 className='text-[15px] font-bold text-blue-600 my-[3px]'>Research Interests</h2>
                            <h1 className='text-[15px] my-[3pxx]'>Performance Evaluation of Computer Systems and Networks</h1>
                        </div>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500'></div>
                        <div className='flex flex-wrap justify-center gap-2 my-[10px]  '>
                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <MdEmail className='text-blue-600 text-[20px]' />
                                <span> head[at] cse[dot]iitb [dot]ac[dot]in</span>
                            </h1>

                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <FaBuilding className='text-blue-600 text-[20px]' />
                                <span> Head's office, Kanwal Rekhi Building</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border-[1px] border-gray-200 sm:w-2/5 lg:w-1/4 p-[30px] rounded-md'>
                    <div className=' mx-auto sm:mx-auto lg:mx-none  lg:w-[2/5] mt-[10px]' >
                        <img src='https://www.cse.iitb.ac.in/assets/images/people/faculty/varsha.jpg' className='w-[220px] h-[220px] rounded-lg ' alt='imag' />
                    </div>
                    <div className='flex flex-col justify-center items-start mb-[10px] text-center '>
                        <h1 className='text-[25px] font-bold mt-[5px] mb-[10px] text-blue-800 text-center mx-auto w-fit'>Varsha Apte</h1>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500 my-[5px]'></div>
                        <div className='my-[10px]'>
                            <h2 className='text-[15px] font-bold text-blue-600 my-[3px]'>Research Interests</h2>
                            <h1 className='text-[15px] my-[3pxx]'>Performance Evaluation of Computer Systems and Networks</h1>
                        </div>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500'></div>
                        <div className='flex flex-wrap justify-center gap-2 my-[10px]  '>
                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <MdEmail className='text-blue-600 text-[20px]' />
                                <span> head[at] cse[dot]iitb [dot]ac[dot]in</span>
                            </h1>

                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <FaBuilding className='text-blue-600 text-[20px]' />
                                <span> Head's office, Kanwal Rekhi Building</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border-[1px] border-gray-200 sm:w-2/5 lg:w-1/4 p-[30px] rounded-md'>
                    <div className=' mx-auto sm:mx-auto lg:mx-none  lg:w-[2/5] mt-[10px]' >
                        <img src='https://www.cse.iitb.ac.in/assets/images/people/faculty/varsha.jpg' className='w-[220px] h-[220px] rounded-lg ' alt='imag' />
                    </div>
                    <div className='flex flex-col justify-center items-start mb-[10px] text-center '>
                        <h1 className='text-[25px] font-bold mt-[5px] mb-[10px] text-blue-800 text-center mx-auto w-fit'>Varsha Apte</h1>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500 my-[5px]'></div>
                        <div className='my-[10px]'>
                            <h2 className='text-[15px] font-bold text-blue-600 my-[3px]'>Research Interests</h2>
                            <h1 className='text-[15px] my-[3pxx]'>Performance Evaluation of Computer Systems and Networks</h1>
                        </div>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500'></div>
                        <div className='flex flex-wrap justify-center gap-2 my-[10px]  '>
                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <MdEmail className='text-blue-600 text-[20px]' />
                                <span> head[at] cse[dot]iitb [dot]ac[dot]in</span>
                            </h1>

                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <FaBuilding className='text-blue-600 text-[20px]' />
                                <span> Head's office, Kanwal Rekhi Building</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border-[1px] border-gray-200 sm:w-2/5 lg:w-1/4 p-[30px] rounded-md'>
                    <div className=' mx-auto sm:mx-auto lg:mx-none  lg:w-[2/5] mt-[10px]' >
                        <img src='https://www.cse.iitb.ac.in/assets/images/people/faculty/varsha.jpg' className='w-[220px] h-[220px] rounded-lg ' alt='imag' />
                    </div>
                    <div className='flex flex-col justify-center items-start mb-[10px] text-center '>
                        <h1 className='text-[25px] font-bold mt-[5px] mb-[10px] text-blue-800 text-center mx-auto w-fit'>Varsha Apte</h1>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500 my-[5px]'></div>
                        <div className='my-[10px]'>
                            <h2 className='text-[15px] font-bold text-blue-600 my-[3px]'>Research Interests</h2>
                            <h1 className='text-[15px] my-[3pxx]'>Performance Evaluation of Computer Systems and Networks</h1>
                        </div>
                        <div className='border-[1px] border-blue-700 h-[1px] w-full bg-blue-500'></div>
                        <div className='flex flex-wrap justify-center gap-2 my-[10px]  '>
                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <MdEmail className='text-blue-600 text-[20px]' />
                                <span> head[at] cse[dot]iitb [dot]ac[dot]in</span>
                            </h1>

                            <h1 className='flex  sm:flex sm:flex-col  sm:items-center gap-2 flex-wrap sm:text-center sm:justify-center'>
                                <FaBuilding className='text-blue-600 text-[20px]' />
                                <span> Head's office, Kanwal Rekhi Building</span>
                            </h1>
                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}
