import React from "react";
import styles from "./Section.module.scss";
const Comment = ({ obj, i, user }) => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [timeInfo, setTimeInfo] = React.useState("sec");

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);

      console.log("Сработала секунда");
    }, 1000);

    const minuteTimer = window.setInterval(() => {
      window.clearInterval(timer);
      setMinutes((prevTime) => prevTime + 1);
      setTimeInfo("minutes");

      console.log("Сработала минута");
    }, 60000);

    const hourTimer = window.setInterval(() => {
      window.clearInterval(minuteTimer);
      setHour((prevTime) => prevTime + 1);
      setTimeInfo("hours");
    }, 360000);

    return () => {
      window.clearInterval(timer, minuteTimer, hourTimer);
    };
  }, []);

  const arr = () => {
    if (seconds >= 60) {
      return minutes;
    }
    if (minutes >= 60) {
      return hour;
    }

    return seconds;
  };

  return (
    <li key={`${i}${obj.text}`}>
      <div className={styles.userName}>
        <div>authorName: {obj.login}</div>
        <div>
          {timeInfo} ago:
          {arr()}
        </div>
      </div>

      <div>+ 0 -</div>

      <img width={20} src={obj.avatar} alt="Аватар" />
      {obj.text}
      {user.email === obj.email && (
        <button>
          <img
            className={styles.clearIcon}
            src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_clear_48px-256.png"
            alt=""
          />
        </button>
      )}
    </li>
  );
};

export default Comment;
