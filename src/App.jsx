import { useState } from "react";
import Desktop from "./layout/Desktop";
import Taskbar from "./layout/Taskbar";

export default function App() {
  const [showStartBox, setShowStartBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShowStartBox(false);
          setShowSearchBox(false);
        }}
      >
        <Desktop />
      </div>
      <Taskbar
        showStartBox={showStartBox}
        setShowStartBox={setShowStartBox}
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
    </>
  );
}
