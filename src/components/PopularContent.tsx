import React from 'react'
import type { PostProps } from './Post'
import Post from './Post'
import { Flex } from '@chakra-ui/react';

const postData: PostProps= {
  id: "1",
  subRedditName: "react",
  content: "Consequat eiusmod laboris reprehenderit adipisicing magna cillum magna et adipisicing ad sint excepteur ut amet. Consectetur qui voluptate aliquip dolore aliqua deserunt labore sunt. Non elit aliquip magna mollit. Et reprehenderit tempor Lorem adipisicing cupidatat dolor culpa ipsum. Sint reprehenderit esse laborum proident sit exercitation consequat esse aliquip occaecat. Voluptate occaecat nisi sit veniam laboris do. Eiusmod id velit anim qui officia sunt.",
  dateCreated: 0,
  postTitle: '',
  postLikes: 0,
  postDislikes: 0,
  postTotal: 0,
  commentTotal: 0,
  comments: []
}
const x = 1715779978147;
let date1 = new Date(x).getTime()


function PopularContent() {
  return (
    <Flex justify={'center'}>
      <Post id={"1"} commentTotal={1} content={postData.content} dateCreated={date1} postDislikes={4} postLikes={10} postTotal={6} postTitle='Reddit' subRedditName='reddit' key={1} comments={[]} />
    </Flex>
  )
}

export default PopularContent