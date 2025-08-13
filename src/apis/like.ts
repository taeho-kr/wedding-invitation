import { db } from "@/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  getDocs,
  collection,
} from "firebase/firestore";

interface Like {
  postId: string;
  count: number;
}

export const fetchLikes = async (): Promise<Like[]> => {
  const querySnapshot = await getDocs(collection(db, "likes"));
  return querySnapshot.docs.map((doc) => {
    return {
      postId: doc.id,
      count: doc.data().count,
    };
  });
};

// 좋아요 증가
export const incrementLike = async (postId: string): Promise<Like> => {
  const docRef = doc(db, "likes", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { count: increment(1) });
  } else {
    await setDoc(docRef, { count: 1 });
  }

  const updatedSnap = await getDoc(docRef);
  return { postId, count: updatedSnap.data()!.count };
};

// 좋아요 감소
export const decrementLike = async (postId: string): Promise<Like> => {
  const docRef = doc(db, "likes", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { count: increment(-1) });
  }

  const updatedSnap = await getDoc(docRef);
  return { postId, count: updatedSnap.data()!.count };
};
