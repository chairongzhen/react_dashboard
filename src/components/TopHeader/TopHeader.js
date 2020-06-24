import React, { Fragment, useState } from 'react';
import './TopHeader.less';
import { useHistory } from "react-router-dom";
const TopHeader = (props) => { 
    
    const [values,setValues] = useState(true);
    const [dist,setDist] = useState(false);
    const [bonds,setBonds] = useState(false);
    const [badNews,setBadNews] = useState(false);
    const [selected,setSelected] =  useState("上市企业市值")

    
    let history = useHistory();
    const gotoPage= (value)  => {
        history.push(value);
        setValues(false);
        setDist(false);
        setBonds(false);
        setBadNews(false);
        if(value === "/values") {
            setValues(true);
            setSelected("上市企业市值");
        } else if(value === "/dist") {
            setDist(true);
            setSelected("上市企业分布");
        } else if(value === "/bonds") {
            setBonds(true);
            setSelected("发债企业");
        } else if(value === "/badnews"){
            setBadNews(true);
            setSelected("企业舆情")
        }
    }

    const getTitleColor = (val) => {
        let selected = {
            color: '#f1c33a'
        };
        let unselected = {
            color: "#31d9ee"
        }
        if(val  === "values") {
            if(values) {
                return selected;
            } else {
                return unselected;
            }
        } else if(val ==="dist") {
            if(dist) {
                return selected;
            } else {
                return unselected;
            }
        }else if(val ==="bonds") {
            if(bonds) {
                return selected;
            } else {
                return unselected;
            }
        }else if(val ==="badnews") {
            if(badNews) {
                return selected;
            } else {
                return unselected;
            }
        }
        
    }
    
    const onClose = () => {
        window.location.href = "about:blank";
        window.opener = null;
        window.close();
    }

    return (
        <Fragment>
            <div className="w_header">
                <div className="w_title">
                    {selected}
                </div>
                <button className="w_back" onClick={onClose}></button>
            </div>
            <div className="w_menu">
                <ul>
                    <li><a style={getTitleColor("values")}  className="w_menu_i" onClick={()=>gotoPage("/values")} >上市企业市值</a></li>
                    {/* <li><a style={getTitleColor("dist")}   className="w_menu_i" onClick={()=>gotoPage("/dist")} >上市企业分布</a></li> */}
                    <li><a style={getTitleColor("bonds")}   className="w_menu_i" onClick={()=>gotoPage("/bonds")} >发债企业</a></li>
                    <li><a style={getTitleColor("badnews")}   className="w_menu_i" onClick={()=>gotoPage("/badnews")} >企业舆情</a></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default TopHeader;