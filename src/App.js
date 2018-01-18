import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link ,Route,Switch} from 'react-router-dom';
import {PieChart} from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';
import Content from './Content.js';


let chartData;
let key; 
let value ;
let color;
let x;
let y;
class App extends Component {


    constructor(props)
  {
    super(props)
    this.state={

      Data:[],
      render:''


    }
    this.handleChange = this.handleChange.bind(this);
    this.GeneratePie = this.GeneratePie.bind(this);
    this.GenerateBar = this.GenerateBar.bind(this);
  }

  handleChange(e)
  {
    if(e.target.id=="key")
    key=e.target.value;
    else if(e.target.id=="value")
    value = parseInt(e.target.value);
    else if(e.target.id=="color")
    color = e.target.value;
  else if(e.target.id=="x")
    x=e.target.value;
  else
    y=parseInt(e.target.value);

    
  }

  GeneratePie()
  {
    console.log("key is :",key);
    console.log("value is :",value);
    console.log("color is :",color);

    this.state.Data.push({"key":key,"value":value,"color":color})
    console.log(this.state.pieData);
    this.setState({render:value})
  

  }
  GenerateBar()
  {
    console.log("X",x);
    console.log("y",y);

    this.state.Data.push({"x":x,"y":y})
    this.setState({render:value})
  }



  render() {
    return (
      <div>
      <center>
              <ul className="list-group">
                  <li className="list-group-item"><a><Link to="/bar">Bar Chart</Link></a></li>
                  <li className="list-group-item"><a><Link to="/line">Line Chart</Link></a></li>
                  <li className="list-group-item"><a><Link to="/pie">Pie</Link></a></li>
            
              </ul>
          <hr/>
        <div id="">
          <Content change={this.handleChange} data={this.state.Data} submit={this.GeneratePie} bar={this.GenerateBar}/>
        </div>
      </center>
      </div>
    );
  }
}

export default App;
