/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-22 14:10:48
 * @Description: 政府项目
 */

import data3_2 from '../../data/3_2.json';

var option = {
	color: ['#4570FA', 'grey'],
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			animation: false,
			type: 'cross',
			lineStyle: {
				color: '#376df4',
				opacity: 0.5,
				width: 2,
			},

			crossStyle: {
				type: 'solid',
			},
		},
		formatter: function (params) {
			var relVal = params[0].name;
			for (var i = 0; i < params.length; i++) {
				let marker =
					typeof params[i].color === 'string'
						? params[i].marker
						: `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[i].color.colorStops[0].color};"></span>`;
				relVal += '<br/>' + marker + params[i].seriesName + ' : ' + params[i].data.index;
			}
			return relVal;
		},
	},
	grid: {
		left: '0%',
		top: '30px',
		right: '0%',
		bottom: '50px',
		containLabel: true,
	},
	legend: {
		top: 0,
		right: '3%',
	},
	xAxis: [
		{
			type: 'category',
			data: data3_2.date,
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
			axisPointer: {
				lineStyle: {
					color: 'grey',
					opacity: 0.5,
					width: 1,
				},
			},
		},
	],
	yAxis: [
		{
			type: 'value',
			max: 300,
			name: '%',
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
			position: 'right',
			name: '%',
			nameTextStyle: {
				color: 'rgba(255,255,255,.6)',
			},
			max: 300,
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
		},
	],
	dataZoom: [
		{
			textStyle: {
				color: '#8392A5',
			},
			handleIcon:
				'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			handleSize: '80%',
			dataBackground: {
				areaStyle: {
					color: '#8392A5',
				},
				lineStyle: {
					opacity: 0.8,
					color: '#8392A5',
				},
			},
			handleStyle: {
				color: '#fff',
				shadowBlur: 3,
				shadowColor: 'rgba(0, 0, 0, 0.6)',
				shadowOffsetX: 2,
				shadowOffsetY: 2,
			},
		},
		{
			type: 'inside',
		},
	],
	series: [
		{
			yAxisIndex: 1,
			name: '浦东新区指数',
			type: 'line',
			data: data3_2.puDongIndex,
			// itemStyle: {
			// 	color: 'grey',
			// },
		},
		{
			name: '万得全A',
			type: 'line',
			data: data3_2.windA,
		},
	],
};
export default option;
