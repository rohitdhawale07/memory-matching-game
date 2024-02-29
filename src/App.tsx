import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import IntroPage1 from "./components/introPages/IntroPage1";
import IntroPage2 from "./components/introPages/IntroPage2";
import IntroPage3 from "./components/introPages/IntroPage3";
import IntroPage4 from "./components/introPages/IntroPage4";
import ActivityPage from "./components/activityPage/ActivityPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage1 />} />
          <Route path="/introPage2" element={<IntroPage2 />} />
          <Route path="/introPage3" element={<IntroPage3 />} />
          <Route path="/introPage4" element={<IntroPage4 />} />
          <Route path="/activityPage" element={<ActivityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
