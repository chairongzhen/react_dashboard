/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-23 14:18:01
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import trend from '../../data/trend.json';

var data = dataHandle(trend, [
	{
		sourceKey: 'time',
		distKey: 'name',
	},
	{
		sourceKey: 'issueSize',
		distKey: 'value',
		rule: [
			// { type: 'divide', argus: 10000 },
			{ type: 'toFixed', argus: 2 },
		],
	},
	{
		sourceKey: 'compNum',
		distKey: 'companyNum',
	},
]);

var xAxisData = data.map(item => item.name);

var volumeData = data.map(item => item.companyNum);

// 2. 指定配置项和数据  -73965812029.03
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
	xAxis: {
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
	yAxis: [
		{
			type: 'value',
			name: '亿元',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
			// max: 38000,
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
			// max: 200,
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
			name: '发行量',
			id: 'unit(亿元)',
			type: 'line',
			barWidth: '35%',
			data,

			emphasis: {
				itemStyle: { opacity: 1 },
			},
			// itemStyle: { opacity: 0.5 },
		},
		{
			name: '发债只数',
			id: 'unit(只)',
			type: 'bar',
			barWidth: '35%',
			yAxisIndex: 1,
			data: volumeData,
			emphasis: {
				itemStyle: { opacity: 1 },
			},
			// itemStyle: { opacity: 0.5 },
		},
	],
};

var json = {
	sectorId: '0301010112',
	TotalMarket: 3174664996500.83,
	LastYearTotalMarket: 3100699184471.8,
	rise: -73965812029.03,
	riseRate: -2.39,
};

export default option;
