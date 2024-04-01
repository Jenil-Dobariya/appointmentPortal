import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentPage from "./Components/StudentPage/StudentPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/student/:username" Component={StudentPage} />
          {/* <Route path="/counsellor" Component={}/> */}
          {/* <Route path="/admin" Component={}/> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
