/*
 * @Author: hcluo
 * @Date: 2020-05-07 14:48:04
 * @LastEditors: hcluo
 * @LastEditTime: 2020-06-22 16:46:13
 * @Description: 政府项目
 */
import React, {  forwardRef } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
// import windTheme from './wind.standard.theme.json';
// import windTheme from './dark.theme.json';
import world from './world.json';
import registerTheme from './eChartTheme';
require('echarts-wordcloud');
echarts.registerMap('world', world);
// echarts.registerTheme('windTheme', windTheme);
registerTheme(echarts);
/**
 * 中文文档： https://www.jianshu.com/p/f6c1c4618c22
 */
const WindChart = forwardRef((props, ref) => {
	return <ReactEchartsCore ref={ref} echarts={echarts} {...props} />;
});

WindChart.propTypes = {};
WindChart.defaultProps = {
	style: {
		width: '100%',
		height: '100%',
	},
	opts: {
		// renderer: 'svg'
	},
	theme: 'windTheme',
	notMerge: true,
	lazyUpdate: false,
	showLoading: false,

	option: {},
};

export default WindChart;
