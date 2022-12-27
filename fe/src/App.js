import "./index.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import RequireAuth from "./components/RequireAuth";
import TicketDetails from "./components/ticket-details";
import TicketPage from "./components/TicketPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/ticket"
          element={
            <RequireAuth>
              <TicketPage />
            </RequireAuth>
          }
        />
        <Route exact path="/" element={<Navigate replace to="/ticket" />} />
        <Route
          exact
          path="/ticket/:id"
          element={
            <RequireAuth>
              <TicketDetails />
            </RequireAuth>
          }
        />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
