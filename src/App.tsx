import { Route, Routes } from "react-router";
import "./App.css";
import { SNB } from "./layouts/SNB";
import { routes } from "./routes";
import { Toaster } from "@/components/ui/sonner";
import { useQuery } from "@tanstack/react-query";
import { fetchLikes } from "./apis/like";
import { useEffect } from "react";
import useLikeStore from "./store/likeStore";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["likes"],
    queryFn: fetchLikes,
  });

  const { setLikes, setIsLoading } = useLikeStore();

  useEffect(() => {
    if (data) {
      const newLikes = data.reduce((acc: Record<number, number>, like) => {
        acc[Number(like.postId)] = like.count;
        return acc;
      }, {});
      setLikes(newLikes);
      setIsLoading(false);
    }
  }, [data, isLoading]);

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
