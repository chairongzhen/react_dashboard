/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 18:20:20
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data3_3 from '../../data/3_3.json';

var data = dataHandle(data3_3, [
	{
		sourceKey: 'time',
		distKey: 'name',
	},
	{
		sourceKey: 'TotalMarket',
		distKey: 'value',
		rule: [
			{ type: 'divide', argus: 100000000 },
			{ type: 'toFixed', argus: 2 },
		],
	},
	{
		sourceKey: 'companyNum',
		distKey: 'companyNum',
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
			max: 38000,
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12',
				},
			},

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
		{
			type: 'value',
			name: '家',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
			max: 200,
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
		{
			name: '企业家数',
			id: 'unit(家)',
			type: 'bar',
			barWidth: '35%',
			yAxisIndex: 1,
			data: volumeData,
		},
	],
};

export default option;
