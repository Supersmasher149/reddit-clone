import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Heading,
} from "@chakra-ui/react";
import { Field, Formik, FormikHelpers, FormikProps } from "formik";
interface Values {
  subReddit: string;
  title: string;
  content: string;
}
//TODO add selector for media ie {text,images,link, possiible poll????👀}
//TODO add tags and flair
function CreatePost() {
  return (
    <>
      <Flex className="CreatePostRoot" direction={"column"}>
        <Heading>Create a post</Heading>
        <Formik
          initialValues={{
            subReddit: "walter",
            title: "",
            content: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {/** this wierd thingy because were not using Formik's Form that auto hooks into this shit */}
          {(props: FormikProps<Values>) => (
            <form onSubmit={props.handleSubmit}>
              <FormControl>
                <Field as={Select} name="subReddit" id="subreddit">
                  <option value="walter">Walter</option>
                </Field>
              </FormControl>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Field
                  as={Input}
                  id="title"
                  name="title"
                  variant="filled"
                  maxW="600"
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <FormLabel>Body</FormLabel>
                  <Field
                    as={Textarea}
                    id="content"
                    name="content"
                    maxW="1000"
                  />
                </FormLabel>
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </Flex>
    </>
  );
}

export default CreatePost;
