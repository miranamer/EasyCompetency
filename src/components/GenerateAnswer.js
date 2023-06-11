import { React, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { FiCopy } from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const GenerateAnswer = ({
  setCompany,
  setRole,
  setQuestion,
  InputBar,
  company,
  role,
  question,
  experiences,
}) => {
  const configuration = new Configuration({
    apiKey: "key",
  });

  const openai = new OpenAIApi(configuration);

  const [generatedResponse, setGeneratedResponse] = useState("");

  const generateResponse = async () => {
    setIsLoading(true);
    var promptUse = `Company I Am Applying To: ${company} | Role I Am Applying For: ${role} | List Of Experiences I Have: ${experiences} | Give me the best possible competency based answer for this question for this role at this company based on my experiences listed: ${question}`;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: promptUse }],
      max_tokens: 2048,
    });
    //console.log(completion.data.choices[0].message.content);
    setGeneratedResponse(completion.data.choices[0].message.content);
    setIsLoading(false);
  };

  const copyText = () => {
    if (generatedResponse !== "") {
      navigator.clipboard.writeText(generatedResponse);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="h-full w-full p-10">
        <div className="flex flex-col gap-5">
          <div className="flex justify-around pr-10 relative right-5">
            <InputBar text={"Company"} setState={setCompany} />
            <div className="relative left-10">
              <InputBar text={"Role"} setState={setRole} />
            </div>
          </div>

          <div className="flex justify-around pt-10">
            <div className="flex items-center justify-center gap-5">
              <div className="flex-col">
                <h1 className="text-lg text-gray-800 font-medium">Question</h1>
                <input
                  type="text"
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={`Enter Question`}
                  className=" w-[400px] h-[40px] text-center"
                />
              </div>

              <div className="flex relative top-[14px]">
                <button
                  onClick={() => generateResponse()}
                  className="w-[100px] h-[40px] bg-blue-400 text-blue-700 text-lg font-semibold border-blue-700 border-[2px] rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-around pt-10 relative right-5">
            <div className="flex-col">
              <h1 className="text-lg text-gray-800 font-medium">
                Generated Answer
              </h1>
              <div className="w-[490px] h-[150px] text-center text-gray-200 p-2 bg-gray-700 overflow-auto relative">
                <div className="absolute right-2 top-2">
                  <p
                    onClick={() => copyText()}
                    className={
                      generatedResponse !== ""
                        ? "text-green-300  hover:cursor-pointer"
                        : "text-red-300 hover:cursor-not-allowed"
                    }
                  >
                    <FiCopy />
                  </p>
                </div>
                <div className="relative top-10">
                  {isLoading ? <CircularProgress /> : null}
                </div>
                <div className="">{generatedResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateAnswer;
