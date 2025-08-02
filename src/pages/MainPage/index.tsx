import PostList from "@/components/content/postList";
import { POSTS } from "@/constants/contents";
import { Header } from "@/layouts/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col w-full h-full pb-5">
      <Header />
      <PostList posts={POSTS} />
    </div>
  );
}
