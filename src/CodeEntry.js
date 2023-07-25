import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../src/components/input/Input";

const CodeEntry = ({ onAddTest }) => {
  const [newTestName, setNewTestName] = useState("");
  const history = useNavigate();

  const handleAddTest = () => {
    if (newTestName.trim() !== "") {
      onAddTest(newTestName);
      setNewTestName("");
      history("/");
    }
  };

  return (
    <div>
      <Input
        label="Code Name"
        input={{
          id: "text",
          type: "text",
          placeholder: "Enter Code Name",
          onChange: (e) => setNewTestName(e.target.value),
          value: newTestName,
        }}
      />
      <div className="d-flex justify-content-between align-items-center mt-2">
        <button className="btnClass" onClick={handleAddTest}>
          Add Code
        </button>
        <Link to="/" className="btnClass">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CodeEntry;
