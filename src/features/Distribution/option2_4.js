/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:00:36
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data2_4 from '../../data/2_4.json';

var data = dataHandle(data2_4, [
	{
		sourceKey: 'industryName',
		distKey: 'name',
	},
	{
		sourceKey: 'TotalMarket',
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
			{
				type: 'toNumber',
			},
		],
	},
]);
// 2. 指定配置和数据
let option = {
	// color: themeColor,
	tooltip: {},
	calculable: false,
	series: [
		{
			name: '行业分布',
			id: 'unit(亿元)',
			type: 'treemap',
			nodeClick: false,
			breadcrumb: {
				show: false,
			},
			// itemStyle: {
			// 	// normal: {
			// 	// 	label: {
			// 	// 		show: true,
			// 	// 		formatter: '{b}',
			// 	// 	},
			// 	// 	borderWidth: 1,
			// 	// },
			// 	color: '#3396E3',
			// 	shadowBlur: 200,
			// 	shadowColor: 'rgba(0, 0, 0, 0.5)',
			// },
			data,

			// label: {
			// 	color: 'rgba(255, 255, 255, 0.3)',
			// },
			labelLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)',
				},
				smooth: 0.2,
				length: 10,
				length2: 20,
			},
			itemStyle: {
				shadowBlur: 10,
				shadowColor: 'rgba(0, 0, 0, 0.5)',
			},

			// emphasis: {
			// 	itemStyle: {
			// 		color: 'grey',
			// 	},
			// },
			label: {
				// color: 'rgb(0, 0, 0)',
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			},
		},
	],
};
export default option;
