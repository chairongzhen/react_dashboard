/*
 * @Author: hcluo
 * @Date: 2020-06-21 11:14:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:06:17
//  * @Description: 政府项目
 */

import React from 'react';
import './style.less';

import { WindChart } from '../../components';
import option2_1 from './option2_1';
import option2_2 from './option2_2';
import option2_3 from './option2_3';
import option2_4 from './option2_4';

const Distribution = props => {
	return (
		<div className="w_grid_container w_dist">
			<div className="w_row1_div1 w_mainbox_column_panel tree_company">
				<h2>行业分布</h2>
				<div className="w_chart" id="mychart">
					<WindChart option={option2_4} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row1_div2 w_mainbox_column_panel rose_company">
				<h2>企业性质分布 </h2>
				<div className="w_chart">
					<WindChart option={option2_1} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row2_div1 w_mainbox_column_panel bar_listedcompany">
				<h2>盈利能力(ROE)</h2>
				<div className="w_chart">
					<WindChart option={option2_3} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row2_div2 w_mainbox_column_panel pie">
				<h2>交易场所分布</h2>
				<div className="w_chart">
					<WindChart option={option2_2} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
		</div>
	);
};

export default Distribution;
