import "./App.css";
import HeadAfter from "./Components/common/Header/After";
import HeadBefore from "./Components/common/Header/Before";
import Chat from "./Components/pages/Chat";
import TimeTablePage from "./Components/pages/Schedules/TimeTable";

function App() {
  return (
    <div id="AppWrapper">
      <TimeTablePage></TimeTablePage>
    </div>
  );
}

export default App;
