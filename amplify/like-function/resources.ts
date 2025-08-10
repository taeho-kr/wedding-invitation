import { defineFunction } from "@aws-amplify/backend";

export const likeFunction = defineFunction({
  name: "like-function",
  entry: "./handler.ts"
});