/* eslint-disable no-extend-native */
/*
 * @Author: hcluo
 * @Date: 2020-06-15 16:49:33
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-23 10:51:15
 * @Description: 政府项目
 */

import _ from 'lodash';
// import detailData from '../data/detail.json';
import axios from 'axios';

export function dataHandle(data, rules) {
	return data.map(item => {
		let newItem = {};
		rules.map(rule => {
			ruleHandle(rule, newItem, item);
			return rule
		});

		return newItem;
	});
}

Date.prototype.format = function (fmt) {
	var o = {
		'M+': this.getMonth() + 1, // 月份
		'd+': this.getDate(), // 日
		'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, // 小时
		'H+': this.getHours(), // 小时
		'm+': this.getMinutes(), // 分
		's+': this.getSeconds(), // 秒
		'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
		S: this.getMilliseconds(), // 毫秒
	};
	var week = {
		'0': '/u65e5',
		'1': '/u4e00',
		'2': '/u4e8c',
		'3': '/u4e09',
		'4': '/u56db',
		'5': '/u4e94',
		'6': '/u516d',
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') +
			week[this.getDay() + '']
		);
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			);
		}
	}
	return fmt;
};

const ruleHandle = (rule, newItem, oldItem) => {
	let sourceKey = rule.sourceKey;

	try {
		let distKey = rule.distKey || sourceKey;
		newItem[distKey] = oldItem[sourceKey];

		const ruleItemHandle = handleRule => {
			switch (handleRule.type) {
				case 'divide':
					newItem[distKey] = newItem[distKey] / handleRule.argus;
					break;

				case 'toFixed':
					if (typeof newItem[distKey] === 'number') {
						newItem[distKey] = newItem[distKey].toFixed(handleRule.argus);
					}
					break;

				case 'toNumber':
					if (!isNaN(Number(newItem[distKey])))
						newItem[distKey] = Number(newItem[distKey]);
					break;

				case 'time':
					if (/\d{8}/.test(newItem[distKey])) {
						let [, year, mouth, day] = /(\d{4})(\d{2})(\d{2})/.exec(newItem[distKey]);
						newItem[distKey] = new Date([year, mouth, day].join('-')).format(
							handleRule.argus
						);
					}

					break;

				default:
					break;
			}
		};

		if (rule.rule && rule.rule.length) {
			rule.rule.map(handleRule => {
				ruleItemHandle(handleRule);
				return handleRule;
			});
		} else {
			newItem[distKey] = oldItem[sourceKey];
		}
	} catch (error) {
		console.error(
			'%c 🍶 error: ',
			'font-size:20px;background-color: #FFDD4D;color:#fff;',
			error
		);
	}
};

// 生成树型结构
export const generateTreeData = (data, parentColumn, nameColumn, valueColumn) => {
	let parentarr = [];
	data.map(item => {
		let hasPush = false;
		parentarr.forEach(it => {
			if (item[parentColumn] === it.name) {
				hasPush = true;
			}
		});
		if (!hasPush) {
			parentarr.push({
				name: item[parentColumn],
			});
		}
		return item;
	});
	parentarr.forEach((pitem, index) => {
		let children = [];
		data.forEach(rawitem => {
			if (rawitem[parentColumn] === pitem.name) {
				children.push({
					name: rawitem[nameColumn],
					value: rawitem[valueColumn],
				});
			}
		});
		pitem.children = children;
	});

	for (let o of parentarr) {
		if (o.children && o.children.length > 0) {
			let count = 0;
			o.children.forEach(oitem => {
				count = count + parseInt(oitem.value);
			});
			o.value = count;
		}
	}

	return parentarr;
};



/** start 债券联动数据 */
const asyncCalBondsRawData = async () => {
	const _jsondata = await axios.get('./data/detail.json');
	let rawdata = _jsondata.data;
	for (let o of rawdata) {
		o.time = o.time.substr(0, 4);
		if (o.bondType === '0') o.bondType = '其它';
		if (o.industry1Level === ' ') o.industry1Level = '其它';
	}
	return rawdata;
}

const getBondsData = (rawdata, year, indu, bond) => {
	let resultdata = rawdata;
	if (year !== '') {
		resultdata = rawdata.filter(item => item.time.substr(0, 4) === year);
	}
	if (indu !== '') {
		resultdata = resultdata.filter(item => item.industry1Level === indu);
	}
	if (bond !== '') {
		resultdata = resultdata.filter(item => item.bondType === bond);
	}

	return resultdata;
}

