import { routes } from "@/routes";
import { Link, useLocation } from "react-router";

export function SNB() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="sticky bottom-[-1px] h-12 bg-black flex flex-row justify-between items-center">
      {routes.map((route) => (
        <Link
          to={route.path}
          key={route.path}
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: isActive(route.path) ? "white" : "",
            color: isActive(route.path) ? "black" : "",
          }}
        >
          {route.icon}
        </Link>
      ))}
    </footer>
  );
}
