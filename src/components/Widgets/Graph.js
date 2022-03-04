import React,{useState,useEffect,useContext} from 'react'

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
} from "recharts";
export default function Graph() {
    const ScreenWidth = window.screen.availWidth
    const data = [
        {
            value: 35,
            value2: 0,
            month: 'Jan'
        },
        {
            value: 80,
            value2: 20,
            month: 'Feb'
        },
        {
            value: 55,
            value2: 25,
            month: 'Mar'
        },
        {
            value: 79,
            value2: 30,
            month: 'Apr'
        },
        {
            value: 40,
            value2: 25,
            month: 'May'
        },
        {
            value: 10,
            value2: 40,
            month: 'Jun'
        },
        
       
    ]
    return (
        <ResponsiveContainer width={ScreenWidth<=450?"100%":"90%"} height={ScreenWidth<=450?250:400}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor='gray' stopOpacity={.3}/>
                        <stop offset="85%" stopColor='gray' stopOpacity={0.3}/>
                    </linearGradient>
                
                </defs>
                <Area type="monotone" dataKey="value" stroke='blue' fill='url(#color)' />
                <Area type="monotone" dataKey="value2" stroke='green' fill='none' />
                <XAxis dataKey="month" />
                <YAxis dataKey="value" />
                <Tooltip />
                <CartesianGrid opacity={1} vertical={false} horizontal={false}/>
            </AreaChart>
        </ResponsiveContainer>
    )
}
