import { Home, MapPinned } from "lucide-react";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import ProfilePage from "./pages/ProfilePage";
import YongeunProfileImage from "@/assets/images/yongeun_profile.jpg";
import TaehoProfileImage from "@/assets/images/taeho_profile.jpg";

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
    title: "Yongeun",
    path: "/profile/flowerphant.studio",
    element: <ProfilePage userID="flowerphant.studio" />,
    icon: (
      <img
        src={YongeunProfileImage}
        alt="Yongeun"
        className="w-7 h-7 rounded-full"
      />
    ),
  },
  {
    title: "Taeho",
    path: "/profile/taeho._.world",
    element: <ProfilePage userID="taeho._.world" />,
    icon: (
      <img
        src={TaehoProfileImage}
        alt="Taeho"
        className="w-7 h-7 rounded-full"
      />
    ),
  },
];
