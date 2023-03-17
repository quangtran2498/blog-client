import React from "react";
import { makeStyles } from "@mui/styles";
interface PropsI {
  children: string;
  className: string;
}
const useStyles = makeStyles((theme) => {
  return {
    styleDefault: {
      fontSize: "18px",
      fontWeight: 700,
    },
  };
});
const TextTitle = ({ children, className }: PropsI) => {
  const classes = useStyles();
  return (
    <div className={`${classes.styleDefault} ${className}`}>{children}</div>
  );
};

export default TextTitle;
