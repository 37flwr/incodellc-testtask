// import logo from './logo.svg';
import "./App.scss";
import AppRoutes from "./routes/publicRoutes";
import ErrorFallback from "./fallbacks/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./fallbacks/Loading";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
