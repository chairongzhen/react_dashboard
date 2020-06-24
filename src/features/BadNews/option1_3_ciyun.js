/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 13:41:45
 * @Description: 政府项目
 */

import { dataHandle } from '../../utils/dataHandle';
import data1_3_ciyun from '../../data/1_3_ciyun.json';

var themeColor = [
	// '#00659D',
	'#AC3463',
	'#58A5D3',
	'#E37144',
	'#80BF91',
	'#F1C33A ',
	// '#6B8ADC',
	'#8E572B',
	// '#718940',
	// '#68568E',
	'#52BAAC',
	'#9E7000',
];
let data = dataHandle(data1_3_ciyun, [
	{
		sourceKey: 'eventTypeName',
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
	series: [
		{
			type: 'wordCloud',
			id: 'unit(次)',
			gridSize: 2,
			sizeRange: [12, 50],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 600,
			height: 400,
			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function () {
						return themeColor[Math.round(Math.random() * themeColor.length)];
					},
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333',
				},
			},
			data: data,
		},
	],
};
export default option;
