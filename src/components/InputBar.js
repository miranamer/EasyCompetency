import React from 'react'

const InputBar = ({text, setState}) => {
  return (
    <>
        <div className="flex-col">
            <h1 className='text-lg text-gray-800 font-medium'>{text}</h1>
            <input onChange={(e) => setState(e.target.value)} type="text" placeholder={`Enter ${text}`} className='h-[30px] text-center' />
        </div>
    </>
  )
}

export default InputBar