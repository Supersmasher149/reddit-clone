import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

//TODO Change input to textarea
//this will be a pain in the ass dealing with the state
function CommentThingy() {
    const [text, setText] = useState('');
    const handleChange = (event) => setText(event.target.value)
  return (
    <div className="comment thingy">
      <Flex>
        <Input onChange={handleChange} value={text} placeholder="Add Comment"/>
        <Button >Add Commont</Button>
      </Flex>
    </div>
  );
}

export default CommentThingy;
