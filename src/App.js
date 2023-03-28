import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Banner/Banner.jsx";
import Counter from "./Counter/Counter";
import PuntoButton from "./PuntoButton/PuntoButton";
import Timer from "./Timer/Timer";
import TimerButton from "./TimerButton/TimerButton";
import LaParolaGiustaImage from "./Pictures/LaParolaGiusta.jpg";

function App() {
  const totalTime = 20;
  const [numPoints, setNumPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [timeRun, setTimeRun] = useState(true);
  const [parolaAttuale, setParolaAttuale] = useState("Ciao");

  useEffect(() => {
    setTimeout(() => {
      if (timeRun) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
  }, [timeLeft, timeRun]);

  const parole = [];
  parole.push("insomma", "puo darsi", "senz-altro", "patetico", "volerci");

  const changeWord = () => {
    setParolaAttuale(parole[numPoints]);
  };

  const increment = (value) => {
    setNumPoints(numPoints + 1);
    changeWord();
  };

  const resetTimer = () => {
    setTimeLeft(totalTime);
  };

  if (timeLeft > -1) {
    return (
      <>
        <Banner />
        <div className="punto-line">
          <img src={LaParolaGiustaImage} alt="" className="book-image"></img>
          <div className="game-box">
            <div className="timer-box">
              <Timer currentTime={timeLeft} />
              <TimerButton
                timeRun={timeRun}
                setTimeRun={setTimeRun}
                resetTimer={resetTimer}
              />
            </div>
            <p className="word-box">{parolaAttuale}</p>
          </div>
          <div className="points-box">
            <PuntoButton incrementValue={increment} />
            <Counter numPoints={numPoints} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="all-done">
        <div>Final Score: {numPoints} Points </div>
      </div>
    );
  }
}

export default App;
