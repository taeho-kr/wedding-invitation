import { cn } from "@/lib/utils";
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
          className={cn(
            "w-full h-full flex items-center justify-center",
            isActive(route.path) && "[&_img]:border-2 [&_img]:border-white",
            isActive(route.path) &&
              "[&_svg]:fill-[var(--background-tp)] [&_svg]:stroke-[var(--focused)]"
          )}
        >
          {route.icon}
        </Link>
      ))}
    </footer>
  );
}
