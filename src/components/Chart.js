import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            chartData: props.chartData
        }
    }


    static defaultProps ={
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        
    }
   
   
    render(){
        return(
            <div className="chart">
                <Bar
                data ={this.state.chartData}
                //width = {100}
                height ={100}
                options ={{
                    title: {
                        display: this.props.displayTitle,
                        text: 'Karnataka Big Cities Population as of 2011',
                        fontSize: 25
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        labels: {
                            fontColor: '#000'
                        }
                    }
                }} />
            </div>
        )
    }
}

export default Chart;