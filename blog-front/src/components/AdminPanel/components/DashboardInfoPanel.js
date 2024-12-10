import {
    DashBoardInfoFont, DashBoardPanelsFonts,
    LeftDashBoardImageContainer,
    LeftDashBoardInfoContainer,
    LeftDashBoardPanelEsa, RightDashBoardInfoContainer
} from "../styles/AdminPanelStyled";
import {LeftPanelElementText} from "../styles/LeftPanelStyled";
import chart from "../../../assets/icons/chart.png";

import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
    {
        name: 'Jan',
        revenue: 4000,
        users: 2400,
        engagement: 2400,
    },
    {
        name: 'Feb',
        revenue: 3000,
        users: 1398,
        engagement: 2210,
    },
    {
        name: 'Mar',
        revenue: 2000,
        users: 9800,
        engagement: 2290,
    },
    {
        name: 'Apr',
        revenue: 2780,
        users: 3908,
        engagement: 2000,
    },
    {
        name: 'May',
        revenue: 1890,
        users: 4800,
        engagement: 2181,
    },
    {
        name: 'Jun',
        revenue: 2390,
        users: 3800,
        engagement: 2500,
    },
    {
        name: 'Jul',
        revenue: 3490,
        users: 4300,
        engagement: 2100,
    },
];

const DashboardChart = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        fill="rgba(114, 87, 178, 0.2)"
                        stroke="rgba(114, 87, 178, 0.8)"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#2c2c77"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="engagement"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};


const DashboardInfoPanel = () => {
    return (
        <>
        <LeftDashBoardInfoContainer>
            <LeftDashBoardPanelEsa>
                <LeftPanelElementText>
                    Built by developers
                </LeftPanelElementText>
                <DashBoardInfoFont>
                    Soft UI Dashboard
                </DashBoardInfoFont>
                <LeftPanelElementText>
                    From colors, cards, typography to complex elements, you will find the full documentation.
                </LeftPanelElementText>
            </LeftDashBoardPanelEsa>
            <LeftDashBoardImageContainer>
                <img src={chart} alt="Chart"/>
            </LeftDashBoardImageContainer>
        </LeftDashBoardInfoContainer>
        {/*<RightDashBoardInfoContainer>*/}
        {/*    <DashBoardPanelsFonts*/}
        {/*        font_size="25" // Assuming you want the font size to be 16px*/}
        {/*        font_weight="600" // Normal font weight*/}
        {/*        font_family="'Raleway', sans-serif" // Specifying the font family*/}
        {/*        margin_bottom="10" // Assuming you want a bottom margin of 10px*/}
        {/*        color="white">*/}
        {/*        Work with the rockets*/}
        {/*    </DashBoardPanelsFonts>*/}
        {/*    <DashBoardPanelsFonts*/}
        {/*        font_size="18" // Assuming you want the font size to be 16px*/}
        {/*        font_weight="600" // Normal font weight*/}
        {/*        font_family="'Raleway', sans-serif" // Specifying the font family*/}
        {/*        margin_bottom="10" // Assuming you want a bottom margin of 10px*/}
        {/*        color="white">*/}
        {/*        Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.*/}
        {/*    </DashBoardPanelsFonts>*/}
        {/*</RightDashBoardInfoContainer>*/}
        <DashboardChart />
    </>
    )
}

export default DashboardInfoPanel;