import { useState } from 'react';
import './App.css';
import InfoBlock from './components/InfoBlock';
import LifeGrid from './components/LifeGrid';
import OptionsSliders from './components/OptionsSliders';
import PatternSelector from './components/PatternSelector';
import { Container, Grid, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import patterns from './logic/patternsReady';
import type { Pattern } from './types/Pattern';

const App = () => {
  const [size, setSize] = useState<number>(32);
  const [speed, setSpeed] = useState<number>(30);
  const [grid, setGrid] = useState<number[][] | null>(patterns['blank']);
  const [generation, setGeneration] = useState<number>(0);

  const setGridConfig = (name: Pattern, size: number) => {
    setSize(size);
    setGrid(patterns[name]);
    setGeneration(0);
  };

  const initializeGrid = (gridSize: number) => {
    const newBoardState: number[][] = [];
    for (let i = 0; i < gridSize; i++) {
      newBoardState.push([]);
      for (let j = 0; j < gridSize; j++) {
        newBoardState[i].push(0);
      }
    }
    setGrid(newBoardState);
    return gridSize;
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      fill: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: '290px',
      },
      fillPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '290px',
      },
    })
  );

  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        <Grid item sm={12} md={8}>
          <Paper className={classes.paper}>
            <LifeGrid
              gridSize={size}
              pattern={grid}
              setGrid={setGrid}
              generation={generation}
              setGeneration={setGeneration}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <PatternSelector
                  setGridConfig={setGridConfig}
                  setGrid={setGrid}
                  initializeGrid={initializeGrid}
                />
              </Paper>
            </Grid>
            <Grid item className={classes.fill}>
              <Paper className={classes.fillPaper}>
                <OptionsSliders
                  setSpeed={setSpeed}
                  setSize={setSize}
                  size={size}
                  speed={speed}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <InfoBlock />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
