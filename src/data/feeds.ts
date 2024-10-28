import { Feed } from "../store/feed";

export const feeds: Array<Feed> = [
  {
    id: 1,
    userID: "taeho._.world",
    contents: [
      {
        type: "video",
        src: "blob:https://www.instagram.com/6ffb2193-90e6-4a92-893f-32245ea91725",
      },
      {
        type: "image",
        src: "https://picsum.photos/500/500",
      },
    ],
    description: "Hello World",
    like: 10,
    comments: [],
    createdDatetime: new Date("2024-06-07 12:00:00"),
  },
  {
    id: 2,
    userID: "flowerphant.studio",
    contents: [
      {
        type: "image",
        src: "https://picsum.photos/400/300",
      },
    ],
    description: "용은",
    like: 100,
    comments: [],
    createdDatetime: new Date("2024-05-07 12:00:00"),
  },
];
