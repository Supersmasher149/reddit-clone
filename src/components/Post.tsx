import { Button, Flex, LinkBox, LinkOverlay, Spacer, Text } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";

import React from "react";
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

function getDateString(date: number) {
  
}

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
        <Flex direction={'column'}>
          <Text>{new Date(dateCreated).toString()}</Text>
          <Text>{subRedditName}</Text>
        </Flex>
        <Spacer />
        <Text>{postTitle}</Text>
        <Flex>
          <Flex>
            <FaArrowUp />
            <Text>{postTotal}</Text>
            <FaArrowDown />
          </Flex>
          <Flex>
            <FaComment />
            <Text>{commentTotal}</Text>
          </Flex>
        </Flex>
    </div>
  );
}

export default Post;
