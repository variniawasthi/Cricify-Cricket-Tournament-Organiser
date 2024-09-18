import MatchCards from "../components/MatchCards";
import { cricketMatches } from "../utils/DummyData/cricketMatches";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center text-font-primary h-screen w-full bg-dashboard-bg bg-cover bg-center">
      <Navbar />
      <div className="h-1/3 w-[95.3%] flex justify-center items-center p-1">
        <MatchCards cricketMatches={cricketMatches} />
      </div>

      <div className="bg-background flex-1 w-[100%] rounded-t-3xl">Hiii</div>
    </div>
  );
};

export default Dashboard;
