import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import TransitionsModal from "./components/TransitionsModal";
import JobModal from "./components/JobModal";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="signin" element={<TransitionsModal />} />
        <Route element={<RequireAuth allowedAccount="nth@gmail.com" />}>
          <Route path="jobs/:id" element={<JobModal />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
