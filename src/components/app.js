import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class App extends Component {
	onChange(date, dateString) {
		console.log(date, dateString);
	}
	render() {
		const { MonthPicker, RangePicker } = DatePicker;
		return (
			<div>
				<h2>Ant Design Attempt</h2>
				<Row>
					<Col className='gutter-row' span={12}>
						<div className='gutter-box'>
							<DatePicker onChange={this.onChange}/>
						</div>
					</Col>
					<Col span={12}><MonthPicker onChange={this.onChange} placeholder='Select month'/></Col>
				</Row>
				<Row>
					<RangePicker 
						onChange={this.onChange}
						ranges={{'This Month': [moment(), moment().endOf('month')] }}
					/>
				</Row>
			</div>
		);
	}
}
