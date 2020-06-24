/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 14:05:50
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data4_2 from '../../data/4_2.json';

var data = dataHandle(data4_2, [
	{
		sourceKey: 'enterpriseNature',
		distKey: 'name',
	},
	{
		sourceKey: 'bondNum',
		distKey: 'value',
	},
]).sort(function (b, a) {
	return b.value - a.value;
});
var option = {
	tooltip: {},

	// visualMap: {
	// 	show: false,
	// 	min: 80,
	// 	max: 600,
	// 	inRange: {
	// 		colorLightness: [0, 1],
	// 	},
	// },
	// color: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8'],

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
			},
			labelLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)',
				},
				smooth: 0.2,
				length: 10,
				length2: 20,
			},
			itemStyle: {
				shadowBlur: 200,
				shadowColor: 'rgba(0, 0, 0, 0.5)',
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
