import PostItem from "@/components/content/postItem";
import { useEffect, useState } from "react";
import type { Post } from "@/types/content";

import MainImage from "@/assets/images/main.jpg";
import Image1_1 from "@/assets/images/1-1.jpg";
import Image1_2 from "@/assets/images/1-2.jpg";
import Image1_3 from "@/assets/images/1-3.jpg";
import Image1_4 from "@/assets/images/1-4.jpg";
import Image2_1 from "@/assets/images/2-1.jpg";
import Image2_2 from "@/assets/images/2-2.jpg";
import Image2_3 from "@/assets/images/2-3.jpg";

export default function MainPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const newPosts: Post[] = [
      {
        id: 0,
        userID: 0,
        content: [MainImage],
        likes: 0,
        comments: 0,
        date: "2025-05-17",
        description: "초대합니다!",
      },
      {
        id: 1,
        userID: 1,
        content: [Image1_1, Image1_2, Image1_3, Image1_4],
        likes: 0,
        comments: 0,
        date: "2025-05-17",
        description: "초대합니다!",
      },
      {
        id: 2,
        userID: 1,
        content: [Image2_1, Image2_2, Image2_3],
        likes: 0,
        comments: 0,
        date: "2025-05-17",
        description: "초대합니다!",
      },
    ];

    setPosts(newPosts);
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full h-full pb-5">
      {posts.map((post, index) => (
        <PostItem
          key={index}
          userID={post.userID}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          date={post.date}
          description={post.description}
          id={post.id}
        />
      ))}
    </div>
  );
}
