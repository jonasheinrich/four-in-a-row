import React from 'react';

const Field = props => {
  var value = '';
  if (props.stone == 1) {
    value = '\u25EF'
  } else if (props.stone == -1) {
    value = '\u25A2'
  }

  return(
    <div>
      {value}
    </div>
  );
}

export default Field;
