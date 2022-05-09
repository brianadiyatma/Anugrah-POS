import SignIn from "./Pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Inventaris from "./Pages/Inventaris/Inventaris";
import Navbar from "./Components/Navbar/Navbar";
import Account from "./Pages/Account/Account";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<Dashboard />} />
        <Route path="account" index element={<Account />} />
        <Route path="inventaris" element={<Inventaris />} />
      </Route>
    </Routes>
  );
}

export default App;
