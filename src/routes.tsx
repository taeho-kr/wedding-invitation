import { Home, MapPinned, MessageSquareText } from "lucide-react";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <MainPage />,
    icon: <Home />,
  },
  {
    title: "Map",
    path: "/map",
    element: <MapPage />,
    icon: <MapPinned />,
  },
  {
    title: "Board",
    path: "/board",
    element: <div>Board</div>,
    icon: <MessageSquareText />,
  },
];
