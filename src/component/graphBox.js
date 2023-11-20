import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";

import React, { useRef} from 'react';
import { SelectBox } from "./selectBox";
import { manageOptions, monthList} from "../util/chartUtils";
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles (() => ({
  graphTitle: {
    fontSize: 14,
    color: "black",
  },
  box: {
    background: "#fff",
    borderRadius: "16px 0px 0xp 16px",
    minHeight: 55,
  },
}));


export const GraphBox = ({
  chartData = {},
  content = "",
  updateState = () => false,
  title = "",
  hide = false,
  invoice = false,
  inOut = false,
}) => {
  const classes = useStyle();
  const inputref = useRef(null);
  const handleImageClick =()=>{
  inputref.current.click();
}
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={1}
            className={classes.box}
          >
            <Typography className={classes.graphTitle}>{title}</Typography>
            {inOut && (
              <Stack direction={"row"} spacing={1}>
                <Box sx={{ height: "20px", width: "20px", backgroundColor: "green", display:"flex", justifyContent: "space-between",
                 alignItems: "center"}}></Box>
                <Typography>In</Typography>
                <Box sx={{ height: "20px", width: "20px", backgroundColor: "green", display:"flex", justifyContent: "space-between",
                 alignItems: "center"}}></Box>
                <Typography>Out</Typography>
              </Stack>
            )}
            {invoice &&<Button variant="contained" color="grey" onClick={handleImageClick}>                     
            <input type='file' ref={inputref}  style={{display:'none'}}/>
            New Sales Invoice</Button>}
            {!hide && (
              <Stack direction={"row"} spacing={1}>
                <SelectBox
                  label=""
                  value={chartData?.accountYear}
                  onChange={(val) =>
                    updateState("accountYear", val.target.value)
                  }
                  width={"100px"}
                  height={"32px"}
                  options={manageOptions}
                />
                <SelectBox
                  label=""
                  value={chartData?.monthList}
                  onChange={(val) => updateState("monthList", val.target.value)}
                  width={"100px"}
                  height={"32px"}
                  options={monthList}
                />
                {/*  */}
              </Stack>
            )}
          </Stack>
          <Divider sx={{ border: "1px solid black" }}></Divider>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: "100%" }}>{content}</Box>
        </Grid>
      </Grid>
    </div>
  );
};
