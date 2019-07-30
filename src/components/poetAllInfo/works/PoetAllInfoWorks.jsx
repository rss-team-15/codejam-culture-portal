import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const PoetAllInfoWorks = props => {
  const {
    listOfWorks,
    interface: { title, firstColumnName, secondColumnName },
  } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">{firstColumnName}</TableCell>
            <TableCell align="left">{secondColumnName}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfWorks.map(work => (
            <TableRow>
              <TableCell align="left">{work.date}</TableCell>
              <TableCell align="left">{work.work}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PoetAllInfoWorks;
