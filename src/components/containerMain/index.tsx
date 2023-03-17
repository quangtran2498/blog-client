import { makeStyles } from "@mui/styles";
import React from "react";
interface PropsI {
  children: React.ReactNode;
}
const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "80%",
      margin: "0 auto",
    },
  };
});
const ContainerMain = ({ children }: PropsI) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default ContainerMain;
