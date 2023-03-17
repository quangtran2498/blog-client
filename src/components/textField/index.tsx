import React from "react";

import { Box, TextField as TextFieldMui } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import { FastFieldProps } from "formik";
import "./input-field.css";
//
import { InputAdornment } from "@mui/material";
interface Props extends FastFieldProps {
  label?: string;
  type?: string;
  onKeyDown?: (e?: any) => void;
  fullWidth?: boolean;
  className?: string;
  size?: "small" | "medium" | undefined;
  autoFocus: any;
  styleAdd?: any;
  placeholder?: string;
  Icons?: any;
  styleInput?: any;
  required?: boolean;
  disabled?: boolean;
  styleLabel?: any;
  onFocus?: () => void;
}

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-multiline": {
      padding: 0,
    },
    "& .MuiInputBase-multiline.Mui-disabled": {
      background: "#EBEBF0",
    },
    "& .MuiOutlinedInput-root textarea": {
      height: "22px",
      paddingLeft: "14px",
      paddingRight: "14px",
      paddingTop: "13px",
      paddingBottom: "13px",
      overflow: "hidden",
      "&::placeholder": {
        color: "#BABABA",
      },
    },
    "& .MuiInputBase-adornedEnd": {},
    "& .MuiOutlinedInput-root": {
      borderRadius: "4px",
      marginTop: "4px",
      "& input": {
        borderRadius: "4px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowarp",
        lineHeight: "48px",
        width: "100%",
        "&::placeholder": {},
      },
      "& select": {},
      "& textarea": {},
      "& .Mui-disabled": {},
      "& .MuiInputBase-inputAdornedEnd": {},

      "& fieldset": {},
    },
  },
})(TextFieldMui);

export const TextField = (props: Props) => {
  const {
    label,
    type = "text",
    onKeyDown,
    fullWidth = true,
    field,
    form,
    className,
    size = "medium",
    styleAdd,
    placeholder,
    Icons,
    styleInput,
    onFocus,
    required,
    styleLabel,
    ...rest
  } = props;
  const { name, value } = field;
  const { errors, touched, handleChange, handleBlur, setFieldTouched } = form;
  return (
    <Box py={0.5}>
      <CssTextField
        variant="outlined"
        name={name}
        type={type}
        onKeyDown={onKeyDown}
        fullWidth={fullWidth}
        className={`${props.className}`}
        onChange={handleChange}
        style={{ ...styleAdd }}
        onFocus={() => {
          onFocus && onFocus();
          setFieldTouched(name);
        }}
        onBlur={handleBlur}
        placeholder={placeholder}
        {...rest}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name] && <>{errors[name]}</>}
        InputProps={
          Icons && {
            endAdornment: (
              <InputAdornment position="end">{Icons}</InputAdornment>
            ),
          }
        }
      />
    </Box>
  );
};
