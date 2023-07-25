import React from "react";
import CodeItem from "./CodeItem";
import { Link } from "react-router-dom";

const CodeList = ({ codes }) => {

  
  return (
    <div>
      {codes.map((code, index) => (
        <CodeItem key={index} testName={code.testName} code={code.code} />
      ))}
      <div className="text-center">
        <Link to="/add-code" className="btnClass">
          Add Code
        </Link>
      </div>
    </div>
  );
};

export default CodeList;






