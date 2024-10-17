import React from "react";
import EmployeeForm from "../composants/EmployeeForm";
import { Link } from "react-router-dom";

const EmployeeFormPage = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
      ;
    </div>
  );
};

export default EmployeeFormPage;
