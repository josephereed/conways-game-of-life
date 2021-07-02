import { useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { nextGen } from '../logic/lifeAlgorithm';
import { useState, useCallback } from 'react';

import Cell from './Cell';

interface PropTypes {
  gridSize: number;
  pattern: any;
  setGrid: Function;
  setGeneration: Function;
  generation: number;
  speed: number;
}

const LifeGrid = ({
  gridSize,
  pattern,
  setGrid,
  generation,
  setGeneration,
  speed,
}: PropTypes) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        justifyContent: 'center',
      },
    })
  );
  const classes = useStyles();
  const [alive, setAlive] = useState(false);

  // need following to resize grid in place
  useEffect(() => {
    initializeGrid();
    //eslint-disable-next-line
  }, [gridSize]);

  useEffect(() => {
    if (alive) {
      setTimeout(() => {
        setGeneration((prev: any) => prev + 1);
        setGrid((prev: any) => nextGen(prev));
      }, 1000 / speed);
    }
  }, [generation]);

  // const initializeGrid = () => {
  //   const newBoardState: number[][] = [];
  //   for (let i = 0; i < gridSize; i++) {
  //     newBoardState.push([]);
  //     for (let j = 0; j < gridSize; j++) {
  //       newBoardState[i].push(0);
  //     }
  //   }
  //   setGrid(newBoardState);
  // };
  const initializeGrid = () => {
    if (pattern.length < gridSize) {
      if (pattern.length === gridSize) {
        return setGrid(pattern);
      }
      const newPattern: number[][] = pattern;
      // add columns
      for (let row of pattern) {
        while (row.length < gridSize) {
          row.unshift(0);
          row.push(0);
          if (gridSize - row.length === 1) {
            row.unshift(0);
          }
        }
      }

      // add rows
      while (newPattern.length < gridSize) {
        newPattern.unshift(new Array(gridSize).fill(0));
        newPattern.push(new Array(gridSize).fill(0));
        if (gridSize - newPattern.length === 1) {
          newPattern.unshift(new Array(gridSize).fill(0));
        }
      }
    }

    if (pattern.length > gridSize) {
      const newBoardState: number[][] = [];
      for (let i = 0; i < gridSize; i++) {
        newBoardState.push([]);
        for (let j = 0; j < gridSize; j++) {
          newBoardState[i].push(0);
        }
      }
      setGrid(newBoardState);
    }
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

  const nextButton = () => {
    setGeneration(generation + 1);
    setGrid(nextGen(pattern));
  };

  const onClick = () => {
    setAlive(!alive);
    nextButton();
  };

  return (
    <Box className={classes.root}>
      {renderBoard(pattern)}
      <Typography>{`Generation: ${generation}`}</Typography>
      <Box>
        <Button color="primary" onClick={onClick}>
          {alive ? 'pause' : 'play'}
        </Button>
        <Button color="primary" onClick={nextButton}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default LifeGrid;
