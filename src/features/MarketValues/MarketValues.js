/*
 * @Author: hcluo
 * @Date: 2020-06-21 11:14:21
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-23 13:46:21
 * @Description: 政府项目
 */

import React, { useState, useEffect, useRef } from 'react';
import './style.less';
import { WindChart } from '../../components';
import option3_2 from './option3_2';
import { DownSvg,UpSvg } from './components';
import { calMarketsData,getCalSummaryData } from '../../utils/dataHandle';
import chartOptions from './chartOptions';
import { Select } from 'antd';
const { Option } = Select;

const MarketValues = props => {
	const [summary, setSummary] = useState({
		totalValues: 0,
		riseNum: 0,
		riseRate: 0,
		companyNum: 0
	});
	const [values,setValues] = useState("2020");
	const [category,setCategory] = useState("");
	const [showClean, setShowClean] = useState(false);
	const p1Inst = useRef(1);
	const p2Inst = useRef(2);
	/**
	 * @description 获取echart实例
	 * @param {*} pxIns
	 * @returns
	 */
	const onRef = (pxIns, index) => {
		return ref => {
			if (ref && ref.getEchartsInstance) {
				pxIns.current = ref.getEchartsInstance();
				// 在控制台测试的代码
				window['p' + index] = pxIns.current;
			}
		};
	};

	// 当前选中的筛选条件
	const [data, setData] = useState(chartOptions);
	const selectedParams = useRef(['', '']);
	const onEvents = {
		click: async param => {			
			let name = param.name;
			let seriesType = param.seriesType;
			let clickType;
			switch (seriesType) {
				case 'treemap':
					selectedParams.current[1] = name;
					setCategory(name);
					break;
				case 'line':
				case 'bar':
					selectedParams.current[0] = name;
					setValues(name);
					break;
				default:
					selectedParams.current = ['', ''];
					break;
			}

			let showClean =
				!!selectedParams.current[0] ||
				!!selectedParams.current[1];
			
			// if(selectedParams.current[0] !== values) {
			// 	selectedParams.current[0] = values;
			// } 
			// if(selectedParams.current[1] !== category) {
			// 	selectedParams.current[1] = category
			// }



			if(param.time && param.time !== selectedParams.current[0]) {
				selectedParams.current[0] = param.time;
				selectedParams.current[1] = category;
				showClean = true;
			}

			if(param.category && param.category !== selectedParams.current[1] ) {
				selectedParams.current[1] = param.category;
				selectedParams.current[0] = values;
				showClean = true;
			}

			
			let bondsData = await calMarketsData(...selectedParams.current);
			
			let summaryData = await getCalSummaryData(...selectedParams.current);
			
			setSummary({...summaryData});
			
			for (let index = 0; index < bondsData.trends.compNum.length; index++) {
				if (bondsData.trends.compNum[index].name === selectedParams.current[0]) {
					bondsData.trends.compNum[index].itemStyle = { opacity: 1 };
				} else {
					bondsData.trends.compNum[index].itemStyle = { opacity: showClean ? 0.5 : 1 };
				}
			}

			data.trends.xAxis.data = bondsData.trends.name;
			data.trends.series[0].data = bondsData.trends.issueSize;
			data.trends.series[1].data = bondsData.trends.compNum;

			for (let index = 0; index < bondsData.indus.length; index++) {
				if (bondsData.indus[index].name === selectedParams.current[1]) {
					bondsData.indus[index].itemStyle = { borderWidth: 3, borderColor: 'white' };
					break;
				}
			}

			data.indus.series.data = bondsData.indus;

			setShowClean(showClean);
			setData({ ...data });
		},
	};

	/**
	 * @description 重置所有图表
	 */
	const reset = () => {
		setValues("2020");
		setCategory("");
		onEvents.click({ seriesType: 'clean' });
	};

	const onValueChange = (value) => {
		setValues(value);
		onEvents.click({time: value});
	}

	const onTypeChange = (value) => {
		setCategory(value);
		onEvents.click({category: value});
	}

	useEffect(() => {
		onEvents.click({});
	}, []);

	return (
		<div className="w_grid_container w_values">
			<div className="w_row1_div1 w_mainbox_column_panel funnel_company">
				{showClean && (
					<div className="w_chartlink2">
						<div className="w_selected2" onClick={reset}>
							清除选择
						</div>
					</div>
				)}
				<div className="w_company_info w_chart">
					<div className="w_company_info_1">
				<div className="w_company_info_1_1"><span style={{"color":"#f1c33a"}}>{selectedParams.current[0]===""?"2020":selectedParams.current[0]}</span>年{selectedParams.current[1]===""?"上市企业总市值":<span style={{color: "#31d9ee"}}>{selectedParams.current[1]}</span>}{selectedParams.current[1]===""?"":"总市值"}</div>
						
						{/* <div className="w_company_info_1_1">{selectedParams.current[0]===""?"2020":selectedParams.current[0]}年上市企业总市值</div> */}
						<div className="w_company_info_1_2">
							<span className="w_number">{summary.totalValues}</span>
							<span>&nbsp;&nbsp;万亿</span>
							<span className="w_numberspan">&nbsp;(共&nbsp;</span>
							<span className="w_number_compnaynum">{summary.companyNum}</span>
							<span className="w_numberspan">&nbsp;家) </span>
						</div>
					</div>

					<div className="w_company_info_2">
						<div className="w_company_info_2_1">
							<div className="w_company_info_title">年增幅</div>
							<div className="w_company_info_content">
								<span style={{width:"150px"}} className={summary.riseNum>0?"w_valueindexred":"w_valueindex"}>{Math.abs(summary.riseNum).toLocaleString()}</span>
								<span className={summary.riseNum>0?"w_valueindexred":"w_valueindex"}>亿元</span>
								{summary.riseNum > 0 ?<UpSvg />: <DownSvg />}
							</div>
						</div>
						
						<div className="w_company_info_2_2">
							<div className="w_company_info_title">增长率</div>
							<div className="w_company_info_content">
								<span className={summary.riseNum>0?"w_valueindexred":"w_valueindex"}>{Math.abs(summary.riseRate)}</span>
								<span className={summary.riseNum>0?"w_valueindexred":"w_valueindex"}>%</span>
								{summary.riseNum > 0 ?<UpSvg />: <DownSvg />}
							</div>
						</div>
					</div>
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
			<div className="w_row1_div2 w_mainbox_column_panel rose_company">
				<h2>上市企业市值变化</h2>
				<div className="w_valuedrop">
					<Select defaultValue={values} value={values} style={{width: "100px"}} onChange={onValueChange}>
						<Option value="2020">2020年</Option>
						<Option value="2019">2019年</Option>
						<Option value="2018">2018年</Option>
						<Option value="2017">2017年</Option>
						<Option value="2016">2016年</Option>
						<Option value="2015">2015年</Option>
						<Option value="2014">2014年</Option>
						<Option value="2013">2013年</Option>
						<Option value="2012">2012年</Option>
						<Option value="2011">2011年</Option>
					</Select>					
				</div>
				<div className="w_chart">
					{data.trends && (
						<WindChart
							option={data.trends}
							onEvents={onEvents}
							ref={ref => onRef(p1Inst, 1)(ref)}
						/>
					)}
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
			<div className="w_row1_div3 w_mainbox_column_panel bar_listedcompany">
				<h2>行业分布</h2>
				<div className="w_valuedrop">
					<Select defaultValue={category} value={category} style={{width: "200px"}} onChange={onTypeChange}>
						<Option value="">所有行业</Option>
						<Option value="金融、保险业">金融、保险业</Option>
						<Option value="制造业">制造业</Option>
						<Option value="交通运输、仓储业">交通运输、仓储业</Option>
						<Option value="批发和零售贸易">批发和零售贸易</Option>
						<Option value="信息技术业">信息技术业</Option>
						<Option value="综合类">综合类</Option>
						<Option value="社会服务业">社会服务业</Option>
						<Option value="房地产业">房地产业</Option>
						<Option value="建筑业">建筑业</Option>
						<Option value="其它行业">其它行业</Option>
						<Option value="采掘业">采掘业</Option>
					</Select>
				</div>
				<div className="w_chart">
					{data.trends && (
						<WindChart
							option={data.indus}
							onEvents={onEvents}
							ref={ref => onRef(p2Inst, 2)(ref)}
						/>
					)}
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
			<div className="w_row2_div4 w_mainbox_column_panel bar_company">
				<h2>整体市场表现</h2>
				<div className="w_chart">
					<div className="w_chart">
						<WindChart option={option3_2} />
					</div>
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
		</div>
	);
};

export default MarketValues;
