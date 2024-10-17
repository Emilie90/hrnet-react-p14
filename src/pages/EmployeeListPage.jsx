import React from "react";
import { Link } from "react-router-dom";

import EmployeeList from "../composants/EmployeeList";

const EmployeeListPage = () => {
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <EmployeeList />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeListPage;
