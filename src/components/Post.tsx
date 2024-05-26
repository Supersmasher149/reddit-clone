import {
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";

import React from "react";
import CommentThingy from "./CommentThingy";
//TODO Add flywheel
interface comment {}
export interface PostProps {
  id: string;
  subRedditName: string;
  dateCreated: number;
  postTitle: string;
  postLikes: number;
  postDislikes: number;
  postTotal: number;
  commentTotal: number;
  comments: comment[];
  content: string;
}

function getDateString(date: number) {}

function Post({
  id,
  subRedditName,
  postTitle,
  postLikes,
  postDislikes,
  postTotal,
  commentTotal,
  comments,
  content,
  dateCreated,
}: PostProps) {
  return (
    <div className="post">
      <Flex direction={"column"}>
        <Text>{new Date(dateCreated).toString()}</Text>
        <Text>{subRedditName}</Text>
      </Flex>
      <Spacer />
      <Heading>{postTitle}</Heading>
      <Text py={3}>{content}</Text>
      <Flex gap={10}>
        <Flex gap={3} alignItems={"center"}>
          <FaArrowUp />
          <Text>{postTotal}</Text>
          <FaArrowDown />
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <FaComment />
          <Text>{commentTotal}</Text>
        </Flex>
      </Flex>
      <CommentThingy />
    </div>
  );
}

export default Post;
