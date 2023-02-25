// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ques_Ans from "./pages/application/components/Ques_Ans";
import Dashboard from "./pages/application/Dashboard";
import Signup from "./pages/application/Signup";
import Signin from "./pages/application/Signin";
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
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/login" element={<Signin />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact>
            <Route path="qna" element={<Ques_Ans />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
