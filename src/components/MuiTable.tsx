import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Alexa",
    last_name: "Coakley",
    email: "acoakley0@nifty.com",
    gender: "Genderfluid",
    ip_address: "110.191.200.40",
  },
  {
    id: 2,
    first_name: "Amalee",
    last_name: "Regitz",
    email: "aregitz1@psu.edu",
    gender: "Polygender",
    ip_address: "67.251.9.214",
  },
  {
    id: 3,
    first_name: "Emlen",
    last_name: "Baulch",
    email: "ebaulch2@umn.edu",
    gender: "Male",
    ip_address: "0.52.118.218",
  },
  {
    id: 4,
    first_name: "Adara",
    last_name: "Kornas",
    email: "akornas3@plala.or.jp",
    gender: "Female",
    ip_address: "217.124.199.136",
  },
  {
    id: 5,
    first_name: "Ermentrude",
    last_name: "Clarae",
    email: "eclarae4@myspace.com",
    gender: "Non-binary",
    ip_address: "75.180.253.25",
  },
  {
    id: 6,
    first_name: "Glori",
    last_name: "Barlow",
    email: "gbarlow5@mapquest.com",
    gender: "Female",
    ip_address: "200.25.171.254",
  },
  {
    id: 7,
    first_name: "Frederic",
    last_name: "Comellini",
    email: "fcomellini6@cisco.com",
    gender: "Male",
    ip_address: "42.69.24.27",
  },
  {
    id: 8,
    first_name: "Uri",
    last_name: "Bastiman",
    email: "ubastiman7@pbs.org",
    gender: "Male",
    ip_address: "28.52.134.20",
  },
  {
    id: 9,
    first_name: "Sutton",
    last_name: "Sheardown",
    email: "ssheardown8@cbslocal.com",
    gender: "Male",
    ip_address: "107.122.133.75",
  },
  {
    id: 10,
    first_name: "Berty",
    last_name: "Caherny",
    email: "bcaherny9@nasa.gov",
    gender: "Male",
    ip_address: "230.91.206.53",
  },
];
