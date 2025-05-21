import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  userID: string;
}

export default function ProfilePage({ userID }: Props) {
  return (
    <div className="flex flex-col w-full h-full">
      <span>{userID}</span>
      <div className="flex flex-row gap-4 w-full mt-5">
        <Avatar className="w-[77px] h-[77px]">
          <AvatarImage src="" />
          <AvatarFallback className="capitalize">
            {userID.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
