import { useState } from 'react';
import '../styles/PatternSelector.css';
import { Box, Typography } from '@material-ui/core';

const patterns = [
  {
    name: '101',
    size: 32,
  },
  { name: '119P4H1V0', size: 64 },
  { name: '25P3H1V01', size: 32 },
  { name: '295P5H1V1', size: 64 },
  { name: '70P5H2V0', size: 32 },
  { name: '60P312', size: 64 },
  { name: 'achimsp144', size: 64 },
  { name: 'GosperGliderGun', size: 64 },
  { name: 'LoneDotAgar', size: 64 },
  { name: 'MultipleRoteightors', size: 64 },
  { name: 'PiPortraitor', size: 64 },
  { name: 'Quasar', size: 64 },
];

interface PropTypes {
  setGridConfig: Function;
  setGrid: Function;
  initializeGrid: Function;
  setSize: Function;
}

const PatternSelector = ({ setGridConfig, setSize }: PropTypes) => {
  const [highlighted, setHighlighted] = useState('');
  return (
    <Box>
      <div className="pattern-wrapper">
        <Typography variant="h6">Famous Patterns</Typography>
        <ul>
          {patterns.map((pattern) => (
            <li
              style={{
                cursor: 'pointer',
                color: `${pattern.name === highlighted ? '#1e88e5' : ''}`,
              }}
              key={pattern.name}
              onClick={() => {
                setSize(pattern.size);
                setGridConfig(pattern.name, pattern.size);
                setHighlighted(pattern.name);
              }}
            >
              <Typography variant="body2">{pattern.name}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default PatternSelector;
