import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { getPosts } from "../api";
import { DataPostI } from "../interface/index";
import { icons } from "../icons/index";
import { varCss } from "../theme/varCss";
import TextTitle from "../components/textTitle/index";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    postItem: {
      width: "100%",
      marginBottom: "20px",
      padding: "20px 20px",
    },
    avatarHeader: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      marginRight: varCss.marginRightAvatar,
    },
    author: {
      textAlign: "left",
    },
    contentPost: {
      paddingLeft: `calc(${varCss.widthAvatar} + ${varCss.marginRightAvatar})`,
    },
    textTitle: {
      textTransform: "capitalize",
    },
    interactItem: {
      display: "flex",
      alignItems: "center",
    },
    mr10:{
      marginRight:'10px'
    }
  };
});
const ShowPosts = () => {
  const [dataPosts, setDataPosts] = React.useState<any>();
  const classes = useStyles();
  const getPostsAll = async () => {
    try {
      const res = await getPosts();
      console.log(res.data, "fsdfdsf");

      setDataPosts(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getPostsAll();
  }, []);
  return (
    <div className={classes.container}>
      {dataPosts?.map((post: DataPostI) => {
        return (
          <Card className={classes.postItem}>
            <div className={classes.avatarHeader}>
              <div className={classes.avatar}>
                <icons.avatar />
              </div>
              <div className={classes.author}>
                <div className="">{post.author}</div>
                <div className="">{post.createdAt}</div>
              </div>
            </div>
            <div className={classes.contentPost}>
              <TextTitle className={classes.textTitle}>{post.title}</TextTitle>
              <div className="">{post.content}</div>
              <div className="">
                <img src={post.image} alt="" />
              </div>
              <div className={classes.interactItem}>
                <div className={`${classes.interactItem} ${classes.mr10}`}>
                  <icons.heart sx={{marginRight:"6px"}}/>
                  {post.likeCount}
                </div>
                <div className={classes.interactItem}>
                  <icons.comment />
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ShowPosts;
