import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Home = lazy(() => import("./pages/Home"));
const Topics = lazy(() => import("./pages/Topics"));
const Topic = lazy(() => import("./pages/Topic"));
const Error = lazy(() => import("./pages/Error"));

const App = () => (




  <Router>
    <ToastContainer />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="subjects" element={<Subjects />} /> */}
          <Route path=":subject/:subjectID" element={<Topics />} />
          <Route path=":subject/:topic/:topicID" element={<Topic />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
