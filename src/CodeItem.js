import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { Security } from "@mui/icons-material";

const CodeItem = ({ testName, code }) => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 60
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setCountdown(60);
    }
  }, [countdown]);

  const timerProgress = (countdown / 60) * 100;

  return (
    <div className="code-container">
      <div className="d-flex align-items-start">
        <Security className="codeIcon"/>
        <div>
          <h5 className="codeName">{testName}</h5>
          <h6 className="code">{code}</h6>
        </div>
      </div>
      <div className="timer-container">
        <CircularProgress variant="determinate" value={timerProgress} />
        <h6 className="time">{countdown}s</h6>
      </div>
    </div>
  );
};

export default CodeItem;
