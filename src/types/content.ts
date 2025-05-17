export interface User {
  id: number;
  name: string;
  profileImage: string;
  profile: string;
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
