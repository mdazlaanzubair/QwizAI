// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";

function App() {
  // list of routes
  const routes_list = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <div
      className="App relative bottom-0 top-0 max-h-full max-w-full font-default"
      data-theme="light"
    >
      <BrowserRouter>
        <Routes>
          {routes_list.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} exact />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
