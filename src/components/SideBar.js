import React from 'react'

const SideBar = ({setCurrentPage}) => {
  return (
    <div className="h-full w-[200px] bg-green-400">
        <div className=" pt-[20px] font-bold">
            <h1 className=" text-green-700 text-2xl text-center">Easy</h1>
            <h1 className=" text-green-700 text-2xl text-center">Competency</h1>
        </div>
        <div className=" text-white text-xl flex flex-col mt-[80%]">
            <button onClick={() => setCurrentPage("generatePage")} className="m-5 text-center font-semibold hover:underline">Generate Answer</button>
            <button onClick={() => setCurrentPage("experiencesPage")} className="m-5 text-center pr-3 font-semibold hover:underline">My Experiences</button>
        </div>
    </div>
  )
}

export default SideBar