import YongeunProfile from "@/assets/images/yongeun_profile.jpg";
import TaehoProfile from "@/assets/images/taeho_profile.jpg";
import type { User } from "@/types/content";

export const PROFILES: User[] = [
  {
    uid: 0,
    id: "flowerphant.studio",
    name: "FLOWER PHANT 🇰🇷",
    image: YongeunProfile,
    job: "예술가",
    comment: "📧 flowerphant.studio@gmail.com",
    iam: "Bride",
    mbti: "INTP",
    birth: "1991.07.29",
    bank: "기업은행 01028131919",
  },
  {
    uid: 1,
    id: "taeho._.world",
    name: "Taeho",
    image: TaehoProfile,
    job: "Frontend Engineer",
    comment: "Hi",
    iam: "Groom",
    mbti: "ENTJ",
    birth: "1992.08.29",
    bank: "국민은행 51390101132997",
  },
];
