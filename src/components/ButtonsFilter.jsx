import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export function ToggleButtonGroupControlled({onClick}) {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1} onClick={() => onClick('all')}>
        All
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2} onClick={() => onClick('movie')}>
        Movies
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3} onClick={() => onClick('tv')}>
        TV shows
      </ToggleButton>
    </ToggleButtonGroup>
  );
}