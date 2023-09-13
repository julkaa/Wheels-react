import './slider.component.scss'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from "@mui/material/Slider";
export default function ValueSlider(props){
    const [value, setValue] = React.useState([props.min, props.max]);
    function valuetext(value) {
        return `${value}°C`;
      }
  const handleChange = (event, newValue) => {
    console.log(newValue)
    if(props.onChange != null){
      props.onChange(newValue);
    }
    setValue(newValue);
  };

  return (
    <Box sx={{ width: props.width }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={props.min}
        max={props.max}
      />
    </Box>
  );
}