import React from 'react';

const YearRow = props => {
  return (
    <tr>
      <td>{props.year}</td>
      <td style={props.total < 0 ? { color: '#FF0000' } : {}}>{props.total}</td>
      <td style={props.cumulative < 0 ? { color: '#FF0000' } : {}}>
        {props.cumulative}
      </td>
    </tr>
  );
};

export default YearRow;
