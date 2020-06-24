/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-22 11:17:39
 * @Description: 政府项目
 */

import data4_1 from '../../data/4_1.json';

var data = data4_1.sort((a, b) => b.value - a.value);
let option = {
	tooltip: {},
	// color: themeColor,
	legend: {
		// bottom: 0,
		orient: 'vertical',
		left: 0,
		y: 'center',
		textStyle: {
			color: 'white',
		},
	},
	series: {
		name: '债券类型',

		type: 'pie',
		radius: ['50%', '80%'],
		center: ['50%', '50%'],
		itemStyle: {
			borderColor: 'rgba(0, 0, 0, 0)',
			borderWidth: 10,
		},
		highlightPolicy: 'ancestor',
		data,
		label: {
			show: false,
			color: 'rgba(255, 255, 255, 0.3)',
		},
		animationType: 'scale', // 'expansion',
		animationEasing: 'elasticOut',
		// animationDurationUpdate: 1000,
		// animationDelayUpdate: function (idx) {
		// 	// 越往后的数据延迟越大
		// 	return idx * 500;
		// },
		animationDelay: function (idx) {
			return idx * 500;
		},
	},
};
export default option;
