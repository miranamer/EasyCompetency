/*global chrome*/
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Experiences = ({ experiences, setCurrentPage, setExperiences }) => {

  const removeMe = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
    localStorage.setItem('experiences', JSON.stringify(experiences.filter((_, i) => i !== index)));
    
  }

  

  return (
    <>
      <div className="flex h-full w-full p-10 overflow-auto text-white font-semibold relative">
        {JSON.parse(localStorage.getItem('experiences')).length > 0 ? <div className="flex flex-col gap-10 m-10">
          {experiences.map((experience, index) => (
            <div key={index} className="p-2 overflow-auto min-w-[400px] min-h-[150px] max-h-[200px] bg-gray-600 relative">
              <div className="absolute top-2 right-2">
                <p onClick={() => removeMe(index)} className="text-red-300 hover:cursor-pointer">
                  <AiOutlineClose />
                </p>
              </div>
              {experience}
            </div>
          ))}
        </div> : <h1 className="text-2xl font-bold text-gray-400 relative bottom-3">Add An Experience</h1>}
        <button
          onClick={() => setCurrentPage("addExperiencePage")}
          className="absolute top-5 right-5 w-[100px] h-[40px] bg-green-400 text-green-700 text-lg font-semibold border-green-700 border-[2px] rounded-md"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Experiences;
