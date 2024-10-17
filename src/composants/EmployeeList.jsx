import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import DataTable from "react-data-table-component";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  // Vérifie les employés dans la console
  console.log("Employees in context: ", employees);
  // Définir les colonnes du tableau
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
    },
  ];

  return (
    <div className="employee-table-container">
      <DataTable
        title="Current Employees"
        columns={columns}
        data={employees}
        pagination
      />
    </div>
  );
};

export default EmployeeList;
