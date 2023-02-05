import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, Switch } from "@mui/material";
import "./Table.css";
import cakeone from "./cakeone.png";
import caketwo from "./caketwo.png";
import cakethree from "./cakethree.png";
import cakefour from "./cakefour.png";
import cakefive from "./cakefive.png";
import youtube from "./youtube.png";
import facebook from "./facebook.png";
import google from "./google.png";
import pencil from "./pencil.png";
import trash from "./trash.png";
const TableView = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const rows = [
    {
      cakeimage: cakeone,
      caketopheading: "Bluberry cake Campaign",
      cakebottomheading: "Created on 14 july",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      clicks: 300,
      price: "INR.3,400",
      location: "Chennai",
      socialIcon: facebook,
      status: "Live now",
      actionone: pencil,
      actiontwo: trash,
    },
    {
      cakeimage: caketwo,
      caketopheading: "Chocolate cake campaign",
      cakebottomheading: "Created on 20 Jan",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      clicks: 210,
      price: "INR.3,400",
      location: "Coimbatore",
      socialIcon: facebook,
      status: "Paused",
      actionone: pencil,
      actiontwo: trash,
    },
    {
      cakeimage: cakethree,
      caketopheading: "Browine cake campaign",
      cakebottomheading: "Created on 12 June",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      clicks: 123,
      price: "INR.3,400",
      location: "Erode",
      socialIcon: facebook,
      status: "Exhausted",
      actionone: pencil,
      actiontwo: trash,
    },
    {
      cakeimage: cakefour,
      caketopheading: "Pumpkin cake camapign",
      cakebottomheading: "Created on 28 Feb",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      clicks: 435,
      price: "INR.3,400",
      location: "Coimbatore",
      socialIcon: youtube,
      status: "Live now",
      actionone: pencil,
      actiontwo: trash,
    },
    {
      cakeimage: cakefive,
      caketopheading: "Cup cakes campaign",
      cakebottomheading: "Created on 10 July",
      dateRange: "25 jul 2020 - 01 Aug 2020",
      clicks: 123,
      price: "INR.3,400",
      location: "Coimbatore",
      socialIcon: google,
      status: "Live now",
      actionone: pencil,
      actiontwo: trash,
    },
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox {...label} defaultChecked />
              </TableCell>
              <TableCell align="center">On/Off</TableCell>
              <TableCell align="center">Campagin</TableCell>
              <TableCell align="center">Date-Range</TableCell>
              <TableCell align="center">Clicks</TableCell>
              <TableCell align="center">Budget</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Platform</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Checkbox {...label} defaultChecked />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Switch {...label} defaultChecked />
                </TableCell>

                <TableCell align="center">
                  <div className="contentBox">
                    <div className="imageConatiner">
                      <img src={row.cakeimage} />
                    </div>
                    <div className="content">
                      <div className="contentHeading">{row.caketopheading}</div>
                      <div className="headingtwo">{row.cakebottomheading}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">{row.dateRange}</TableCell>
                <TableCell align="center">{row.clicks}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">
                  <img src={row.socialIcon} />
                </TableCell>
                <TableCell align="center">
                  <div
                    className={
                      row.status === "Live now"
                        ? 'tableStatusgreen'
                        : row.status === "Paused"
                        ? 'tableStatusyellow'
                        : 'tableStatusred'
                    }
                  >
                    {row.status}
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="ActionButtons">
                    <div className="acb1">
                      <img src={row.actionone} />
                    </div>

                    <div className="acb2">
                      <img src={row.actiontwo} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableView;
