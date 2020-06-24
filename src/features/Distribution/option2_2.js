/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:08:07
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data2_2 from '../../data/2_2.json';

var data = dataHandle(data2_2, [
	{
		sourceKey: 'CompanyType',
		distKey: 'name',
	},
	{
		sourceKey: 'CompaniesAmount',
		distKey: 'value',
	},
]).sort(function (b, a) {
	return a.value - b.value;
});

// 指定配置和数据
var option = {
	tooltip: {},
	// color: themeColor,
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
			name: '交易场所',
			type: 'pie',
			radius: ['50%', '80%'],
			center: ['50%', '50%'],
			data,
			label: {
				show: false,
				color: 'rgba(255, 255, 255, 0.3)',
				fontSize: 12,
			},
			labelLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)',
				},
				smooth: 0.2,
				length: 10,
			},
			// itemStyle: {
			// 	color: '#3396E3',
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
