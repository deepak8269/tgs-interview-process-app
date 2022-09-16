import React from "react";
import { TableCell, TableRow } from "@mui/material";
export const TableData = ({ item }) => {
  console.log(item,"item")
  return (
    <TableRow>
      <TableCell align="center">{item.candidateName}</TableCell>
      <TableCell align="center">{item.interviewDate}</TableCell>
      <TableCell align="center">{item.interviewerName}</TableCell>
      <TableCell align="center">{item.candidateMobile}</TableCell>
      <TableCell align="center">{item.candidateEmailId}</TableCell>
      <TableCell align="center">{item.candidateTechnology}</TableCell>
      <TableCell align="center">{item.candidateExperience} Year</TableCell>
      <TableCell align="center">{item.candidateLocation}</TableCell>
      <TableCell align="center">{item.candidateStatus}</TableCell>
    </TableRow>
  );
};
