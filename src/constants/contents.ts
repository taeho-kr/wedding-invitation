import type { Post } from "@/types/content";
import MainImage from "@/assets/images/main.webp";
import Image1_1 from "@/assets/images/1-1.webp";
import Image1_2 from "@/assets/images/1-2.webp";
import Image1_3 from "@/assets/images/1-3.webp";
import Image1_4 from "@/assets/images/1-4.webp";
import Image2_1 from "@/assets/images/2-1.webp";
import Image2_2 from "@/assets/images/2-2.webp";
import Image2_3 from "@/assets/images/2-3.webp";

export const POSTS: Post[] = [
  {
    id: 0,
    userID: [1, 0],
    content: [MainImage],
    likes: 0,
    comments: 0,
    date: "2025-05-17T00:00:00+09:00",
    description: "용은이와 태호의 결혼식에 초대합니다!",
  },
  {
    id: 1,
    userID: [0, 1],
    content: [Image1_1, Image1_2, Image1_3, Image1_4],
    likes: 0,
    comments: 0,
    date: "2025-05-17T17:30:00+09:00",
    description: "Description1",
  },
  {
    id: 2,
    userID: [1],
    content: [Image2_1, Image2_2, Image2_3],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  },
];
