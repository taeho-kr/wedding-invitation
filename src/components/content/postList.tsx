import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useRef } from "react";
import type { Post } from "@/types/content";
import PostItem from "./postItem";

interface Props {
  posts: Post[];
  initialScrollIndex?: number;
}

export default function PostList({ posts, initialScrollIndex }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: posts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 3,
  });

  useEffect(() => {
    if (initialScrollIndex !== undefined && parentRef.current) {
      virtualizer.scrollToIndex(initialScrollIndex, {
        align: "start",
      });
    }
  }, [initialScrollIndex]);

  return (
    <div
      className="w-full h-full"
      ref={parentRef}
      style={{ overflowY: "auto"}}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualColumn) => {
          const post = posts[virtualColumn.index];
          return (
            <div
              key={virtualColumn.key}
              data-index={virtualColumn.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualColumn.start}px)`,
              }}
            >
              <PostItem
                id={post.id}
                userID={post.userID}
                wall={post.wall}
                content={post.content}
                comments={post.comments}
                date={post.date}
                description={post.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
