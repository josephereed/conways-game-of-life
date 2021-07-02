import { useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { nextGen } from '../logic/lifeAlgorithm';
import { useState, useCallback } from 'react';

import Cell from './Cell';

interface LifeGridState {
  alive: boolean;
}

interface PropTypes {
  gridSize: number;
  pattern: any;
  setGrid: Function;
  setGeneration: Function;
  generation: number;
  toggleLife: Function;
}

const LifeGrid = ({
  gridSize,
  pattern,
  setGrid,
  generation,
  setGeneration,
  toggleLife,
}: PropTypes) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        justifyContent: 'center',
      },
    })
  );
  const classes = useStyles();
  const [boardState, setBoardState] = useState<LifeGridState>({
    alive: false,
  });
  function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
      setTick((tick) => tick + 1);
    }, []);
    return update;
  }

  // need following to resize grid in place
  useEffect(() => {
    initializeGrid();
    //eslint-disable-next-line
  }, [gridSize]);

  const initializeGrid = () => {
    const newBoardState: number[][] = [];
    for (let i = 0; i < gridSize; i++) {
      newBoardState.push([]);
      for (let j = 0; j < gridSize; j++) {
        newBoardState[i].push(0);
      }
    }
    setGrid(newBoardState);
  };

  const renderBoard = (pattern: number[][]) => {
    const cellSize = Math.round(600 - 2 * gridSize) / gridSize;
    return (
      <>
        {pattern &&
          pattern.map((row, iIndex) => {
            return (
              <div
                key={iIndex}
                style={{
                  width: '600',
                  display: 'inline-block',
                }}
              >
                {row.map((column, jIndex) => {
                  return (
                    <Cell
                      key={jIndex}
                      size={cellSize}
                      alive={column ? true : false}
                    />
                  );
                })}
              </div>
            );
          })}
      </>
    );
  };

  const playButton = (): any => {
    setGeneration(generation + 1);
    setGrid(nextGen(pattern));
  };

  const onClick = () => {
    for (
      let i = 0;
      i < 100;
      setTimeout(() => {
        i++;
      }, 100)
    ) {
      playButton();
    }
  };

  return (
    <Box className={classes.root}>
      {renderBoard(pattern)}
      <Typography>{`Generation: ${generation}`}</Typography>
      <Box>
        <Button color="primary" onClick={onClick}>
          Play
        </Button>
        <Button color="primary" onClick={playButton}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default LifeGrid;
