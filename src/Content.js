import React from 'react';
import {Link ,Route,Switch} from 'react-router-dom';
import {BarChart ,LineChart ,PieChart} from 'react-easy-chart';




class Content extends React.Component
{

	constructor(props)
	{
		super(props)
		this.state={

			pieData:[]

		}

	}



	componentDidUpdate()
	{
		console.log(this.state);
	}




	render(){


		return(

         <div>

         <span>Key<input type="text" id="key" onChange={this.props.change}/></span>
         <span>Value<input type="text" id="value" onChange={this.props.change}/></span>
         <span>Color code<input type="text" id="color" onChange={this.props.change}/></span>
         <button onClick={this.props.submit}>Submit</button>
         <hr/>
         <span>Key<input type="text" id="x" onChange={this.props.change}/></span>
         <span>Value<input type="text" id="y" onChange={this.props.change}/></span>
         <button onClick={this.props.bar}>Bar Chart</button>
         

            <Switch>
              <Route path='/bar' render={()=> 
              								<BarChart
              								axes
    										height={250}
   											width={650}
										    data={this.props.data}
										  />}/>

            <Route path='/line' render={()=> 
				  <LineChart
				    axes
				    width={250}
				    height={250}
				    data={[
				      [
				        { x: 1, y: 20 },
				        { x: 2, y: 10 },
				        { x: 3, y: 25 }
				      ], [
				        { x: 1, y: 10 },
				        { x: 2, y: 12 },
				        { x: 3, y: 4 }
				      ]
				    ]}
				  />}/>
			<Route path='/pie' render={()=> 
				  <PieChart
				    labels
				    data={this.props.data}
				    styles={{
				      '.chart_text': {
				        fontSize: '1em',
				        fill: '#fff'
				      }
				    }}
				  />}/>
				            
            
            </Switch>
          </div>


			)
	}
}

export default Content