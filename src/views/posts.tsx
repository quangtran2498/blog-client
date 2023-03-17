import TextField from "@mui/material/TextField/TextField";
import React from "react";
import Modal from "../components/modal/index";
import { Form, Formik } from "formik";
import { makeStyles } from "@mui/styles";
import TextTitle from "../components/textTitle/index";
import FileBase64 from "react-file-base64";
import ButtonCommon from "../components/button/index";
import { createPost } from '../api/index';
interface PropsI {
  open: boolean;
  onClose: () => void;
}
const useStyles = makeStyles((theme) => {
  return {
    titleCreatePost: {
      marginBottom: "16px",
    },
    uploadImage:{
      marginBottom: "16px",

    }
  };
});
const initialValue = {
  title: "",
  content: "",
  image: "",
};
const CreatePost = ({ open, onClose }: PropsI) => {
  const [valueImage, setValueImage] = React.useState<string>("");
  const classes = useStyles();
  const postArticle = async (body:any) => {
     try {
        const res = await createPost(body)
     }catch (error) {
      console.log(error);
      
     }
  }
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Formik
          initialValues={initialValue}
          onSubmit={() => console.log("Fsdfsdf")}
        >
          {(props) => {
            console.log(props.values, "fomik");
            const handleUploadImage = (linkImage:string) => {
              setValueImage(linkImage)
              props.setFieldValue("image",linkImage)
            }
            return (
              <Form>
                <TextTitle className={classes.titleCreatePost}>
                  Create Post
                </TextTitle>
                <TextField
                  fullWidth
                  placeholder="title post"
                  style={{ marginBottom: "16px" }}
                  onChange={props.handleChange}
                  name={"title"}
                />
                <TextField
                  fullWidth
                  placeholder="content post"
                  style={{ marginBottom: "16px" }}
                  onChange={props.handleChange}
                  name={"content"}
                />
                <div className={classes.uploadImage}>
                  <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={valueImage}
                    onDone={({ base64 }: any) => handleUploadImage(base64)}
                  />
                </div>
                <div className="">
                  <ButtonCommon onEvent={() => postArticle(props.values)}>Create post</ButtonCommon>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};

export default CreatePost;
