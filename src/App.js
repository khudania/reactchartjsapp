import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

class App extends Component {

  constructor(){
    super();
    this.state ={
      chartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Bengaluru', 'Mysore', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere'],
        datasets: [
            {
                label: 'Population',
                data:[
                    8520435,
                990900,
                623841,
                610350,
                543147,
                434971
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 253, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 99, 132, 0.9)'
                ]
            }
        ]
    }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
