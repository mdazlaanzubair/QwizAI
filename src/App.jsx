// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ques_Ans from "./pages/application/components/Ques_Ans";
import Dashboard from "./pages/application/Dashboard";
import Home from "./pages/landing/Home";

function App() {
  return (
    <div
      className="App relative bottom-0 top-0 max-h-full max-w-full font-default pt-5"
      data-theme="light"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="qna" element={<Ques_Ans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
