import React from 'react';

import './styles/App.css';
import Table from './components/Table';
import history from './data/history.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allYears: history,
      selectedYears: []
    };
  }

  componentDidMount() {
    if (!this.state.selectedYears.length) {
      this.setState({ selectedYears: this.state.allYears });
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>S&amp;P 500 Returns by Year</h1>
        </header>
        <Table data={this.state.selectedYears} />
      </div>
    );
  }
}

export default App;
