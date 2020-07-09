import React from 'react';

const YearRow = props => {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.total}</td>
      <td>{props.cumulative}</td>
    </tr>
  );
};

export default YearRow;
