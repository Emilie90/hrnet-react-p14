import React, { createContext, useState } from "react";

// Créer le contexte
const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  // Récupérer les employés stockés dans sessionStorage au chargement initial
  const storedEmployees = sessionStorage.getItem("employees");
  const [employees, setEmployees] = useState(
    storedEmployees ? JSON.parse(storedEmployees) : []
  );

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      // Mettre à jour sessionStorage
      sessionStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  // Nettoyer sessionStorage à la fermeture de session (si nécessaire)
  // sessionStorage.clear();

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
