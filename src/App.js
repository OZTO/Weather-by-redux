import React, {Component} from 'react';

import {view as CitySelector} from './city_selector/';
import {view as Weather} from './weather/';

const wrapStyle = {
	width: '100%',
	height: '100%',
	background: '#9fc5e8',
	color: '#ff00ff',
	fontSize: 30,
	padding: '140px 0',
	textAlign: 'center'
};

const titleStyle = {
	fontSize: '50px',
	letterSpacing: '40px'
}

class App extends Component {
	render() {
		return (
			<div style={wrapStyle}>
				<span style={titleStyle}>热门城市天气查询</span>
			    <CitySelector />
			    <Weather />
			</div>
		);
	}
}

export default App;