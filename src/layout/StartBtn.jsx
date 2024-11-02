import AppIcon from "./AppIcon";

export default function kiStartBtn({
  showStartBox,
  setShowStartBox,
  setShowSearchBox,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {showStartBox && <StartBtnBox />}
      <AppIcon
        onClick={() => {
          setShowStartBox(!showStartBox);
          setShowSearchBox((prev) => {
            if (prev === true) {
              !prev;
            } else {
              prev;
            }
          });
        }}
      >
        😀
      </AppIcon>
    </div>
  );
}

function StartBtnBox() {
  return <div className="startbtnbox">Start Box</div>;
}
