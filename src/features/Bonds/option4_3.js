/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-22 11:07:01
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data4_3 from '../../data/4_3.json';

let data = dataHandle(data4_3, [
	{
		sourceKey: 'industryName',
		distKey: 'name',
	},
	{
		sourceKey: 'bondNum',
		distKey: 'value',
		rule: [
			{
				type: 'divide',
				argus: 100000000,
			},
			{
				type: 'toFixed',
				argus: 2,
			},
		],
	},
]);

// 2. 指定配置和数据
let option = {
	tooltip: {},
	calculable: false,
	// color: themeColor,
	series: {
		name: '行业分布',
		id: 'unit(亿元)',
		type: 'treemap',
		nodeClick: false,
		breadcrumb: {
			show: false,
		},
		// itemStyle: {
		// 	color: '#c23531',
		// 	shadowBlur: 10,
		// 	shadowColor: 'rgba(0, 0, 0, 0.5)',
		// },
		data,
	},
};
export default option;
