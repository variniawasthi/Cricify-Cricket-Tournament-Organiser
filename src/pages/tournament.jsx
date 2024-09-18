import { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Tournament = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const [tournamentName, setTournamentName] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [overs, setOvers] = useState("");
  const [ballType, setBallType] = useState("");
  const [scheduledMatches, setScheduledMatches] = useState([{ matchDate: "" }]);

  const [teamsDetails, setTeamsDetails] = useState([]);
  const [currentTeam, setCurrentTeam] = useState({
    teamName: "",
    numberOfPlayers: "",
    country: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const formats = ["T10", "T20", "ODI", "Test Match"];
  const tournamentFormat = ["Round Robin", "Knockout", "League", "Custom"];
  const oversOptions = ["10", "20", "50", "Test Match (Unlimited)"];
  const ballTypes = ["Tennis", "Leather", "Rubber"];
  const countries = [
    "India",
    "Australia",
    "England",
    "South Africa",
    "Pakistan",
    "New Zealand",
  ];

  // ----------

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

  // -----------

  const handleInputChange = (field, value) => {
    setCurrentTeam((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    if (
      currentTeam.teamName &&
      currentTeam.numberOfPlayers &&
      currentTeam.country
    ) {
      if (selectedIndex !== null) {
        // Update existing team
        const updatedTeams = [...teamsDetails];
        updatedTeams[selectedIndex] = currentTeam;
        setTeamsDetails(updatedTeams);
      } else {
        // Add new team
        setTeamsDetails((prev) => [...prev, currentTeam]);
      }
      setCurrentTeam({
        teamName: "",
        numberOfPlayers: "",
        country: "",
      });
      setSelectedIndex(null);
    }
  };

  const handleTeamSelect = (index) => {
    setSelectedIndex(index);
    setCurrentTeam(teamsDetails[index]);
  };

  // -------------

  const handleMatchChange = (index, value) => {
    const updatedMatches = [...scheduledMatches];
    updatedMatches[index].matchDate = value;
    setScheduledMatches(updatedMatches);
  };

  const addMatch = () => {
    setScheduledMatches([...scheduledMatches, { matchDate: "" }]);
  };

  // -------------

  const steps = [
    {
      title: "Instructions",
      content: (
        <>
          <div className="flex flex-col items-start justify-start sm-custom:items-start">
            <h2 className="text-lg sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
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
              organize the tournament.
            </p>
            <div className="my-[2rem] flex justify-center items-center flex-col w-[100%] text-md">
              <h2 className="sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
                Enter Tournament/Series Name
              </h2>
              <input
                type="text"
                maxLength={50}
                placeholder="Enter name here"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-[50%] sm-custom:w-[100%] sm-custom:mt-3 text-md"
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center w-[100%]">
              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition-all duration-200"
                onClick={handleNext}
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
        <div className="text-md">
          <h2 className="text-md sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
            Select Formats -
          </h2>
          <div className="flex justify-center items-center gap-[1rem] w-[100%]">
            <div className="flex-1">
              <p className="text-gray-600 mt-4 leading-relaxed text-start">
                Choose the format of the tournament.
              </p>
              <select
                className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="">Select Format</option>
                {tournamentFormat.map((format, idx) => (
                  <option key={idx} value={format.toLowerCase()}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 mt-4 leading-relaxed text-start">
                Choose the format that suits you Matches.
              </p>
              <select
                className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="">Select Format</option>
                {formats.map((format, idx) => (
                  <option key={idx} value={format.toLowerCase()}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-[2rem]">
            <h2 className="text-md sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
              Match Rules in Tournament-
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-start">
              Set basic match rules like number of overs and ball type.
            </p>

            <input
              type="number"
              placeholder="Number of Overs (e.g., 10, 20, 50)"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              list="overs-list"
              value={overs}
              onChange={(e) => setOvers(e.target.value)}
            />

            <datalist id="overs-list">
              {oversOptions.map((overOption, idx) => (
                <option key={idx} value={overOption}>
                  {overOption}
                </option>
              ))}
            </datalist>

            <input
              type="text"
              placeholder="Ball Type (e.g., Tennis, Leather)"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              list="ball-type-list"
              value={ballType}
              onChange={(e) => setBallType(e.target.value)}
            />
            <datalist id="ball-type-list">
              {ballTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type} Ball
                </option>
              ))}
            </datalist>
          </div>
        </div>
      ),
    },
    {
      title: "Add Team(s) Details",
      content: (
        <>
          <div>
            <h2 className="text-md sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
              Add Teams and their details -
            </h2>

            <div className="flex justify-start items-center text-sm m-[1rem] mb-[0.5rem]">
              {teamsDetails.map((team, index) => (
                <>
                  <div
                    key={index}
                    className="mb-2 flex justify-center items-center flex-col"
                    onClick={() => handleTeamSelect(index)}
                  >
                    <div
                      className={`border rounded-full shadow-sm ${
                        index === selectedIndex ? "bg-blue-600" : "bg-black"
                      } h-[2.8rem] m-[0.5rem] w-[2.8rem] cursor-pointer`}
                    ></div>
                    <p className="text-black text-center text-xs truncate">
                      {team.teamName || "N/A"}
                    </p>
                  </div>
                </>
              ))}
              {/* {teamsDetails.length < 16 && (
                <div>
                  <div className="mb-2 h-[2.8rem] m-[0.5rem] w-[2.8rem] cursor-pointer flex justify-center items-center border rounded-full shadow-sm bg-white text-xl text-black border-zinc-950">
                    +
                  </div>
                  <p className="text-black text-center text-xs truncate">
                    Add Team
                  </p>
                </div>
              )} */}
            </div>

            <form onSubmit={handleTeamSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Team Name"
                  className="mt-2 p-3 text-md border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={currentTeam.teamName}
                  onChange={(e) =>
                    handleInputChange("teamName", e.target.value)
                  }
                />
                <div className="flex justify-center items-center gap-[1rem]">
                  <input
                    type="number"
                    placeholder="Number of Players"
                    className="mt-2 p-3 text-md border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
                    value={currentTeam.numberOfPlayers}
                    onChange={(e) =>
                      handleInputChange("numberOfPlayers", e.target.value)
                    }
                  />
                  <select
                    className="mt-2 p-3 text-md border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
                    value={currentTeam.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-center items-center w-[100%]">
                  <button
                    type="submit"
                    className="mt-4 p-1 px-2 bg-blue-600 text-white rounded-lg w-[20%] sm-custom:w-[90%] hover:bg-blue-500 transition-bg duration-200"
                  >
                    {selectedIndex !== null ? "Update Team" : "Add Team"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      ),
    },
    {
      title: "Schedule Matches",
      content: (
        <>
          <div>
            <h2 className="text-md sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
              Schedule Matches -
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed text-start">
              Select the start and end dates for the tournament and schedule
              each match.
            </p>
            <input
              type="text"
              placeholder="Tournament Name"
              className="mt-2 p-3 border text-md rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
            {scheduledMatches.map((match, index) => (
              <input
                key={index}
                type="datetime-local"
                className="mt-2 p-3 border text-md rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={match.matchDate}
                onChange={(e) => handleMatchChange(index, e.target.value)}
              />
            ))}
            <button className="mt-4 text-blue-600 underline" onClick={addMatch}>
              + Add Another Match
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Review and Submit",
      content: (
        <>
          <div>
            <h2 className="text-md sm-custom:text-[1.5rem] font-bold text-gray-800 text-start">
              Review Your Tournament Details -
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed text-start">
              Review all your tournament details. Make sure everything is
              correct before submitting.
            </p>
            <div className="mt-6 border rounded-lg p-4">
              <h3 className="font-semibold text-lg">Tournament Name:</h3>
              <p>{tournamentName}</p>
              <h3 className="font-semibold text-lg mt-4">Match Format:</h3>
              <p>{selectedFormat}</p>
              <h3 className="font-semibold text-lg mt-4">Teams:</h3>
              {teamsDetails.map((team, index) => (
                <div key={index}>
                  <p>Team Name: {team.teamName}</p>
                  <p>Captain: {team.captainName}</p>
                  <p>Total players in team: {team.numberPlaying}</p>
                  <p>Bench Players: {team.benchPlayers}</p>
                </div>
              ))}
              <h3 className="font-semibold text-lg mt-4">Match Rules:</h3>
              <p>Overs: {overs}</p>
              <p>Ball Type: {ballType}</p>
              <h3 className="font-semibold text-lg mt-4">Scheduled Matches:</h3>
              {scheduledMatches.map((match, index) => (
                <p key={index}>Match Date: {match.matchDate}</p>
              ))}
            </div>
            <button
              className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-500 transition-all duration-200"
              onClick={() => alert("Tournament Submitted!")}
            >
              Submit Tournament
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center bg-dashboard-bg bg-cover bg-center">
      <div className="bg-white overflow-hidden bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-black-shadow h-[95%] w-[80%] sm-custom:w-[98%] sm-custom:h-[98%] flex flex-col justify-start items-center border border-white/40">
        <div className="flex w-[100%] px-10 m-6 sm-custom:px-3 sm-custom:m-3 sm-custom:justify-start sm-custom:items-center">
          <h1
            className="text-gray-200 text-lg font-semibold tracking-wide
               drop-shadow-lg shadow-white-900 sm-custom:text-lg sm-custom:mb-1"
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
                className={`w-16 h-16 sm-custom:h-8 sm-custom:w-8 mx-auto sm-custom:mx-5 rounded-full flex items-center justify-center cursor-pointer text-lg shadow-black-shadow
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
                className={`mt-1 font-semibold p-5 sm-custom:p-1 sm-custom:text-[0.7rem] ${
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
          className="bg-white overflow-hidden flex-1 mb-[2rem] bg-opacity-80 backdrop-filter backdrop-blur-lg 
        rounded-xl w-[85%] sm-custom:w-[95%] sm-custom:mb-[0.5rem] p-6 overflow-y-auto no-scrollbar shadow-black-shadow"
        >
          <div className="flex-1 h-[85%] sm-custom:h-[90%]">{steps[currentStep].content}</div>
          <div className="mt-6 flex justify-end w-[100%] gap-4 text-sm">
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