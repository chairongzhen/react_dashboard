/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:52:00
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data3_4 from '../../data/3_4.json';

var dataDown = dataHandle(data3_4.down, [
	{
		sourceKey: 'value',
		rule: [
			{
				type: 'divide',
				argus: 100000000,
			},
			{
				type: 'divide',
				argus: -1,
			},
			{
				type: 'toFixed',
				argus: 2,
			},
		],
	},
	{
		sourceKey: 'name',
	},
]).sort((a, b) => b.value - a.value);

var dataUp = dataHandle(data3_4.up, [
	{
		sourceKey: 'value',
		rule: [
			{
				type: 'divide',
				argus: 100000000,
			},
			{
				type: 'toFixed',
				argus: 2,
			},
		],
	},
	{
		sourceKey: 'name',
	},
]).sort((a, b) => a.value - b.value);

const option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
		},
	},
	grid: [
		{
			left: '51%',
			top: '10px',
			bottom: '30px',
			gridIndex: 0,
			containLabel: true,
		},
		{
			right: '51%',
			top: '10px',
			bottom: '30px',
			containLabel: true,
			gridIndex: 1,
		},
	],
	legend: {
		bottom: 0,
	},
	yAxis: [
		{
			gridIndex: 0,
			type: 'category',
			data: dataUp.map(i => i.name),
			axisTick: {
				alignWithLabel: false,
			},
			axisLabel: {
				textStyle: {
					color: 'white',
					fontSize: '14',
				},
			},
			axisLine: {
				show: false,
			},
		},
		{
			gridIndex: 1,
			position: 'right',
			type: 'category',
			inverse: true,
			data: dataDown.map(i => i.name),
			axisTick: {
				alignWithLabel: false,
			},
			axisLabel: {
				textStyle: {
					color: 'white',
					fontSize: '14',
				},
			},
			axisLine: {
				show: false,
			},
		},
	],
	xAxis: [
		{
			gridIndex: 0,
			type: 'value',
			name: '亿元',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
			nameLocation: 'start',
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12',
				},
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,.1)',
				},
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255,255,255,.1)',
				},
			},
			axisTick: {
				show: false,
			},
		},
		{
			gridIndex: 1,
			inverse: true,
			type: 'value',
			name: '亿元',
			nameLocation: 'start',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
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
				lineStyle: {
					color: 'rgba(255,255,255,.1)',
				},
			},
			axisTick: {
				show: false,
			},
		},
	],
	series: [
		{
			name: '下降',
			id: 'unit(亿元)1',
			xAxisIndex: 1,
			yAxisIndex: 1,
			type: 'bar',
			barWidth: '35%',
			data: dataDown,
			itemStyle: {
				color: '#36D139',
			},
		},
		{
			name: '增长',
			id: 'unit(亿元)2',
			type: 'bar',
			barWidth: '35%',
			data: dataUp,
			itemStyle: {
				color: '#CE2121',
			},
		},
	],
};

export default option;
