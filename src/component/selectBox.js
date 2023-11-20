import { MenuItem, Select } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from '@mui/system/styled';

const useStyle= makeStyles(() => ({
  selectBox: {
    height: (props) => props?.height ?? 40,
    minWidth: (props) => props?.width ?? 120,
  },
}));

export const SelectBox = ({
  value = "",
  onChange = () => false,
  options = [],
  height = "40px",
  width = "120px",
}) => {
  const classes = useStyle({
    width,
  });
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      onChange={onChange}
      className={classes.selectBox}
    >
      {options?.map((data) => {
        return <MenuItem value={data?.value}>{data?.label}</MenuItem>;
      })}
    </Select>
  );
};
