/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:07:22
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data2_1 from '../../data/2_1.json';

var data = dataHandle(data2_1, [
	{
		sourceKey: 'EnterpriseNature',
		distKey: 'name',
	},
	{
		sourceKey: 'TotalMarket',
		distKey: 'value',
		rule: [
			{
				type: 'divide',
				argus: 1000000,
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
]).sort(function (b, a) {
	return a.value - b.value;
});

// 指定配置和数据
var option = {
	// color: themeColor,
	tooltip: {},
	legend: {
		// bottom: 0,
		orient: 'vertical',
		right: 0,
		y: 'center',
		textStyle: {
			color: 'white',
		},
	},
	series: [
		{
			name: '企业性质',
			type: 'pie',
			radius: '80%',
			center: ['50%', '50%'],
			data,
			roseType: 'radius',
			label: {
				show: false,
				color: 'rgba(255, 255, 255, 0.3)',
				fontSize: 12,
			},
			// labelLine: {
			// 	lineStyle: {
			// 		color: 'rgba(255, 255, 255, 0.3)',
			// 	},
			// 	smooth: 0.2,
			// 	length: 10,
			// 	length2: 20,
			// },
			// itemStyle: {
			// 	shadowBlur: 200,
			// 	shadowColor: 'rgba(0, 0, 0, 0.5)',
			// },

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			},
		},
	],
};

export default option;
