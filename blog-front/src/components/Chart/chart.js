import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

const PostVisitsChart = () => {
    const data = [
        {month: 'Jan', visits: 65},
        {month: 'Feb', visits: 78},
        {month: 'Mar', visits: 90},
        {month: 'Apr', visits: 85},
        {month: 'May', visits: 95},
        {month: 'Jun', visits: 110},
        {month: 'Jul', visits: 125},
        {month: 'Aug', visits: 140},
        {month: 'Sep', visits: 135},
        {month: 'Oct', visits: 150},
        {month: 'Nov', visits: 160},
        {month: 'Dec', visits: 175}
    ];

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: 'rgba(7,6,6,0.5)',
                    padding: '12px 16px',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}>
                    <p style={{
                        margin: '0 0 8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#333'
                    }}>{`${label}`}</p>
                    <p style={{
                        margin: '0',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#2563eb'
                    }}>
                        {`${payload[0].value} visits`}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{
            width: '100%',
            height: 400,
            padding: '24px',
            background: `linear-gradient(120deg, rgba(248, 250, 252, 0.9) 0%, rgba(226, 232, 240, 0.9) 100%)`,
            // background: `
            //   linear-gradient(120deg, rgba(248, 250, 252, 0.9) 0%, rgba(226, 232, 240, 0.9) 100%),
            //   linear-gradient(90deg, rgba(203, 213, 225, 0.1) 0%, rgba(148, 163, 184, 0.1) 100%)
            // `,
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f0f0f0"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="month"
                        tick={{fill: '#64748b', fontSize: 12}}
                        tickLine={false}
                        axisLine={{stroke: '#e2e8f0'}}
                    />
                    <YAxis
                        tick={{fill: '#64748b', fontSize: 12}}
                        tickLine={false}
                        axisLine={{stroke: '#e2e8f0'}}
                        tickFormatter={value => `${value}`}
                    />
                    <Tooltip
                        content={<CustomTooltip/>}
                        cursor={{stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4'}}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: '20px',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="visits"
                        name="Monthly Visits"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{r: 0}}
                        activeDot={{
                            r: 6,
                            fill: '#2563eb',
                            stroke: 'white',
                            strokeWidth: 2
                        }}
                        fill="url(#colorVisits)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PostVisitsChart;