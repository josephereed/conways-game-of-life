//import { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

interface PropTypes {
  min: number;
  max: number;
  initialValue: number;
  step: number;
  setAttribute: Function;
  propValue?: number;
}

const useStyles = makeStyles({
  root: {},
});

function valuetext(value: number) {
  return `${value}°C`;
}

const RangeSlider = ({
  initialValue,
  setAttribute,
  propValue,
  ...sliderProps
}: PropTypes) => {
  const classes = useStyles();
  //const [sliderValue, setSliderValue] = useState<number>(initialValue);

  const onChange = (e: any, value: number): void => {
    //setSliderValue(value);
    setAttribute(value);
  };
  return (
    <Box className={classes.root}>
      {/* <input
        type="range"
        value={propValue}
        onChange={onChange}
        {...sliderProps}
      /> */}
      <Box m={3}>
        <Slider
          value={propValue}
          onChange={(e: any, value: any) => onChange(e, value)}
          //defaultValue={propValue}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          {...sliderProps}
        />
      </Box>
    </Box>
  );
};

export default RangeSlider;