const generateBondsData = (data, type) => {
	let trends = {
		name: [],
		compNum: [],
		issueSize: [],
	};
	let indus = [];
	let bonds = [];
	let groupdata = _.groupBy(data, type);
	for (let g in groupdata) {
		let count = 0;
		let index = 0;
		for (let gk of groupdata[g]) {
			count = count += gk.issueSize;
			index++;
		}
		if (type === 'industry1Level') {
			indus.push({
				name: g,
				value: count.toFixed(2),
			});
		} else if (type === 'bondType') {
			bonds.push({
				name: g,
				value: count.toFixed(2),
			});
		} else if (type === 'time') {
			trends.name.push(g);
			trends.compNum.push({
				name: g,
				value: index,
			});
			trends.issueSize.push({
				name: g,
				value: count.toFixed(2),
			});
		} else {
			return [];
		}
	}

	if(type === "industry1Level") {
		return indus;
	} else if(type === "bondType") {
		return bonds;
	} else if(type === "time") {
		return trends;
	} else {
		return []
	}
}

export const calBondsData = async (year, indu, bond) => {
	let rawdata = await asyncCalBondsRawData();
	let types = ['industry1Level', 'bondType', 'time'];
	let trends = {
		name: [],
		compNum: [],
		issueSize: [],
	};
	let indus = [];
	let bonds = [];
	for (let type of types) {
		let inputdata = [];
		if(type === "industry1Level") {
			inputdata = getBondsData(rawdata, year, "", bond);
			indus = generateBondsData(inputdata,type);
		} else if(type === "bondType") {
			inputdata = getBondsData(rawdata, year, indu, "");
			bonds = generateBondsData(inputdata,type);
		} else if(type === "time") {
			inputdata = getBondsData(rawdata, '', indu, bond);
			trends = generateBondsData(inputdata,type);
		}
	}


	let sortedIndus = _.sortBy(indus, item => -item.value);
	let sortedbonds = _.sortBy(bonds, item => -item.value);

	return {
		trends,
		indus: sortedIndus,
		bonds: sortedbonds,
	};
};
/** end 债券联动数据 */


/** start 市值联动数据 */
const asyncCalMarketsRawData = async() => {
	const _jsondata = await axios.get('./data/marketdetail.json');
	let rawdata = _jsondata.data;
	for (let o of rawdata) {
		if (o.industryName === '0') o.industryName = '其它行业';
		if (o.industryName === ' ') o.industryName = '其它行业';
	}	
	return rawdata;
}

const getMarketsData = (rawdata, year, indu) => {
	let resultdata = rawdata.filter(item=>parseInt(item.time)>=2011);
	if (year !== '') {
		resultdata = rawdata.filter(item => item.time === year);
	}
	if (indu !== '') {
		resultdata = resultdata.filter(item => item.industryName === indu);
	}

	return resultdata;
}

const generateMarketsData = (data, type) => {
	let trends = {
		name: [],
		compNum: [],
		issueSize: [],
	};
	let indus = [];
	let groupdata = _.groupBy(data, type);
	for (let g in groupdata) {
		let count = 0;
		let index = 0;
		for (let gk of groupdata[g]) {
			count = count += gk.TotalMarket;
			index++;
		}
		if (type === 'industryName') {
			indus.push({
				name: g,
				value: (count / 100000000).toFixed(2),
			});
		}  else if (type === 'time') {
			trends.name.push(g);
			trends.compNum.push({
				name: g,
				value: index,
			});
			trends.issueSize.push({
				name: g,
				value: (count / 100000000).toFixed(2),
			});
		} else {
			return [];
		}
	}

	if(type === "industryName") {
		return indus;
	} else if(type === "time") {
		return trends;
	} else {
		return []
	}
}

export const calMarketsData = async (year, indu) => {
	let rawdata = await asyncCalMarketsRawData();
	let types = ['industryName', 'time'];
	let trends = {
		name: [],
		compNum: [],
		issueSize: [],
	};
	let indus = [];
	for (let type of types) {
		let inputdata = [];
		if(type === "industryName") {
			inputdata = getMarketsData(rawdata, year, "");
			
			indus = generateMarketsData(inputdata,type);
		} else if(type === "time") {
			inputdata = getMarketsData(rawdata, '', indu);
			trends = generateMarketsData(inputdata,type);
		}
	}
	let sortedIndus = _.sortBy(indus, item => -item.value);
	return {
		trends,
		indus: sortedIndus,
	};
};


