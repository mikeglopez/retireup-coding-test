import React from 'react';

import './styles/App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Table from './components/Table';
import history from './data/history.json';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const sortedData = history.sort((a, b) =>
  a.year > b.year ? 1 : b.year > a.year ? -1 : 0
);

const getMin = sortedData[0].year;
const getMax = sortedData[sortedData.length - 1].year;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allYears: sortedData,
      selectedYears: []
    };

    this.selectYears = this.selectYears.bind(this);
  }

  componentDidMount() {
    if (!this.state.selectedYears.length) {
      this.setState({ selectedYears: this.state.allYears });
    }
  }

  selectYears(values) {
    this.setState({
      selectedYears: this.state.allYears.filter(
        item => item.year >= values[0] && item.year <= values[1]
      )
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>S&amp;P 500 Returns by Year</h1>
          <Range
            min={getMin}
            max={getMax}
            defaultValue={[getMin, getMax]}
            tipFormatter={value => value}
            pushable
            onAfterChange={values => this.selectYears(values)}
          />
        </header>
        <Table data={this.state.selectedYears} allYrs={this.state.allYears} />
      </div>
    );
  }
}

export default App;
