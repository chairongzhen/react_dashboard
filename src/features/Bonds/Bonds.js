import React, { useState, useRef, useEffect } from 'react';
import './style.less';
import { WindChart } from '../../components';
import { BigCircleSvg, DimandSvg } from './components';
import { calBondsData } from '../../utils/dataHandle';
import chartOptions from './chartOptions';

const Bonds = props => {
	const [showClean, setShowClean] = useState(false);

	const p1Inst = useRef(1);
	const p2Inst = useRef(2);
	const p3Inst = useRef(3);
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
	const selectedParams = useRef(['', '', '']);
	const onEvents = {
		click: async param => {
			let name = param.name;
			let seriesType = param.seriesType;
			let clickType;

			switch (seriesType) {
				case 'pie':
					selectedParams.current[2] = name;
					clickType = 'bondType';
					break;
				case 'treemap':
					selectedParams.current[1] = name;
					clickType = 'industry1Level';
					break;
				case 'line':
				case 'bar':
					selectedParams.current[0] = name;
					clickType = 'time';
					break;
				// case 'clean':
				// 	selectedParams.current = ['', '', ''];
				// 	clickType = '';
				// 	break;
				default:
					selectedParams.current = ['', '', ''];
					clickType = '';
					break;
			}

			let showClean =
				!!selectedParams.current[0] ||
				!!selectedParams.current[1] ||
				!!selectedParams.current[2];

			let bondsData = await calBondsData(...selectedParams.current, clickType);
			console.log(
				'%c 🍧 ...selectedParams.current, clickType: ',
				'font-size:20px;background-color: #6EC1C2;color:#fff;',
				...selectedParams.current,
				clickType
			);
			console.log(
				'%c 🥟 da: ',
				'font-size:20px;background-color: #FCA650;color:#fff;',
				bondsData
			);

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

			for (let index = 0; index < bondsData.bonds.length; index++) {
				if (bondsData.bonds[index].name === selectedParams.current[2]) {
					bondsData.bonds[index].selected = true;
					break;
				}
			}

			data.bonds.series.data = bondsData.bonds;

			setShowClean(showClean);
			setData({ ...data });
		},
	};

	useEffect(() => {
		onEvents.click({});
	}, []);
	/**
	 * @description 重置所有图表
	 */
	const reset = () => {
		onEvents.click({ seriesType: 'clean' });
	};

	return (
		<div className="w_grid_container w_bonds">
			<div className="w_row1_div1 w_mainbox_column_panel">
				<div className="w_count_main">
					<div className="w_count_main_number">
						<div>历史</div>
						<div>总量</div>
					</div>
					<BigCircleSvg />
				</div>
				<div className="w_count_line">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="w_count_salve">
					<div className="w_count_salve_label">
						<div className="w_fxl" style={{ marginLeft: 5 }}>
							家数
						</div>
						<DimandSvg />
					</div>
					<div className="w_count_salve_label">
						<div className="w_fxl">发行量</div>
						<DimandSvg />
					</div>
					<div className="w_count_salve_label">
						<div className="w_fxl" style={{ marginLeft: 5 }}>
							只数
						</div>
						<DimandSvg />
					</div>
				</div>

				<div className="w_count_label_line">
					<div></div>
					<div></div>
					<div>
						<div style={{ flex: 1, color: 'transparent' }}>t</div>
						<div style={{ flex: 1, color: 'transparent' }}>t</div>
						<div style={{ flex: 1 }}>
							<div
								style={{
									border: '1px solid #244395',
									width: '1px',
									height: '20px',
								}}
							></div>
						</div>
					</div>
				</div>
				<div className="w_count_label">
					<div className="w_count_label_group">
						176
						<span className="w_count_label_group_dw">家</span>
					</div>
					<div className="w_count_label_group">
						32,206.17
						<span className="w_count_label_group_dw">亿元</span>
					</div>
					<div className="w_count_label_group">
						2,329
						<span className="w_count_label_group_dw">只</span>
					</div>
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row1_div2 w_mainbox_column_panel">
				<div className="w_count_main">
					<div className="w_count_main_number">
						<div>本年</div>
						<div>增量</div>
					</div>
					<BigCircleSvg />
				</div>
				<div className="w_count_line">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="w_count_salve">
					<div className="w_count_salve_label">
						<div className="w_fxl" style={{ marginLeft: 5 }}>
							家数
						</div>
						<DimandSvg />
					</div>
					<div className="w_count_salve_label">
						<div className="w_fxl">发行量</div>
						<DimandSvg />
					</div>
					<div className="w_count_salve_label">
						<div className="w_fxl" style={{ marginLeft: 5 }}>
							只数
						</div>
						<DimandSvg />
					</div>
				</div>

				<div className="w_count_label_line">
					<div></div>
					<div></div>
					<div>
						<div style={{ flex: 1, color: 'transparent' }}>t</div>
						<div style={{ flex: 1, color: 'transparent' }}>t</div>
						<div style={{ flex: 1 }}>
							<div
								style={{
									border: '1px solid #244395',
									width: '1px',
									height: '20px',
								}}
							></div>
						</div>
					</div>
				</div>
				<div className="w_count_label">
					<div className="w_count_label_group">
						74<span className="w_count_label_group_dw">家</span>
					</div>
					<div className="w_count_label_group">
						3,104.52
						<span className="w_count_label_group_dw">亿元</span>
					</div>
					<div className="w_count_label_group">
						268
						<span className="w_count_label_group_dw">只</span>
					</div>
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>

			<div className="w_row1_div3 w_mainbox_column_panel rectree_company">
				<h2>债券历史10年发行量</h2>
				{showClean && (
					<div className="w_chartlink">
						<div className="w_selected" onClick={reset}>
							清除选择
						</div>
					</div>
				)}

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

			<div className="w_row2_div w_mainbox_column_panel rectree_company">
				<h2>行业分布</h2>
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

			<div className="w_row2_div w_mainbox_column_panel stock">
				<h2>债券类型分布</h2>
				<div className="w_chart">
					{data.trends && (
						<WindChart
							option={data.bonds}
							onEvents={onEvents}
							ref={ref => onRef(p3Inst, 3)(ref)}
						/>
					)}
				</div>
				<div className="w_mainbox_column_panel_footer"></div>
			</div>
		</div>
	);
};

export default Bonds;
