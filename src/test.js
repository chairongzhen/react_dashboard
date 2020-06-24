import React, { Fragment } from 'react';
import './TopHeader.less';
const TopHeader = (props) => {
    return (
        <Fragment>
            <div className="w_header">
                <div className="w_title">
                    上市企业市值
                </div>
            </div>
            <div className="w_menu">
                <ul>
                    <li><a style={{ color: '#19e8ff' }} className="w_menu_i" onclick="gotoPage('s1.html','上市企业市值',this)">上市企业市值</a></li>
                    <li><a className="w_menu_i" onclick="gotoPage('s2.html','上市企业分布',this)">上市企业分布</a></li>
                    <li><a className="w_menu_i" onclick="gotoPage('s3.html','发债企业',this)">发债企业</a></li>
                    <li><a className="w_menu_i" onclick="gotoPage('s4.html','企业舆情',this)">企业舆情</a></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default TopHeader;