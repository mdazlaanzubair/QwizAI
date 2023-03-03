import AppRoutes from "./routing/AppRoutes";
import { useAppContext } from "./utilities/context/app/AppContext";

function App() {
  const { theme } = useAppContext();
  return (
    <div
      className="App relative bottom-0 top-0 max-h-full max-w-full font-default pt-5"
      data-theme={theme}
    >
      <AppRoutes />
    </div>
  );
}

export default App;
