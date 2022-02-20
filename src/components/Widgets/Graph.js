import React,{useState,useEffect} from 'react'
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
    const [ScreenWidth,setScreenWidth]=useState(0)
    useEffect(() => {
         window.addEventListener('resize',((env)=>{
            setScreenWidth(env.currentTarget.outerWidth)
        }))
        
    
      return () => {
        window.removeEventListener('resize',(env)=>{
            setScreenWidth(env.currentTarget.outerWidth)
        })
      }
    }, [ScreenWidth])
    
   

    const data = [
        {
            value: 75,
            value2: 19,
            month: 'Jan'
        },
        {
            value: 80,
            value2: 30,
            month: 'Feb'
        },
        {
            value: 95,
            value2: 45,
            month: 'Mar'
        },
        {
            value: 99,
            value2: 50,
            month: 'Apr'
        },
        {
            value: 90,
            value2: 55,
            month: 'May'
        },
        {
            value: 100,
            value2: 40,
            month: 'Jun'
        },
        {
            value: 95,
            value2: 48,
            month: 'Jul'
        },
        {
            value: 100,
            value2: 57,
            month: 'Aug'
        },
        {
            value: 95,
            value2: 64,
            month: 'Sep'
        },
        {
            value: 105,
            value2: 67,
            month: 'Oct'
        },
        {
            value: 90,
            value2: 52,
            month: 'Nov'
        },
        {
            value: 103,
            value2: 66,
            month: 'Dec'
        }
    ]
    return (
        <ResponsiveContainer width={ScreenWidth<=450?"98%":"90%"} height={ScreenWidth<=450?300:400}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor='gray' stopOpacity={0.7}/>
                        <stop offset="85%" stopColor='green' stopOpacity={0.05}/>
                    </linearGradient>
                </defs>
                <Area dataKey="value" stroke='blue' fill='url(#color)' />
                <Area dataKey="value2" stroke='green' fill='url(#color)' />
                <XAxis dataKey="month" />
                <YAxis dataKey="value" />
                <Tooltip />
                <CartesianGrid opacity={1} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}
