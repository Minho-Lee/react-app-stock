import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
import { Row, Col } from 'antd';

class SearchBar extends Component {
	render() {
		return(
			<Row id='search-bar'>
				<Col span={18} offset={2}>
					<Input placeholder='Stock Symbol (ie. BABA)' id='stock-symbol'/>
				</Col>
				<Col span={4} offset={0}>
					<Button type='primary'><Icon type="search" /></Button>
				</Col>
			</Row>
		);
	}
}

export default SearchBar;