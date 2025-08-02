import type { Post } from "@/types/content";
import MainImage from "@/assets/images/KDW_23_054_F2.webp";

import Image0_1 from "@/assets/images/KDW_16_039_F2.webp";
import Image0_2 from "@/assets/images/KDW_17_037_F2.webp";
import Image0_3 from "@/assets/images/KDW_18_005_F2.webp";

import Image1_1 from "@/assets/images/KDW_03_012_F2 + KDW_04_027_F2.webp";
import Image1_2 from "@/assets/images/KDW_04_027_F2.webp";
import Image1_3 from "@/assets/images/KDW_03_012_F2.webp";

import Image2_1 from "@/assets/images/KDW_06_032_F2.webp";
import Image2_2 from "@/assets/images/KDW_02_008_F2.webp";
import Image2_3 from "@/assets/images/KDW_05_008_F2.webp";

import Image3_1 from "@/assets/images/KDW_12_043_F2.webp";
import Image3_2 from "@/assets/images/KDW_12_056_F2.webp";
import Image3_3 from "@/assets/images/KDW_08_030_F2.webp";
import Image3_4 from "@/assets/images/KDW_10_040_F2.webp";

import YMBTI from "@/assets/images/yongeun_mbti.webp";
import YImage0_1 from "@/assets/images/KDW_07_039_F2.webp";
import YImage0_2 from "@/assets/images/KDW_13_062_F2.webp";

import TMBTI from "@/assets/images/taeho_mbti.webp";


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
    content: [Image0_1, Image0_3, Image0_2],
    likes: 0,
    comments: 0,
    date: "2025-05-17T17:30:00+09:00",
    description: "Description1",
  },
  {
    id: 3,
    userID: [1],
    content: [Image2_1, Image2_2, Image2_3, Image1_1, Image1_3, Image1_2],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  },
  {
    id: 4,
    userID: [1],
    content: [Image3_1, Image3_2, Image3_3, Image3_4],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  },
  {
    id: 5,
    userID: [0],
    content: [
      YImage0_1,
      YImage0_2,
    ],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  },
  {
    id: 7,
    userID: [0],
    content: [YMBTI],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  },
  {
    id: 6,
    userID: [1],
    content: [TMBTI],
    likes: 0,
    comments: 0,
    date: "2025-05-17T23:30:00+09:00",
    description: "Description2",
  }
];