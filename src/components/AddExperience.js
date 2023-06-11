/*global chrome*/
import {React, useState} from 'react'

const AddExperience = ({experiences, setExperiences, setCurrentPage}) => {
    const [newExperience, setNewExperience] = useState();

    const handleSubmit = () => {
        setExperiences([...experiences, newExperience])
        chrome.storage.local.set({ key: [...experiences, newExperience] }).then(() => {
          console.log("Experiences is set" + experiences);
        });
        setCurrentPage("experiencesPage");
    }

  return (
    <>
    
    <div className="flex h-full w-full p-10 flex-col justify-center items-center gap-10">
        <textarea onChange={(e) => setNewExperience(e.target.value)} type="text" placeholder='Enter Experience' className='w-[420px] h-[200px] text-center'  />
        <button onClick={() => handleSubmit()} className='w-[400px] h-[50px] bg-green-300 text-green-600 font-semibold rounded-md border border-green-600 border-2'>Done!</button>
    </div>
    
    </>
  )
}

export default AddExperience