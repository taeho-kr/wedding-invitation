import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import profiles from "@/data/profile.json";
import type { UserProfile } from "@/types/content";
import { useEffect, useState } from "react";

interface Props {
  userID: string;
}

const NumberPannel = (value: any, label: string) => {
  return (
    <div className="flex flex-col w-full items-start">
      <Typography className="font-regular text-[var(--ring)]">
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </div>
  );
};

export default function ProfilePage({ userID }: Props) {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = (profiles.find((profile) => profile.id === userID) ??
        null) as UserProfile | null;
      if (userData) {
        setUser(userData);
      }
    };

    fetchUser();
  }, [userID]);

  return (
    <div className="flex flex-col w-full h-full pt-3">
      <div
        id="profile-area"
        className="flex flex-col w-full h-full items-start px-5"
      >
        <Typography variant="headline1">{userID}</Typography>
        <div className="flex flex-row gap-4 w-full mt-5">
          <Avatar className="w-[77px] h-[77px]">
            <AvatarImage src={user?.image} />
            <AvatarFallback className="capitalize">
              {userID.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full items-start">
            <Typography>{user?.name}</Typography>
            <div className="flex flex-row w-full mt-2">
              {NumberPannel(user?.iam, "I am")}
              {NumberPannel(user?.mbti, "MBTI")}
              {NumberPannel(user?.birth, "Birth")}
            </div>
          </div>
        </div>
        <Typography className="mt-2 text-[var(--ring)]">{user?.job}</Typography>
        <Typography>{user?.comment}</Typography>
        <div className="w-full flex flex-row gap-2 my-2 items-center justify-center">
          <Button variant="outline" className="border-white flex-1" size="sm">
            축의 보내기
          </Button>
          <Button variant="outline" className="border-white flex-1" size="sm">
            메시지 보내기
          </Button>
        </div>
        <div className="w-full inline-block items-start jusify-start">
          {new Array(9).fill(0).map((_, index) => (
            <img
              key={index}
              src={"https://placehold.co/300x400"}
              className="inline w-1/3 aspect-3/4 obeject-contain p-0.5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
