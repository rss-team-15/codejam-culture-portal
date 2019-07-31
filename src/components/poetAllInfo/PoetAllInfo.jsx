import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import PoetTitle from './title';
import PoetBiograpyhy from './timeline';
import PoetWorks from './works';
import PoetVideo from './video';

const useStyles = makeStyles(theme => ({
  poetAllInfoContainer: {
    paddingTop: '6vw',
    backgroundColor: '#eeeeee',
  },
  poetAllInfoRoot: {
    width: '75vw',
    padding: theme.spacing(3),
  },
}));

const PoetAllInfo = props => {
  const classes = useStyles();

  const poetInfo = {
    name: 'Alexander',
    surname: 'Kovalenko',
    yearsOfLife: 'July 15, 1876 – November 5, 1916',
    picture: 'https://avatars0.githubusercontent.com/u/40535982?v=4',
  };

  const poetBio = [
    {
      date: '1902-1904',
      content:
        'After moving to Pashkevich Petersburg, in 1902, she graduated externally from the Gymnasium Alexandria for girls and joined a school for physical education teachers, Lieshafta AF',
    },
    {
      date: '1904',
      content:
        "Pashkievich was one of the founders of the Belarusian Socialist Assembly. In 1904, she gave up teaching and returned to Vilnius. She organized workers' groups, wrote and promoted anti-government proclamations, and took part in debates and political meetings.",
    },
    {
      date: '1908-1909',
      content:
        "In 1908–1909 she lived in Krakow and studied at the Jagiellonian University's Faculty of humanities..",
    },
    {
      date: '1911',
      content:
        'In 1911, she married Steponas Kairys, a Lithuanian engineer and social democracy activist. In the same year, she returned to Belarus and joined national educational activities.',
    },
    {
      date: '1914-1915',
      content:
        'During World War I, Alaiza Pashkievich worked as a Sister of Charity in a military hospital in Vilnius.',
    },
    {
      date: '1916',
      content:
        'At the beginning of 1916, she traveled to her parents and helped villagers sick with typhoid. She also fell ill with typhus and died 5 February 1916.',
    },
  ];

  const listOfWorks = [
    {
      date: '1904',
      work: "Man hasn't changed",
    },
    {
      date: '1905',
      work: 'Faith of a Belarusian',
    },
    {
      date: '1905',
      work: "On the New Year's Eve",
    },
    {
      date: '1906',
      work: 'Belarusian violin',
    },
    {
      date: '1906',
      work: 'Cross to the freedom',
    },
    {
      date: '1906',
      work: 'With the banner',
    },
  ];

  const interFace = {
    title: 'Works',
    firstColumnName: 'Date',
    secondColumnName: 'Name',
  };

  const videoId = 'GlYYLSkqG90';

  return (
    <Grid container className={classes.poetAllInfoContainer} justify="center">
      <Paper className={classes.poetAllInfoRoot}>
        <PoetTitle poetInfo={poetInfo} />
        <PoetBiograpyhy poetBio={poetBio} title="Biography" />
        <PoetWorks listOfWorks={listOfWorks} interface={interFace} />
        <PoetVideo videoId={videoId} />
      </Paper>
    </Grid>
  );
};

export default PoetAllInfo;
