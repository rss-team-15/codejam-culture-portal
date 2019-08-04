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
  worksContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  poetBiographyTitle: {
    marginBottom: '3vw',
    fontFamily: `'PT Sans', 'proxima-nova', sans-serif`,
    fontWeight: '700',

    color: '#555555',
    fontSize: '2vw',
  },
  poetWorksTableHeader: {
    color: '#ffffff',
    fontFamily: `'proxima-nova', sans-serif`,

    backgroundColor: '#40c8f4',
  },
  poetWorksTableRow: {
    fontSize: '3vw',
    fontFamily: `'proxima-nova', sans-serif`,

    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: '#cccccc',
    },
  },
}));

const PoetAllInfoWorks = (props) => {
  const {
    listOfWorks,
    interface: { title, firstColumnName, secondColumnName },
  } = props;

  const classes = useStyles();

  return (
    <Grid className={`${classes.worksContainer} poet-page-works-container`} container direction="column" alignItems="center">
      <Typography
        className={`${classes.poetBiographyTitle} poet-page-works-title`}
        variant="h3"
        component="h3"
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
