import AppIcon from "./AppIcon";
import SearchBtn from "./SearchBtn";

export default function PinnedApps({ showSearchBox, setShowSearchBox,setShowStartBox }) {
  return (
    <>
      <SearchBtn
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
        setShowStartBox={setShowStartBox}
      />
      <AppIcon>📁</AppIcon>
      <AppIcon>📆</AppIcon>
      <AppIcon>📧</AppIcon>
      <AppIcon>📷</AppIcon>
    </>
  );
}
