import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from "@mui/styles";

const CustomBtn = withStyles((theme) => {
  return {
    root: {
      "&:hover": {
        backgroundColor: "#009FFF !important",
      },
      "&.MuiButton-root": {
        borderRadius: "16px",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "26px",
        textTransform: "none",
        fontFamily: "Inter",
        padding: "10px 16px",
        boxShadow: "0 1px 4px 0 rgba(60,64,67,.3)",
        [theme.breakpoints.down("md")]: {},
        "&.Mui-disabled": {
          background: "#E7E8FD",
        },
      },
    },
  };
})(Button);

//! type
interface ButtonProps {
  children: any;
  onEvent?: () => void | any;
  style?: any;
  className?: string;
  disabled?: boolean;
  type?: any;
  icon?: React.ReactNode;
  positionIconStart?: boolean;
  positionIconEnd?: boolean;
}
const ButtonCommon = (props: ButtonProps) => {
  //! State

  const {
    children,
    onEvent,
    style,
    className,
    type,
    disabled,
    icon,
    positionIconStart,
    positionIconEnd,
    ...restProps
  } = props;
  const typebtn = type;
  //! Render
  return (
    <CustomBtn
      disabled={disabled}
      onClick={onEvent}
      type={typebtn}
      className={`${className}`}
      style={{ ...style }}
      startIcon={positionIconStart && icon}
      endIcon={positionIconEnd && icon}
      {...restProps}
    >
      {children}
    </CustomBtn>
  );
};
export default ButtonCommon;
