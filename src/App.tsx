import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PostTable from "./Pages/Report";
import DashboardLayout from "./components/Layout";
import Loader from "./components/UI/Loader";

function App() {
  return (
    <div className=" w-full">
      <Router>
        <Loader />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="report" element={<PostTable />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
