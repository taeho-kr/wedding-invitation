import PostItem from "@/components/content/postItem";
import { POSTS } from "@/constants/contents";
import { Header } from "@/layouts/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-3 w-full h-full pb-5 relative">
      <Header />
      {POSTS.map((post, index) => (
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
