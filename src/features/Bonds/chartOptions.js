/*
 * @Author: hcluo
 * @Date: 2020-06-23 11:03:56
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-23 13:57:43
 * @Description: 政府项目
 */

export default {
	trends: {
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
			data: [],
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
			},
		],
		series: [
			{
				name: '发行量',
				id: 'unit(亿元)',
				type: 'line',
				barWidth: '35%',
				data: [],
			},
			{
				name: '发债只数',
				id: 'unit(只)',
				type: 'bar',
				barWidth: '35%',
				yAxisIndex: 1,
				data: [],
				emphasis: {
					itemStyle: { opacity: 1 },
				},
			},
		],
	},
	indus: {
		tooltip: {},
		calculable: false,
		series: {
			name: '行业分布',
			id: 'unit(亿元)',
			type: 'treemap',
			nodeClick: false,
			breadcrumb: {
				show: false,
			},
			data: [],
		},
	},
	bonds: {
		tooltip: {},
		legend: {
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
			// emphasis: { label: { show: true }, labelLine: { show: true } },

			selectedMode: 'single',
			highlightPolicy: 'ancestor',
			data: [],
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
	},
};
