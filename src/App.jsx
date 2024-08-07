
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";

function App() {
  return (
  
  <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-900 to-cyan-500 h-fit shadow-xl shadow-gray-400">

  <TopButtons/>
  <Inputs/>
  <TimeAndLocation/>
  <TemperatureAndDetails/>
  </div>
  );
}

export default App;
