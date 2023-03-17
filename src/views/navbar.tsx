import React from "react";
import { icons } from "../icons";
import { makeStyles } from "@mui/styles";
import ContainerMain from "../components/containerMain/index";
const useStyles = makeStyles((theme) => {
  return {
    containerDad: {
      border: "1px solid",
      padding: "10px 0",
    },
    cotnainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerDad}>
      <div className={classes.cotnainer}>
        <div className="">
          <icons.logo />
        </div>
        <div className="">
          <div className="">
            <icons.search />
            <input type="text" />
          </div>
        </div>
        <div className="">
          <icons.avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
