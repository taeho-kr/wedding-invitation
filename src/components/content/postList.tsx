import type { Post } from "@/types/content";
import PostItem from "./postItem";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          userID={post.userID}
          wall={post.wall}
          content={post.content}
          comments={post.comments}
          date={post.date}
          description={post.description}
        />
      ))}
    </div>
  );
}
