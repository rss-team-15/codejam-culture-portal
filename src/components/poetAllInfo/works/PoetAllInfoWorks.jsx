import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  poetBiographyTitle: {
    marginBottom: '3vw',

    color: '#555555',
    fontSize: '2vw',
  },
  poetWorksTableHeader: {
    color: '#ffffff',

    backgroundColor: '#40c8f4',
  },
  poetWorksTableRow: {
    fontSize: '3vw',

    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: '#cccccc',
    },
  },
}));

const PoetAllInfoWorks = props => {
  const {
    listOfWorks,
    interface: { title, firstColumnName, secondColumnName },
  } = props;
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Typography
        className={classes.poetBiographyTitle}
        variant="h5"
        component="h5"
      >
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow className={classes.poetWorksTableHeader}>
            <TableCell
              style={{ color: '#ffffff', fontWeight: '600' }}
              align="left"
            >
              {firstColumnName}
            </TableCell>
            <TableCell
              style={{ color: '#ffffff', fontWeight: '600' }}
              align="left"
            >
              {secondColumnName}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfWorks.map(work => (
            <TableRow className={classes.poetWorksTableRow} key={work.work}>
              <TableCell align="left">{work.date}</TableCell>
              <TableCell align="left">{work.work}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default PoetAllInfoWorks;