export const getCalSummaryData = async(year, indu) => {
	const _jsondata = await axios.get('./data/markettotal.json');
	let rawdata = _jsondata.data;
	for (let o of rawdata) {
		if (o.industryName === '0') o.industryName = '其它';
		if (o.industryName === ' ') o.industryName = '其它';
	}	
	let summaryData = {
		totalValues: 0,
		companyNum: 0,
		riseNum: 0,
		riseRate: 0
	}

	let lastyear = "2019";
	if(year !== "") {
		lastyear = (parseInt(year) -1).toString();
	}

	let resultdata = rawdata;
	let lastdata = [];
	
	if(year === "" && indu === "") {
		resultdata = rawdata.filter(item => item.time === "2020");
		lastdata = rawdata.filter(item => item.time === lastyear);
	} else if(year === "" && indu !== "") {
		resultdata = rawdata.filter(item => item.time === "2020" && item.industryName === indu);
		lastdata = rawdata.filter(item => item.time === lastyear && item.industryName === indu);
	}else {
		resultdata = rawdata.filter(item=> year !== ''?item.time === year:true && indu !== ''?item.industryName === indu:true);
		lastdata = rawdata.filter(item=> year !== ''?item.time === lastyear:true && indu !== ''?item.industryName === indu:true);
	}
	


	
	console.log('the lastdata is: ',lastdata);
	let lastvalues = 0;
	for(let o of lastdata) {
		lastvalues += o.SumTotalMarket;
	}
	
	for(let o of resultdata) {
		summaryData.totalValues += o.SumTotalMarket;
		summaryData.companyNum += parseInt(o.companyNum);
	}
	let resultriserate = 0.0;
	summaryData.riseNum = summaryData.totalValues - lastvalues;

	if(summaryData.riseNum > 0) {
		resultriserate = (summaryData.totalValues / lastvalues).toFixed(2);
	} else {
		resultriserate = - (lastvalues / summaryData.totalValues).toFixed(2);
	}
	summaryData.riseRate = resultriserate;
	summaryData.totalValues = (summaryData.totalValues / 1000000000000).toFixed(2);
	summaryData.riseNum = (summaryData.riseNum / 100000000).toFixed(2);
	return summaryData;
}

/** end 市值联动数据 */

// var ruleDemo = [
// 	{
// 		sourceKey: 'EnterpriseNature',
// 		distKey: 'name',
// 	},
// 	{
// 		sourceKey: 'TotalMarket',
// 		distKey: 'value',
// 		rule: [
// 			{
// 				type: 'divide',
// 				argus: 1000,
// 			},
// 			{
// 				type: 'toFixed',
// 				argus: 2,
// 			},
// 			{
// 				type: 'toNumber',
// 			},
// 		],
// 	},
// ];

// 测试代码
// var data = [
// 	{
// 		CompaniesAmount: 76,
// 		NetProfit: 8.867483896099999e8,
// 		EnterpriseNature: '民营企业',
// 		Employment: 144398,
// 		TotalMarket: 6.272711561392224e11,
// 		TotalAssets: 4.5974633630175e11,
// 	},
// 	{
// 		CompaniesAmount: 39,
// 		NetProfit: 1.102600320915e10,
// 		EnterpriseNature: '地方国有企业',
// 		Employment: 585336,
// 		TotalMarket: 1.1193049818406863e12,
// 		TotalAssets: 3.3278899552677305e12,
// 	},
// 	{
// 		CompaniesAmount: 22,
// 		NetProfit: -3.2794253844699993e9,
// 		EnterpriseNature: '中央国有企业',
// 		Employment: 293733,
// 		TotalMarket: 5.071549490713835e11,
// 		TotalAssets: 1.6567372995591497e12,
// 	},
// 	{
// 		CompaniesAmount: 12,
// 		NetProfit: 4.893210787028001e10,
// 		EnterpriseNature: '公众企业',
// 		Employment: 213353,
// 		TotalMarket: 1.1538688863119417e12,
// 		TotalAssets: 2.3392872089954098e13,
// 	},
// 	{
// 		CompaniesAmount: 7,
// 		NetProfit: 2.680240444e8,
// 		EnterpriseNature: '外资企业',
// 		Employment: 21686,
// 		TotalMarket: 1.1214949571928e11,
// 		TotalAssets: 3.4680161674e10,
// 	},
// 	{
// 		CompaniesAmount: 2,
// 		NetProfit: 2.1041963744e8,
// 		EnterpriseNature: '其他企业',
// 		Employment: 6098,
// 		TotalMarket: 1.9636324160480103e10,
// 		TotalAssets: 4.469163648052e10,
// 	},
// ];

// console.log(dataHandle(data, ruleDemo));
