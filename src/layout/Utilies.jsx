import NotificationMainIcon from "./NotificationMainIcon";
import TimeAndDate from "./TimeAndDate";

export default function Utilies() {
  return (
    <div className="utilies">
      <div className="hidden_apps">🔼</div>
      <div className="batter__network__sound">
        <NotificationMainIcon>🔋</NotificationMainIcon>
        <NotificationMainIcon>📶</NotificationMainIcon>
        <NotificationMainIcon>🔊</NotificationMainIcon>
      </div>
      <TimeAndDate />
      <div className="notification">🔔</div>
      <div className="show__desktop"></div>
    </div>
  )
}
