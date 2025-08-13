export interface User {
  uid: number;
  id: string;
  name: string;
  image: any;
  iam: "Groom" | "Bride";
  mbti: string;
  birth: string;
  job: string;
  comment: string;
  posts?: Post[];
  bank: string;
}

export interface Post {
  id: number;
  userID: number[];
  date: string;
  wall: string;
  content: string[];
  description: string;
  comments: number;
}
