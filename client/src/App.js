// import logo from './logo.svg';
import "./App.scss";
import AppRoutes from "./routes/publicRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
