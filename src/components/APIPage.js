/*global chrome*/
import React, { useState } from 'react'

const APIPage = ({setApiKey, apiKeyAdded, setApiKeyAdded}) => {

    const [apiKeyHere, setApiKeyHere] = useState("");

    const saveAPIKey = () => {
        setApiKey(apiKeyHere);
        localStorage.setItem('apiKey', apiKeyHere);
        setApiKeyAdded(true);
    }

  return (
    <>
        <div className="flex h-full w-full p-10 items-center justify-center">
            <div className="relative right-3">
                <h1 className='font-semibold font-lg'>Enter OpenAI API Key Below:</h1>
                <input onChange={(e) => setApiKeyHere(e.target.value)} className='p-1 border-2 border-gray-600 rounded-md w-[460px]' type="text" placeholder="Enter API Key" />
                <button onClick={() => saveAPIKey()} className='p-1 relative left-2 bg-green-300 text-green-600 font-semibold rounded-md border border-green-600 border-2'>Done!</button>
                <h1 className='relative top-2'>API Key Status: <span className={apiKeyAdded === true ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>{apiKeyAdded === true ? 'Added!' : 'Not Added'}</span> </h1>
            </div>
        </div>
    </>
  )
}

export default APIPage