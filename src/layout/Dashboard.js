import { TopHeader } from '../components'
import './Dashboard.less';
import React from 'react';



class Dashboard extends React.Component {

  render() {
    return (       
        <div>
            <TopHeader/>
            <div className="w_parent_mainbox">
                <div className="w_parent_iframe">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}
export default Dashboard;