import React from 'react';
import {LineChart} from 'react-easy-chart';

class Linechart extends React.Component
{
	render(){



		return(

				<div>
					  <LineChart
					    data={[
					      [
					        { x: 1, y: 20 },
					        { x: 2, y: 10 },
					        { x: 3, y: 25 }
					      ]
					    ]}
					  />
								
				</div>

			)
	}
}