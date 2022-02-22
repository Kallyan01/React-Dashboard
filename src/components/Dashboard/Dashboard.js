import { Chart } from 'chart.js'
import React from 'react'
import Userslist from '../Users/Userslist'
import Chartcont from '../Widgets/Chartcont'
import Graph from '../Widgets/Graph'
import './Dashboard.css'
function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="traffic">
                <div className="traffic-title">
                    <div className="traffic-title-heading">
                        <h3>Traffic</h3>
                        <p>January- July 2021</p>
                    </div>
                    <div className="graph-options">
                        <div className="dmy">
                            <div className="day">Day</div>
                            <div className="month active">Month</div>
                            <div className="year">Year</div>
                        </div>
                        <div className="download-data">
                            <i class="fas fa-download"></i>
                        </div>
                    </div>
                </div>
                <div className="traffic-graph">
                    <Graph />
                    {/* <Chartcont/> */}
                </div>
            </div>
            <div className="usertable">
                <Userslist />
            </div>
        </div>
    )
}

export default Dashboard