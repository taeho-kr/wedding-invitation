// like store zustand
import { create } from "zustand";

interface LikeStore {
  likes: Record<number, number>;
  setLikes: (likes: Record<number, number>) => void;
  addLike: (postId: number) => void;
  removeLike: (postId: number) => void;
}

const useLikeStore = create<LikeStore>((set) => ({
  likes: {},
  setLikes: (likes) => set({ likes }),
  addLike: (postId) =>
    set((state) => ({ likes: { ...state.likes, [postId]: 1 } })),
  removeLike: (postId) =>
    set((state) => {
      const { [postId]: _, ...rest } = state.likes;
      return { likes: rest };
    }),
}));

export default useLikeStore;
