import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/Layout";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ overflow: "hidden" }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
