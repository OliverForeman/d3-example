import { useState } from 'react';

export default initValue => {
  const [value, setValue] = useState(initValue);

  const handleValueChange = e => setValue(Number(e.target.value));

  return {
    value,
    onChange: handleValueChange
  };
};
