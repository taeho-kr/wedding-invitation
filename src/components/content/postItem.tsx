import type { Post, User } from "@/types/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Lottie from "@/components/ui/lottie";
import { users } from "@/constants/users";

const HeartLottieURL = "/lottie/heart.lottie";

export default function PostItem({
  id,
  userID,
  date,
  content,
  description,
  likes,
}: Post) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState<boolean>(false);
  const [dayDiff, setDayDiff] = useState({
    value: 0,
    unit: "day",
  });
  const [playLottie, setPlayLottie] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = users.find((user) => user.id === userID);
    if (user) setUser(user);
  }, [user]);

  useEffect(() => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diff = Math.abs(date2.getTime() - date1.getTime());
    const diffSeconds = Math.ceil(diff / 1000);
    const diffMinutes = Math.ceil(diff / (1000 * 60));
    const diffHours = Math.ceil(diff / (1000 * 3600));
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    const diffWeeks = Math.ceil(diffDays / 7);
    const diffMonths = Math.ceil(diffDays / 30);
    const diffYears = Math.ceil(diffDays / 365);

    if (diffSeconds < 60) {
      setDayDiff({ value: diffSeconds, unit: "second" });
    } else if (diffMinutes < 60) {
      setDayDiff({ value: diffMinutes, unit: "minute" });
    } else if (diffHours < 24) {
      setDayDiff({ value: diffHours, unit: "hour" });
    } else if (diffDays < 7) {
      setDayDiff({ value: diffDays, unit: "day" });
    } else if (diffWeeks < 4) {
      setDayDiff({ value: diffWeeks, unit: "week" });
    } else if (diffMonths < 12) {
      setDayDiff({ value: diffMonths, unit: "month" });
    } else {
      setDayDiff({ value: diffYears, unit: "year" });
    }
  }, [date]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getDateString = () => {
    switch (dayDiff.unit) {
      case "second":
        return `${dayDiff.value}초 전`;
      case "minute":
        return `${dayDiff.value}분 전`;
      case "hour":
        return `${dayDiff.value}시간 전`;
      case "day":
        return `${dayDiff.value}일 전`;
      case "week":
        return `${dayDiff.value}주 전`;
      case "month":
        return `${dayDiff.value}개월 전`;
      case "year":
        return `${dayDiff.value}년 전`;
    }
  };

  const handleClickHeart = () => {
    console.log(id);
    if (!like) setPlayLottie(true);
    setLike(!like);
  };

  const handleDoubleClickImage = () => {
    if (!like) setPlayLottie(true);
    setLike(!like);
  };

  const handleClickUser = () => {
    if (user) {
      window.open(user.profile, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-start">
      {!firstImageLoaded ? (
        <>
          <img
            src={content[0]}
            onLoad={() => setFirstImageLoaded(true)}
            className="h-0 w-0"
          />
          <div className="flex flex-row gap-2 items-center p-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>
                <div className="w-full h-full bg-gray-500 animate-pulse" />
              </AvatarFallback>
            </Avatar>
            <div className="w-25 h-4 bg-gray-500 animate-pulse rounded-sm" />
          </div>
          <div className="w-[100vw] h-[100vw] max-w-[720px] max-h-[720px] bg-gray-500 animate-pulse" />
          <div className="ml-3 w-[80%] h-4 bg-gray-500 animate-pulse rounded-sm mt-2" />
          <div className="ml-3 w-[80%] h-4 bg-gray-500 animate-pulse rounded-sm mt-2" />
        </>
      ) : (
        <>
          <div
            className={cn(
              "flex flex-row items-center justify-center px-2 py-3",
              !firstImageLoaded && "hidden"
            )}
            onClick={handleClickUser}
          >
            <Avatar className="mr-3 h-[32px] w-[32px]">
              <AvatarImage src={user?.profileImage} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <span className="font-semibold mr-1">{user?.name}</span>
            <BadgeCheck
              color="black"
              fill="var(--focused)"
              className="w-4 h-4"
            />
          </div>
          <div className="relative w-full h-full">
            {playLottie && (
              <Lottie
                src={HeartLottieURL}
                autoplay={true}
                loop={false}
                speed={1.5}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"
                )}
                onComplete={() => setPlayLottie(false)}
                style={{
                  display: playLottie ? "block" : "none",
                }}
              />
            )}
            {content.length > 1 ? (
              <Carousel className="relative w-full" setApi={setApi}>
                <CarouselContent>
                  {content.map((content, index) => {
                    return (
                      <CarouselItem key={index}>
                        <div className="w-full h-full max-w-full max-h-full flex items-center justify-center bg-white">
                          <img
                            src={content}
                            onDoubleClick={handleDoubleClickImage}
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {count > 1 && (
                  <div className="absolute top-4 right-4 border rounded-full text-xs bg-[var(--background-tp)] px-2 py-0.5">
                    {current}/{count}
                  </div>
                )}
              </Carousel>
            ) : (
              <img
                src={content[0]}
                className="w-full h-full max-w-full max-h-full"
                onDoubleClick={handleDoubleClickImage}
              />
            )}
          </div>
          {count > 1 && (
            <div className="w-full flex flex-row gap-1 items-center justify-center p-3">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-muted h-[4px] w-[4px] rounded-full",
                    "transition-all duration-300 ease-in-out",
                    current === index + 1 ? "bg-[var(--focused)]" : "bg-muted"
                  )}
                  style={{
                    transform: `scale(${current === index + 1 ? 1.3 : 1})`,
                  }}
                />
              ))}
            </div>
          )}
          <div className="flex flex-col gap-1 px-2 text-start mt-2">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2">
                <Heart
                  onClick={handleClickHeart}
                  color={like ? "red" : "white"}
                  fill={like ? "red" : "transparent"}
                />
                <span>{likes.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-row gap-[4px]">
              <strong onClick={handleClickUser}>{user?.name}</strong>
              <span>{description}</span>
            </div>
            <Typography variant="caption1">{getDateString()}</Typography>
          </div>
        </>
      )}
    </div>
  );
}
