import React from 'react'

const Search = () => {
  return (
    <div className='  lg:w-4/5  sm:w-4/5  w-4/5 flex justify-end my-[20px] mx-[0] 	position: relative'>
    {clicked&&<h2 className='text-[13px] 	position: absolute text-blue-600 right-[170px] top-[-10px] bg-white transition-all ease-in-out delay-700'>Search</h2>}
       <div className={`flex items-center border-[1px] border-${clicked?"blue-700":"black"} justify-end w-[220px] rounded-md`}>
      <input type='text' onFocus={()=>setclicked(true)} onBlur={()=>setclicked(false)} className=' h-[40px] outline-none' placeholder={!clicked?'Search':""} />
       <button><IoIosSearch className='text-blue-700 text-[30px]' /></button>
      </div>
  </div>
  )
}

export default Search