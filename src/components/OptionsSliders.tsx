import RangeSlider from './RangeSlider';
import { Box, Button, Typography } from '@material-ui/core';

interface PropTypes {
  setSize: (size: number) => void;
  setSpeed: (speed: number) => void;
  speed: number;
  size: number;
  setGeneration: (num: number) => void;
  clear: Function;
}

const OptionsSliders = ({
  setSize,
  setSpeed,
  speed,
  size,
  setGeneration,
  clear,
}: PropTypes) => {
  const sizeSliderConfig = {
    min: 5,
    max: 96,
    step: 1,
  };

  const speedSliderConfig = {
    min: 1,
    max: 60,
    step: 1,
  };
  return (
    <Box>
      <Typography variant="h6">OptionsSliders</Typography>
      <Box m={2}>
        <Typography variant="body2">{`Size: ${size}x${size}`}</Typography>
        <RangeSlider
          {...sizeSliderConfig}
          setAttribute={(num: number) => {
            setSize(num);
            setGeneration(0);
          }}
          initialValue={32}
          propValue={size}
        />
        <Typography variant="body2">{`Speed: ${speed} fps`}</Typography>
        <RangeSlider
          {...speedSliderConfig}
          setAttribute={setSpeed}
          initialValue={30}
          propValue={speed}
        />
      </Box>
      <Button
        color="primary"
        onClick={() => {
          setGeneration(0);
          clear();
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default OptionsSliders;
