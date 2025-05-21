import { Route, Routes } from "react-router";
import "./App.css";
import { SNB } from "./layouts/SNB";
import { routes } from "./routes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="h-full w-full min-h-[calc(100vh-3rem)]">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </div>
      <SNB />
      <Toaster richColors />
    </div>
  );
}

export default App;
