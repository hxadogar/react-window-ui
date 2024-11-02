import AppIcon from "./AppIcon";

export default function SearchBtn({
  showSearchBox,
  setShowSearchBox,
  setShowStartBox,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {showSearchBox && <SearchBox />}
      <AppIcon
        onClick={() => {
          setShowSearchBox(!showSearchBox);
          setShowStartBox((prev) => {
            if (prev === true) {
              !prev;
            } else {
              prev;
            }
          });
        }}
      >
        🔎
      </AppIcon>
    </div>
  );
}

function SearchBox() {
  return <div className="startbtnbox">Search Box</div>;
}
