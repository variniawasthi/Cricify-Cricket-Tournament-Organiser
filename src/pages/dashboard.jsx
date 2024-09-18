import MatchCards from "../components/MatchCards";
import { cricketMatches } from "../utils/DummyData/cricketMatches";

import SeriesCoverage from "./seriesCoverage";
import NewsFeed from "./newsFeed";

import Navbar from "../components/Navbar";
import SearchBar from "../components/common/SearchBar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import TournamentCards from "../components/TournamentCards";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center text-font-primary h-[100%] w-full bg-dashboard-bg bg-fill bg-center">
      <Navbar />
      <div className="h-1/3 w-[96.3%] flex justify-center items-center p-1">
        <MatchCards cricketMatches={cricketMatches} />
      </div>

      <div className="bg-gray-200 flex-1 w-[100%] rounded-t-3xl">
        <div className="rounded-t-3xl w-[100%] flex flex-row justify-between items-center">
          <Breadcrumbs />
          <SearchBar />
        </div>
        <div className="flex w-[100%] sm-custom:flex-col">
          <div className="flex flex-col flex-1">
            <TournamentCards />
            <SeriesCoverage />
          </div>
          <div className="w-[30%] bg-blue-500">
            <NewsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;