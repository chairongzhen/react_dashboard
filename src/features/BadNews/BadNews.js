/*
 * @Author: hcluo
 * @Date: 2020-06-21 11:14:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 12:57:07
 * @Description: 政府项目
 */

/*
 * @Author: hcluo
 * @Date: 2020-06-21 11:14:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 12:51:57
 * @Description: 政府项目
 */

import React from 'react';
import './style.less';
import { MonitorSvg, DownSvg } from './components';
import { WindChart } from '../../components';
import option1_2 from './option1_2';
import option1_3_ciyun from './option1_3_ciyun';
import option1_3_total from './option1_3_total';
// import detailData from '../../data/detail.json';
// import { calInduBondByMonth } from  '../../utils/dataHandle';

const BadNews = props => {	
	return (
		<div className="w_grid_container w_badnews">
			<div className="w_row_1 w_mainbox_column_panel">
				<div className="w_row1_1">
					<div className="w_row1_2_01">
						<MonitorSvg />
					</div>
					<div className="w_row1_2_02">
						<div className="w_row1_2_1">
							<div className="w_row1_2_1_1">负面舆情指数:</div>
							<div className="w_row1_2_1_2">
								<span className="w_font_number">8.322</span>次/万家
						</div>
						</div>
						<div className="w_row1_2_2">
							<div className="w_row1_2_2_1">
								环比:
						</div>
							<div className="w_row1_2_2_2">
								-38.3&nbsp;
							<DownSvg />
							</div>
						</div>
					</div>

				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row_2 w_mainbox_column_panel bar_company">
				<h2>负面舆情统计</h2>
				<div className="w_chart">
					<WindChart option={option1_2} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row_1 w_mainbox_column_panel wordcloud_company">
				<div className="w_chart" style={{height: "450px"}}>
					<WindChart option={option1_3_ciyun} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row_2 w_mainbox_column_panel circle_company">
				<h2>舆情类别分布</h2>
				<div className="w_chart">
					<WindChart option={option1_3_total} />
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
		</div>
	);
};

export default BadNews;
