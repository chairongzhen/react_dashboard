/*
 * @Author: hcluo
 * @Date: 2020-06-21 12:09:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-21 18:33:11
 * @Description: 政府项目
 */

import { generateTreeData } from '../../utils/dataHandle';
import data1_3_total from '../../data/1_3_total.json';

// var themeColor = [
// 	// '#00659D',
// 	'#AC3463',
// 	'#58A5D3',
// 	'#E37144',
// 	'#80BF91',
// 	'#F1C33A ',
// 	// '#6B8ADC',
// 	'#8E572B',
// 	// '#718940',
// 	// '#68568E',
// 	'#52BAAC',
// 	'#9E7000',
// ];

let data = [];
data1_3_total.forEach(item => {
	if (item.negativeLevel === '4' && parseInt(item.value) >= 100) {
		data.push(item);
	}
});
let resultData = generateTreeData(data, 'PEventTypeName', 'eventTypeName', 'value');
let childData = [];
for (let o of resultData) {
	if (o.children && o.children.length > 0) {
		childData = [...childData, ...o.children];
	}
}
resultData.map(item => {
	let children = item.children;
	children.map((item, index) => {
		item.itemStyle = {
			opacity: (10 - index * 2) / 10,
		};
		return item;
	});
	return item;
});
let option = {
	tooltip: {},
	// color: themeColor,
	series: {
		type: 'sunburst',
		id: 'unit(次)',
		itemStyle: {
			borderColor: 'rgba(0, 0, 0, 1)',
			borderWidth: 1,
		},
		highlightPolicy: 'ancestor',
		data: resultData,
		radius: [0, '100%'],
		sort: null,
		label: {
			color: 'white',
			fontSize: 12,
			rotate: 0,
		},
		levels: [
			{
				itemStyle: {
					color: 'rgba(0,0,0,0)',
					// borderWidth: 0,
				},
			},
			{
				r0: '5%',
				r: '65%',

				// label: {
				// 	rotate: 0,
				// },
			},
			{
				r0: '70%',
				r: '85%',
				// itemStyle: {
				// 	opacity: 0.7,
				// },
				label: {
					position: 'outside',
					// rotate: 0,
					padding: 15,
					silent: false,
				},
			},
		],
	},
};
export default option;
