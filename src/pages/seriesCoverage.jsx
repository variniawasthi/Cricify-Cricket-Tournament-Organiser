import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const SeriesCoverage = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <div>Overview Content</div>;
      case "Matches":
        return <div>Matches Content</div>;
      case "Teams":
        return <div>Teams Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl m-[1rem] p-[2rem] sm-custom:p-[1rem] shadow-md sm-custom:m-[1rem]">
      <h1 className="text-left text-xl font-semibold flex justify-start items-center ">
        Series Coverage{" "}
        <span className="text-lg m-1">
          {" "}
          <FiArrowRight className="inline mr-2" />
        </span>{" "}
      </h1>

      <div className="flex space-x-4 mb-6 border-b">
        <button
          className={`pb-2 ${
            activeTab === "Overview"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`pb-2 ${
            activeTab === "Matches"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Matches")}
        >
          Matches
        </button>
        <button
          className={`pb-2 ${
            activeTab === "Teams"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Teams")}
        >
          Teams
        </button>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default SeriesCoverage;