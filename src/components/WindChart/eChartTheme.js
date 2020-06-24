/*
 * @Author: hcluo
 * @Date: 2020-06-21 11:58:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-22 13:34:44
 * @Description: 政府项目
 */

export default function registerTheme(echarts) {
	echarts.registerTheme('windTheme', {
		color: [
			'#00659D',
			'#AC3463',
			'#58A5D3',
			'#E37144',
			'#80BF91',
			'#F1C33A ',
			'#6B8ADC',
			'#8E572B',
			'#718940',
			'#68568E',
			'#52BAAC',
			'#9E7000',
		],
		// backgroundColor: 'rgba(51,51,51,1)',
		textStyle: {},
		title: {
			textStyle: {
				color: '#eeeeee',
			},
			subtextStyle: {
				color: '#aaaaaa',
			},
		},
		line: {
			itemStyle: {
				normal: {
					borderWidth: 1,
				},
			},
			lineStyle: {
				normal: {
					width: 2,
				},
			},
			symbolSize: 4,
			symbol: 'circle',
			smooth: false,
		},
		radar: {
			itemStyle: {
				normal: {
					borderWidth: 1,
				},
			},
			lineStyle: {
				normal: {
					width: 2,
				},
			},
			symbolSize: 4,
			symbol: 'circle',
			smooth: false,
		},
		bar: {
			itemStyle: {
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
				normal: {
					barBorderWidth: 0,
					barBorderColor: '#ccc',
				},
				emphasis: {
					barBorderWidth: 0,
					barBorderColor: '#ccc',
				},
			},
			barMaxWidth: 70,
		},
		pie: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return 1000;
			},
		},
		scatter: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		boxplot: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		parallel: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		sankey: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		funnel: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		gauge: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
				emphasis: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
		},
		candlestick: {
			itemStyle: {
				normal: {
					color: '#fd1050',
					color0: '#0cf49b',
					borderColor: '#fd1050',
					borderColor0: '#0cf49b',
					borderWidth: 1,
				},
			},
		},
		graph: {
			itemStyle: {
				normal: {
					borderWidth: 0,
					borderColor: '#ccc',
				},
			},
			lineStyle: {
				normal: {
					width: 1,
					color: '#aaaaaa',
				},
			},
			symbolSize: 4,
			symbol: 'circle',
			smooth: false,
			color: [
				'#dd6b66',
				'#759aa0',
				'#e69d87',
				'#8dc1a9',
				'#ea7e53',
				'#eedd78',
				'#73a373',
				'#73b9bc',
				'#7289ab',
				'#91ca8c',
				'#f49f42',
			],
			label: {
				normal: {
					textStyle: {
						color: '#eeeeee',
					},
				},
			},
		},
		map: {
			itemStyle: {
				normal: {
					areaColor: '#eee',
					borderColor: '#444',
					borderWidth: 0.5,
				},
				emphasis: {
					areaColor: 'rgba(255,215,0,0.8)',
					borderColor: '#444',
					borderWidth: 1,
				},
			},
			label: {
				normal: {
					textStyle: {
						color: '#000',
					},
				},
				emphasis: {
					textStyle: {
						color: 'rgb(100,0,0)',
					},
				},
			},
		},
		geo: {
			itemStyle: {
				normal: {
					areaColor: '#eee',
					borderColor: '#444',
					borderWidth: 0.5,
				},
				emphasis: {
					areaColor: 'rgba(255,215,0,0.8)',
					borderColor: '#444',
					borderWidth: 1,
				},
			},
			label: {
				normal: {
					textStyle: {
						color: '#000',
					},
				},
				emphasis: {
					textStyle: {
						color: 'rgb(100,0,0)',
					},
				},
			},
		},
		categoryAxis: {
			axisLine: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisTick: {
				show: false,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#eeeeee',
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#aaaaaa'],
				},
			},
			splitArea: {
				show: false,
				areaStyle: {
					color: ['#eeeeee'],
				},
			},
		},
		valueAxis: {
			axisLine: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisTick: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#eeeeee',
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#aaaaaa'],
				},
			},
			splitArea: {
				show: false,
				areaStyle: {
					color: ['#eeeeee'],
				},
			},
		},
		logAxis: {
			axisLine: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisTick: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#eeeeee',
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#aaaaaa'],
				},
			},
			splitArea: {
				show: false,
				areaStyle: {
					color: ['#eeeeee'],
				},
			},
		},
		timeAxis: {
			axisLine: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisTick: {
				show: true,
				lineStyle: {
					color: '#eeeeee',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#eeeeee',
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: ['#aaaaaa'],
				},
			},
			splitArea: {
				show: false,
				areaStyle: {
					color: ['#eeeeee'],
				},
			},
		},
		toolbox: {
			iconStyle: {
				normal: {
					borderColor: '#999999',
				},
				emphasis: {
					borderColor: '#666666',
				},
			},
		},
		legend: {
			textStyle: {
				color: '#eeeeee',
			},
		},
		tooltip: {
			axisPointer: {
				lineStyle: {
					color: '#eeeeee',
					width: '1',
				},
				crossStyle: {
					color: '#eeeeee',
					width: '1',
				},
			},
			formatter: function (params) {
				var relVal;

				if (params.length === undefined) {
					// let newParam = params;
					// params = [params];

					if (['pie'].indexOf(params.seriesType) !== -1)
						return params.marker + params.name + ' : ' + params.percent + '%';

					let result = /^unit\((?<unit>.*)\)/.exec(params.seriesId);
					return (
						params.marker +
						params.name +
						' : ' +
						params.value +
						(!!result && !!result.groups && !!result.groups.unit
							? result.groups.unit
							: '')
					);
				}

				relVal = params[0].name || '';
				for (var i = 0; i < params.length; i++) {
					let marker =
						typeof params[i].color === 'string'
							? params[i].marker
							: `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[i].color.colorStops[0].color};"></span>`;
					relVal += '<br/>' + marker + params[i].seriesName + ' : ' + params[i].value;
					let result = /^unit\((?<unit>.*)\)/.exec(params[i].seriesId);
					if (result) {
						relVal += result.groups.unit;
					}
				}
				return relVal;
			},
		},
		timeline: {
			lineStyle: {
				color: '#eeeeee',
				width: 1,
			},
			itemStyle: {
				normal: {
					color: '#dd6b66',
					borderWidth: 1,
				},
				emphasis: {
					color: '#a9334c',
				},
			},
			controlStyle: {
				normal: {
					color: '#eeeeee',
					borderColor: '#eeeeee',
					borderWidth: 0.5,
				},
				emphasis: {
					color: '#eeeeee',
					borderColor: '#eeeeee',
					borderWidth: 0.5,
				},
			},
			checkpointStyle: {
				color: '#e43c59',
				borderColor: 'rgba(194,53,49,0.5)',
			},
			label: {
				normal: {
					textStyle: {
						color: '#eeeeee',
					},
				},
				emphasis: {
					textStyle: {
						color: '#eeeeee',
					},
				},
			},
		},
		visualMap: {
			color: ['#bf444c', '#d88273', '#f6efa6'],
		},
		dataZoom: {
			backgroundColor: 'rgba(47,69,84,0)',
			dataBackgroundColor: 'rgba(255,255,255,0.3)',
			fillerColor: 'rgba(167,183,204,0.4)',
			handleColor: '#a7b7cc',
			handleSize: '100%',
			textStyle: {
				color: '#eeeeee',
			},
		},
		markPoint: {
			label: {
				normal: {
					textStyle: {
						color: '#eeeeee',
					},
				},
				emphasis: {
					textStyle: {
						color: '#eeeeee',
					},
				},
			},
		},
	});
}
