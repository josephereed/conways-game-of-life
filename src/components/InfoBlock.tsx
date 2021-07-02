import { Typography } from '@material-ui/core';

const InfoBlock = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Typography variant="h6">
        What is Game of Life? (from wikipedia)
      </Typography>
      <br />
      <Typography variant="body1">
        The Game of Life, also known simply as Life, is a cellular automaton
        devised by the British mathematician John Horton Conway in 1970. It is a
        zero-player game, meaning that its evolution is determined by its
        initial state, requiring no further input. One interacts with the Game
        of Life by creating an initial configuration and observing how it
        evolves.
      </Typography>
      <br />
      <strong>Rules:</strong>
      <ul>
        <li>
          Any live cell with fewer than two live neighbors dies, as if by
          under-population.
        </li>
        <li>
          Any live cell with two or three live neighbors live on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three neighbors dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </li>
      </ul>
      <br />
      <strong>Rules:</strong>
      <ul>
        <li>
          Use your mouse to draw an initial state. Or pick one of the existing
          ones from the Patterns menu.
        </li>
        <li>Click play to see the system evolving.</li>
        <li>Next button shows the next frame.</li>
        <li>
          You can change the size and speed in the corresponding menu. Changing
          the size resets the board.
        </li>
      </ul>
      <br />
      <em>
        Credits:{' '}
        <a href="https://conwaylife.com/ref/lexicon/lex.htm">
          https://conwaylife.com/ref/lexicon/lex.htm
        </a>
      </em>
    </div>
  );
};

export default InfoBlock;
