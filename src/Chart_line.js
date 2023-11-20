import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,

  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { manageOptions, monthList } from "./util/chartUtils";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from '@mui/system/styled';

import { GraphBox } from "./component/graphBox";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const useStyle = makeStyles(() => ({
  graphTitle: {
    fontSize: 14,
    color: "black",
  },
}));

export const My_Chartpage = () => {
  const [chartData, setChartData] = React.useState({
    accountYear: manageOptions?.[0]?.value,
    monthList: monthList?.[0]?.value,
  });

  const updateState = (key, value) => {
    setChartData({
      ...chartData,
      [key]: value,
    });
  };
  console.log("chartData", chartData);
  const data = {
    labels: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "green",
        tension: 0.4,
        pointBorderColor: "transparent",
        boxSizing: "border-box",
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderWidth: 20,
        boxSizing: "border-box",
      },
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const databar = {
    labels: [
      "Older",
      "Jan 01-08",
      "Jan 09-16",
      "Jan 17-24",
      "Jan 25-31",
      "Future",
    ],
    datasets: [
      {
        data: [10, 40, 80, 65, 30, 50],
        fill: false,
        borderColor: "transparent",
        backgroundColor: "green",
        tension: 0.4,
        borderWidth: 25,
      },
    ],
  };

  const databar3 = {
    labels: [
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
    ],
    datasets: [
      {
        data: [20, 30, 60, 45, 30, 15],
        fill: false,
        borderColor: "transparent",
        backgroundColor: "green",

        borderWidth: 25,
      },
    ],
  };

 

  const tableData = [
    {
      accountTitle: "Sales",
      thisMonthAmount: "1,194.58",
      ytd: "11,418.29",
    },

    {
      accountTitle: "Advertising",
      thisMonthAmount: "6,879.02",
      ytd: "9,271.36",
    },
    {
      accountTitle: "Inventory",
      thisMonthAmount: "4,692.26",
      ytd: "9,768.02",
    },
    {
      accountTitle: "Entertainment",
      thisMonthAmount: "0.00",
      ytd: "0.00",
    },
    {
      accountTitle: "Product",
      thisMonthAmount: "4,652.10",
      ytd: "2,529.90",
    },
  ];

  return (
    <>
      <Box
        sx={{
          background: "#f0f0f0",
          height: "calc(100vh - 0px)",
          overflow: "auto",
        }}
      >
        <Grid container spacing={2} p={2}>
          <Grid item md={6} xs={12} sm={12} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                width: "100%",
                height: "400px",
              }}
            >
              <GraphBox
                title="Checking Account"
                content={
                  <Box
                    sx={{ height: "330px", width: "100%" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Line data={data} options={options} />
                  </Box>
                }
                updateState={updateState}
                chartData={chartData}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            sx={{ display: "flex", height: "415px", width: "100%" }}
          >
            <Box sx={{ background: "#fff" }}>
              <GraphBox
                title="Invoices owded to you"
                content={
                  <Box
                    sx={{ height: "330px", width: "100%" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Bar data={databar} options={options} />
                  </Box>
                }
                updateState={updateState}
                hide
                invoice
                chartData={chartData}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sm={12} sx={{ display: "flex" }}>
            {/* <div style={{ width: "600px", height: "400px" }}>
              <Bar data={databar3} options={options} />
            </div> */}
            <Box sx={{ background: "#fff", height: "430px", width: "100%" }}>
              <GraphBox
                title="Total cash flow"
                content={
                  <Box
                    sx={{ height: "370px", width: "100%" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Bar data={databar3} options={options} />
                  </Box>
                }
                updateState={updateState}
                chartData={chartData}
                hide
                inOut
              />
            </Box>
          </Grid>

          <Grid item md={6} xs={12} sm={12} sx={{ display: "flex" }}>
            <Box  sx={{width: "100%" ,background: "#fff" }} >
              <GraphBox
                title="Account watchlist"
                content={
                  <TableContainer display={"flex"}  sx={{ height: "330px", width: "100%" ,background: "#fff" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Account</TableCell>
                          <TableCell>This Month</TableCell>
                          <TableCell>YTD</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData?.map((data) => {
                          return (
                            <TableRow>
                              <TableCell>{data?.accountTitle}</TableCell>
                              <TableCell>{data?.thisMonthAmount}</TableCell>
                              <TableCell>{data?.ytd}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                }
                updateState={updateState}
                chartData={chartData}
                hide
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};
