import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import CodeList from "./CodeList";
import CodeEntry from "./CodeEntry";

const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

function Home() {
  const [codes, setCodes] = useState([
    { testName: "Test 1", code: generateRandomCode() },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodes((prevCodes) => {
        return prevCodes.map((code) => ({
          ...code,
          code: generateRandomCode(),
        }));
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAddTest = (newTestName) => {
    const newTestCode = {
      testName: newTestName,
      code: generateRandomCode(),
    };
    setCodes((prevCodes) => [...prevCodes, newTestCode]);
  };

  return (
    <Router>
      <Container maxWidth="sm">
        <h2 className="text-center">MFA codes</h2>
        <Routes>
          <Route path="/" element={<CodeList codes={codes} />} />
          <Route
            path="/add-code"
            element={<CodeEntry onAddTest={handleAddTest} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default Home;
