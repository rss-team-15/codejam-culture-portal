import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  technologyCard: {
    width: '17vw'
  },
  technologyCardImageBlock: {
    height: '15vw'
  },
  technologyCardImageBlock__technologyImage: {
    height: '9vw',
    width: '9vw'
  },
  technologyCardNameBlock: {
    height: '10vw'
  },
  technologyCardNameBlock__technologyName: {
    fontSize: '1.6vw'
  }
});

const UsedTechnology = props => {
  const { tecnologyImg, tecnologyName } = props;
  const classes = useStyles();
  return (
    <Card className={classes.technologyCard}>
      <Grid
        className={classes.technologyCardImageBlock}
        container
        justify="center"
        alignItems="center"
      >
        <Avatar className={classes.technologyCardImageBlock__technologyImage} src={tecnologyImg} />
      </Grid>

      <Grid
        className={classes.technologyCardNameBlock}
        container
        justify="center"
        alignItems="center"
      >
        <Typography
          className={classes.technologyCardNameBlock__technologyName}
          variant="h5"
          component="p"
        >
          {tecnologyName}
        </Typography>
      </Grid>
    </Card>
  );
};

export default UsedTechnology;
