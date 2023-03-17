import React from "react";
import { makeStyles } from "@mui/styles";
import { varCss } from "../theme/varCss";
import ButtonCommon from "../components/button/index";
import { icons } from "../icons";
interface PropsI {
  showCreatePost: () => void;
}
const useStyles = makeStyles((theme) => {
  return {
    cotnainer: {
      width: varCss.widthNavLeft,
    },
  };
});
const NavLeft = ({ showCreatePost }: PropsI) => {
  const classes = useStyles();
  return (
    <div className={classes.cotnainer}>
      <ButtonCommon onEvent={showCreatePost} positionIconStart={true} icon={<icons.add />}>
        Create Post
      </ButtonCommon>
    </div>
  );
};

export default NavLeft;
