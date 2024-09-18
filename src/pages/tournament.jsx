import { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Tournament = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = (index) => {
    if (index <= currentStep || completedSteps.includes(index - 1)) {
      setCurrentStep(index);
    }
  };

  const steps = [
    {
      title: "Instructions",
      content: (
        <>
          <div className="flex flex-col items-start justify-start sm-custom:items-start">
            <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
              Instructions -
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed text-start">
              Excited to host your very own cricket tournament? Select formats,
              manage teams, define rules, create detailed schedules — get it all
              done in one place with our tournament organizer.
            </p>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed text-start">
              Ready to dive in? Let’s begin by setting up the foundational
              details of your tournament. Just follow the guided steps to
              organise the tournament.
            </p>
            <div className="flex justify-center items-center w-[100%]">
              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition-all duration-200"
                onClick={() => handleNext()}
              >
                <span className="flex justify-center items-center">
                  Get Started <FiArrowRight className="inline ml-2" />
                </span>
              </button>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Select Match Format",
      content: (
        <>
          <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Select Tournament Format -
          </h2>

          <p className="text-white mt-2 mb-4">
            Choose the format that suits your tournament. Learn more about
            formats by hovering over the options.
          </p>
          <select className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Format</option>
            <option
              value="knockout"
              title="Single elimination, where teams are eliminated after one loss."
            >
              One Day
            </option>
            <option
              value="roundrobin"
              title="Every team plays every other team."
            >
              T20i
            </option>
            <option
              value="hybrid"
              title="Combination of knockout and round-robin formats."
            >
              Test Match
            </option>
          </select>
        </>
      ),
    },
    {
      title: "Add Team(s) Details",
      content: (
        <>
          <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Add Team Details -
          </h2>
          <p className="text-white mt-2 mb-4">
            Provide team names and captains. You can add up to 16 teams.
          </p>
          <input
            type="text"
            placeholder="Team Name"
            className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Captain Name"
            className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="mt-4 text-blue-600 underline">
            + Add Another Team
          </button>
        </>
      ),
    },
    {
      title: "Set Match Rules",
      content: (
        <>
          <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Match Rules -
          </h2>
          <p className="text-white mt-2 mb-4">
            Set basic match rules like overs, umpire details, and ball type.
          </p>
          <input
            type="number"
            placeholder="Number of Overs (e.g., 20)"
            className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Ball Type (e.g., Tennis, Leather)"
            className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </>
      ),
    },
    {
      title: "Schedule Matches",
      content: (
        <>
          <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Schedule Matches -
          </h2>
          <p className="text-white mt-2 mb-4">
            Select the date and time for each match. You can add multiple
            matches here.
          </p>
          <input
            type="datetime-local"
            className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="mt-4 text-blue-600 underline">
            + Add Another Match
          </button>
        </>
      ),
    },
    {
      title: "Review and Submit",
      content: (
        <>
          <h2 className="text-xl sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Review Your Tournament Details -
          </h2>

          <p className="text-white mt-2 leading-relaxed">
            All the details will be displayed here for final review.
            Double-check your tournament info before submitting.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-500 transition-all duration-200"
            onClick={() => alert("Tournament Submitted!")}
          >
            Submit Tournament
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center bg-dashboard-bg bg-cover bg-center">
      <div className="bg-white overflow-hidden bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-black-shadow h-[95%] w-[80%] sm-custom:w-[95%] sm-custom:h-[98%] flex flex-col justify-start items-center border border-white/40">
        <div className="flex w-[100%] px-10 m-6 sm-custom:justify-center sm-custom:items-center">
          <h1
            className="text-gray-200 text-lg font-semibold tracking-wide
               drop-shadow-lg shadow-white-900 mb- sm-custom:text-lg sm-custom:mb-2"
          >
            <span className="flex justify-center items-center">
              <Link to="/" className="flex items-center">
                <FiArrowLeft className="inline mr-2" />
              </Link>
              Complete the Following Steps
            </span>
          </h1>
        </div>
        <div className="flex justify-center my-[1.5rem] sm-custom:my-[1rem] mx-[5rem] sm-custom:mx-[1rem]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={
                "flex-1 text-center font-semibold mb-4 sm-custom:mb-2 "
              }
              onClick={() => handleStepClick(index)}
            >
              <div
                className={`w-16 h-16 sm-custom:h-8 sm-custom:w-8 mx-auto sm-custom:mx-3 rounded-full flex items-center justify-center cursor-pointer text-lg shadow-black-shadow
                  ${
                    index < currentStep || completedSteps.includes(index)
                      ? "bg-blue-600 text-white"
                      : index === currentStep
                      ? "bg-gray-300 text-blue-600"
                      : "bg-gray-300 text-gray-700"
                  }
                  ${
                    index > Math.max(...completedSteps, -1) + 1
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                onClick={
                  index <= Math.max(...completedSteps, -1) + 1
                    ? () => handleStepClick(index)
                    : null
                }
              >
                {completedSteps.includes(index) ? <FiCheckCircle /> : index + 1}
              </div>
              <p
                className={`mt-1 font-semibold p-5 sm-custom:p-1 sm-custom:text-[0.5rem] ${
                  index < currentStep || completedSteps.includes(index)
                    ? "text-blue-600"
                    : "text-white"
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div
          className="bg-white overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-lg 
        rounded-xl w-[85%] justify-start p-6 overflow-y-auto no-scrollbar shadow-black-shadow"
        >
          {steps[currentStep].content}

          <div className="mt-6 flex justify-end w-[100%] gap-4 text-md">
            {currentStep > 0 && (
              <button
                className="px-3 py-2 bg-black text-white rounded-3xl hover:bg-gray-900 transition-all duration-200"
                onClick={handlePrevious}
              >
                <FiArrowLeft className="inline mr-2" /> Previous
              </button>
            )}

            {currentStep !== 0 && currentStep < steps.length - 1 ? (
              <button
                className="px-3 py-2 bg-white text-black rounded-3xl hover:bg-gray-300 transition-all duration-200"
                onClick={handleNext}
              >
                Next <FiArrowRight className="inline ml-2" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
