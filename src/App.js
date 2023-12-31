/*global chrome*/

import SideBar from './components/SideBar';
import InputBar from './components/InputBar';
import GenerateAnswer from './components/GenerateAnswer';
import Experiences from './components/Experiences';
import { useState, useEffect } from 'react';
import AddExperience from './components/AddExperience';
import APIPage from './components/APIPage';
import { FiChrome } from 'react-icons/fi';

function App() {

  const [company, setCompany] = useState();
  const [role, setRole] = useState();
  const [question, setQuestion] = useState();
  
  const [apiKey, setApiKey] = useState("");
  const [apiKeyAdded, setApiKeyAdded] = useState(false);

  const [generatePage, setGeneratePage] = useState(true);

  const [experiences, setExperiences] = useState([]);

  const [currentPage, setCurrentPage] = useState("generatePage");

  useEffect(() => {
    try {
      if(localStorage.getItem("experiences") !== null){
        setExperiences(JSON.parse(localStorage.getItem('experiences')))
      }
      else{
        localStorage.setItem('experiences', JSON.stringify([]));
      }
      if(localStorage.getItem("apiKey") !== null){
        setApiKey(localStorage.getItem("apiKey"));
        setApiKeyAdded(true);
      }
    } catch (e) {
      console.log("Error due to local state");
    }
  }, []);

  return (
    <>

      <div className="flex justify-center items-center h-screen">
        <div className="h-[480px] w-[800px] bg-gray-200 flex">
          
          <SideBar setCurrentPage={setCurrentPage} />
          
          {(() => {
          switch (currentPage) {
            case "generatePage":
              return <GenerateAnswer setCompany={setCompany} setRole={setRole} setQuestion={setQuestion} InputBar={InputBar} company={company} role={role} question={question} experiences={experiences} apiKey={apiKey} apiKeyAdded={apiKeyAdded} />
            case "experiencesPage":
              return <Experiences experiences={experiences} setCurrentPage={setCurrentPage} setExperiences={setExperiences}/>
            case "addExperiencePage":
              return <AddExperience experiences={experiences} setExperiences={setExperiences} setCurrentPage={setCurrentPage} />
            case "APIPage":
              return <APIPage setApiKey={setApiKey} apiKeyAdded={apiKeyAdded} setApiKeyAdded={setApiKeyAdded}  />
            default:
              return <h1>Error!</h1>;
           }
          
          })()}
        
        </div>
      </div>
    
    </>
  );
}

export default App;
