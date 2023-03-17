import React from "react";
import { makeStyles } from "@mui/styles";
interface PropsI {
  children: React.ReactNode;
}
const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "90%",
      margin: "auto",
    },
  };
});
const ContainerPosts = ({ children }: PropsI) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default ContainerPosts;
