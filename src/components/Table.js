import React from 'react';

import '../styles/App.css';
import YearRow from './YearRow';

const Table = props => {
  let cumulative = 0;

  const content = props.data.map(row => {
    cumulative += Number(row.totalReturn);
    return (
      <YearRow
        year={row.year}
        total={row.totalReturn}
        cumulative={cumulative.toFixed(2)}
        key={row.year}
      />
    );
  });

  return (
    <table className='returnsTable'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Return</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

export default Table;
