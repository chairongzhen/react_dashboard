/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:53:44
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data1_2 from '../../data/1_2.json';

let data = dataHandle(data1_2, [
	{
		sourceKey: 'time',
		distKey: 'name',
	},
	{
		sourceKey: 'value',
		distKey: 'value',
	},
]);

// 指定配置和数据
var option = {
	tooltip: {},
	grid: {
		left: '0%',
		top: '10px',
		right: '0%',
		bottom: '4%',
		containLabel: true,
	},
	xAxis: [
		{
			type: 'category',
			data: data.map(i => i.name),
			axisTick: {
				alignWithLabel: true,
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
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12',
				},
			},
			axisLine: {
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
	// legend: {
	// 	bottom: 0,
	// },
	series: [
		{
			id: 'unit(次)',
			color: {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [
					{
						offset: 0,
						color: '#69F5BB',
						// 0% 处的颜色
					},
					{
						offset: 1,
						color: '#12BBF0', // 100% 处的颜色
					},
				],
				global: false, // 缺省为 false
			},
			name: '负面舆情统计',
			type: 'bar',
			barWidth: '35%',
			data,
		},
	],
};
export default option;
