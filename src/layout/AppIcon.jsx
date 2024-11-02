export default function AppIcon({ children, onClick }) {
  return <div className="taskbar__app" onClick={onClick}>{children}</div>;
}
