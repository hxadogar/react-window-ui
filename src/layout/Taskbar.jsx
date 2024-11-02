import PinnedApps from "./PinnedApps";
import StartBtn from "./StartBtn";
import Utilies from "./Utilies";

export default function Taskbar({
  showStartBox,
  setShowStartBox,
  showSearchBox,
  setShowSearchBox
}) {


  return (
    <div className="taskbar">
      <div className="left">
        <StartBtn
          showStartBox={showStartBox}
          setShowStartBox={setShowStartBox}
          setShowSearchBox={setShowSearchBox}
        />
        <PinnedApps
          showSearchBox={showSearchBox}
          setShowSearchBox={setShowSearchBox}
          setShowStartBox={setShowStartBox}
        />
      </div>
      <Utilies />
    </div>
  );
}
