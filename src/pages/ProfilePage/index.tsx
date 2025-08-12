import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { POSTS } from "@/constants/contents.ts";
import type { Post, User } from "@/types/content";
import PostList from "@/components/content/postList";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFILES } from "@/constants/profiles";
import { toast } from "sonner";

const ANIMATE_DURATION = 400;

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
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupIndex, setPopupIndex] = useState<number>(0);

  const $list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPopupIndex(0);
    setOpenPopup(false);
    setShowPopup(false);
  }, [userID]);

  useEffect(() => {
    if (!openPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, ANIMATE_DURATION);
    } else {
      setShowPopup(true);
    }
  }, [openPopup]);

  useEffect(() => {
    if (showPopup) {
      if ($list.current) {
        const targetItem = document.getElementById(`post-${popupIndex}`);
        if (targetItem) {
          const itemRect = targetItem.getBoundingClientRect();
          const listRect = $list.current.getBoundingClientRect();
          const scrollTop =
            itemRect.top - listRect.top + $list.current.scrollTop;
          const headerSizeOfItem = 45;
          $list.current.scrollTo({
            top: scrollTop - headerSizeOfItem,
          });
        }
      }
    }
  }, [showPopup, popupIndex]);

  const fetchUser = async () => {
    const userData = (PROFILES.find((profile) => profile.id === userID) ??
      null) as User | null;
    if (userData) {
      setUser(userData);
    }
  };

  const fetchPosts = async (uid: number) => {
    const userPosts = POSTS.filter((p) => p.userID.includes(uid));
    if (userPosts.length > 0) {
      setPosts(userPosts);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userID]);

  useEffect(() => {
    if (!user) return;
    fetchPosts(user.uid);
  }, [user]);

  const handleClickCelebrate = () => {
    // user.bank를 클립보드에 복사
    navigator.clipboard.writeText(user?.bank || "");
    toast.success(`${user?.bank}를 클립보드에 복사했어요.`);
  }

  const handleClickMessage = () => {
    // instagram 계정으로 이동
    window.open(`https://instagram.com/${user?.id}`, "_blank");
  }

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
            <AvatarFallback className="capitalize"></AvatarFallback>
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
          <Button variant="outline" className="border-white flex-1" onClick={handleClickCelebrate}>
            축의 보내기
          </Button>
          <Button variant="outline" className="border-white flex-1" onClick={handleClickMessage}>
            메시지 보내기
          </Button>
        </div>
        <div className="w-full inline-block text-left">
          {posts.map((post) => (
            <img
              key={post.id}
              src={post.content[0]}
              className="inline w-1/3 aspect-3/4 object-cover p-0.5"
              onClick={() => {
                setOpenPopup(true);
                setPopupIndex(post.id);
              }}
            />
          ))}
        </div>
      </div>
      <div
        ref={$list}
        className={cn(
          "w-full h-full fixed top-0 left-0 bg-black overflow-auto",
          openPopup
            ? "translate-x-0 transition-transform duration-300"
            : "translate-x-full transition-transform duration-300"
        )}
        style={{
          visibility: showPopup ? "visible" : "hidden",
        }}
      >
        <div className="sticky top-0 left-0 w-full h-13 flex flex-row gap-8 items-center px-4 z-2 bg-black">
          <ArrowLeft onClick={() => setOpenPopup(false)} />
          <Typography variant="heading2">게시물</Typography>
        </div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
