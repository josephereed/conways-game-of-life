import React, { useState } from 'react';

interface PropTypes {
  min: number;
  max: number;
  initialValue: number;
  step: number;
  setAttribute: Function;
  propValue?: number;
}

const RangeSlider = ({
  initialValue,
  setAttribute,
  propValue,
  ...sliderProps
}: PropTypes) => {
  const [sliderValue, setSliderValue] = useState<number>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSliderValue(parseInt(e.target.value));
    setAttribute(parseInt(e.target.value));
  };
  return (
    <div>
      <input
        type="range"
        value={propValue}
        onChange={onChange}
        {...sliderProps}
      />
    </div>
  );
};

export default RangeSlider;
