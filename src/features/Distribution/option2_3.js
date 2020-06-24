/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:02:46
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data2_3 from '../../data/2_3.json';

var data = dataHandle(data2_3, [
	{
		sourceKey: 'roe',
		distKey: 'name',
	},
	{
		sourceKey: 'rate',
		distKey: 'value',
	},
]);

var option = {
	// color: ['#6be6c1'],
	tooltip: {},
	grid: {
		top: 0,
		bottom: 0,
	},
	// 78,36,250; 104,68,250; 155,133,253; 197,183,253; 231,226,254;  253,253,255
	// 114,11,241 ; 130,38,242;  163,95,246;  198,155,249;  225,203,252;  247,241,254
	color: [
		'rgba(197,183,253, 1)',
		'rgba( 155,133,253, 1)',
		'rgba(104,68,250, 1)',
		'rgba(78,36,250, 1)',

		'rgba(114,11,241, 1)',
		'rgba(130,38,242, 1)',
		'rgba( 163,95,246, 1)',
		'rgba(198,155,249, 1)',
		'rgba(253,253,255, 1)',
		'rgba(231,226,254, 1)',
	],
	series: [
		{
			name: '盈利能力',
			id: 'unit(%)',
			sort: 'none',
			type: 'funnel',
			left: '25%',
			width: '50%',
			label: {
				position: 'right',
				fontSize: 12,
				color: 'rgba(255, 255, 255, 0.5)',
			},
			labelLine: {
				length: 100,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)',
				},
			},
			data,
		},
	],
};
export default option;
