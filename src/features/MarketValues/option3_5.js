/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 17:46:14
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data3_5 from '../../data/3_5.json';

var data = dataHandle(data3_5, [
	{
		sourceKey: 'time',
		distKey: 'name',
	},
	{
		sourceKey: 'value',
		distKey: 'value',
		rule: [
			{ type: 'divide', argus: 100000000 },
			{ type: 'toFixed', argus: 2 },
		],
	},
]);

var xAxisData = data.map(item => item.name);

var volumeData = data.map(item => item.companyNum);

// 2. 指定配置项和数据
var option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
		},
	},
	grid: {
		left: '0%',
		top: '30px',
		right: '0%',
		bottom: '30px',
		containLabel: true,
	},
	legend: {
		bottom: 0,
	},
	xAxis: [
		{
			type: 'category',
			data: xAxisData,
			axisTick: {
				alignWithLabel: false,
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12',
				},
			},
			axisLine: {
				show: false,
			},
		},
	],
	yAxis: [
		{
			type: 'value',
			name: '亿元',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12',
				},
			},
			min: 25000,
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,.1)',
					// width: 1,
					// type: "solid"
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,.1)',
				},
			},
		},
	],
	series: [
		{
			name: '总市值',
			id: 'unit(亿元)',
			type: 'line',
			barWidth: '35%',
			data,
			// itemStyle: {
			//
			// },
		},
	],
};

export default option;
