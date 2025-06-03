export interface User {
  id: number;
  name: string;
  image: string;
  profile: string;
}

export interface UserProfile extends User {
  iam: "Groom" | "Bride";
  mbti: string;
  birth: string;
  job: string;
  comment: string;
  image: string;
  posts: Post[];
}

export interface Post {
  id: number;
  userID: number[];
  date: string;
  content: string[];
  description: string;
  likes: number;
  comments: number;
}
