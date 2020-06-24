import React,{ useState,useEffect,useRef } from 'react';
import { Button,Card,Layout } from  'antd';
const { Header, Footer, Sider, Content } = Layout;
import './App.less';

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import echartTheme from './themes/themeLight';　


function App() {  
  const chartRef = useRef();

  const getOption =()=> {
    let option = {
        title:{
          text:'用户骑行订单'
        },
        tooltip:{   //展示数据
          trigger:'axis'
        },
        xAxis:{
          data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
          type:'value'
        },
        series:[
          {
            name:'订单量',
            type:'bar',
            data:[1000,2000,1500,3000,2000,1200,800]
          }
        ]
    }
    return option;
  }

  useEffect(()=>{    
    echarts.registerTheme("Imooc",echartTheme);
    let myChart = echarts.init(chartRef.current);
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  });
  },[])

  return (
    <div className="App">
      <Card title="折线图表之一">
        <ReactEcharts option={getOption()} theme="Imooc"  style={{height:'300px'}}/>
      </Card>
      <Card title="折线图表之二">
        <div ref={chartRef} style={{  height: 300 }}></div>
      </Card>
    </div>
  );
}

export default App;
