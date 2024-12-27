import {
    DashBoardInfoFont, DashBoardPanelsFonts,
    LeftDashBoardImageContainer,
    LeftDashBoardInfoContainer,
    LeftDashBoardPanelEsa, RightDashBoardInfoContainer
} from "../styles/AdminPanelStyled";
import {LeftPanelElementText} from "../styles/LeftPanelStyled";
import chart from "../../../assets/icons/chart.png";

import {ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';
import styled from "styled-components";
//
//
// const DashboardContainer = styled.div`
//   background-color: rgba(255,255,255,0.6);
//   border-radius: 12px;
//   padding: 24px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   width: 100%;
// `;
//
// const ChartTitle = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   color: #1a1a1a;
//   margin: 0 0 24px 0;
// `;
//
// const ChartWrapper = styled.div`
//   height: 400px;
//   width: 100%;
// `;
//
// const CustomTooltip = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   padding: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   border: none;
//
//   .label {
//     font-weight: 600;
//     margin-bottom: 8px;
//   }
//
//   .data-item {
//     display: flex;
//     align-items: center;
//     margin: 4px 0;
//
//     .dot {
//       width: 8px;
//       height: 8px;
//       border-radius: 50%;
//       margin-right: 8px;
//     }
//
//     .value {
//       margin-left: 4px;
//       font-weight: 500;
//     }
//   }
// `;


// Styled Components
const DashboardContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
    border-radius: 10px;
    //margin: 0 10px;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 500px;

  @media (max-width: 600px) {
    height: 300px;  // Smaller height on mobile
  }
`;

const ChartTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const CustomTooltip = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  .data-item {
    display: flex;
    align-items: center;
    margin: 4px 0;
    font-size: 14px;
    color: #666;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .value {
      margin-left: 4px;
      font-weight: bold;
      color: #333;
    }
  }

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;

    .data-item {
      font-size: 12px;
      margin: 2px 0;

      .dot {
        width: 6px;
        height: 6px;
      }
    }
  }
`;


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

    const CustomTooltipContent = ({ active, payload, label }) => {
        if (!active || !payload) return null;

        return (
            <CustomTooltip>
                <div className="label">{label}</div>
                {payload.map((entry, index) => (
                    <div key={index} className="data-item">
                        <div
                            className="dot"
                            style={{ backgroundColor: entry.color }}
                        />
                        {entry.name}:
                        <span className="value">
              {entry.value.toLocaleString()}
            </span>
                    </div>
                ))}
            </CustomTooltip>
        );
    };

    return (
        <DashboardContainer>
            <ChartTitle>Performance Dashboard</ChartTitle>
            <ChartWrapper>
                <ResponsiveContainer>
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#f0f0f0"
                        />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: '#666' }}
                            axisLine={{ stroke: '#e0e0e0' }}
                        />
                        <YAxis
                            tick={{ fill: '#666' }}
                            axisLine={{ stroke: '#e0e0e0' }}
                            width={60}
                        />
                        <Tooltip content={<CustomTooltipContent />} />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            iconType="circle"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            fill="url(#revenueGradient)"
                            stroke="#8884d8"
                            strokeWidth={3}
                            name="Revenue"
                        />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#2c2c77"
                            strokeWidth={3}
                            dot={{ r: 4, strokeWidth: 2 }}
                            name="Users"
                        />
                        <Line
                            type="monotone"
                            dataKey="engagement"
                            stroke="#399999"
                            strokeWidth={3}
                            dot={{ r: 4, strokeWidth: 2 }}
                            name="Engagement"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </DashboardContainer>
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
                {/*<img src={chart} alt="Chart"/>*/}
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