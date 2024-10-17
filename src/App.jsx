import EmployeeFormPage from "./pages/EmployeeFormPage";
import EmployeeListPage from "./pages/EmployeeListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext"; // Ajout du contexte

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeFormPage />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
