
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import photo from "../../../assets/icons/Photo.png";
import {AuthButtonComponent} from "../../Button/auth_button";

const PostVisitsChart = () => {
    const data = [
        { month: 'Jan', visits: 65 },
        { month: 'Feb', visits: 78 },
        { month: 'Mar', visits: 90 },
        { month: 'Apr', visits: 85 },
        { month: 'May', visits: 95 },
        { month: 'Jun', visits: 110 },
        { month: 'Jul', visits: 125 },
        { month: 'Aug', visits: 140 },
        { month: 'Sep', visits: 135 },
        { month: 'Oct', visits: 150 },
        { month: 'Nov', visits: 160 },
        { month: 'Dec', visits: 175 }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
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
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <YAxis
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: '#e2e8f0' }}
                        tickFormatter={value => `${value}`}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4' }}
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
                        dot={{ r: 0 }}
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
};


const CategoryContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
    padding: 0;
    width: 90%;
  }
`;

const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  margin-left: 5px;
`;

const CategoryNameContainer = styled(Text)`
  font-size: 18px;
  font-weight: 1000;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderText = styled(Text)`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const HelperInfo = styled(Text)`
  color: darkgray;
  font-size: 12px;
`;

const MainMeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 0 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    //padding: 0 10px;
    padding: 2px;
    margin: 0;
  }
`;

const LastPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 10px;

  img {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.42) 5px 10px 10px 5px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
    
    img {
      height: 250px;
    }
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageSmallerHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.42) 5px 10px 10px 5px;
    object-fit: cover;
  }
`;

const PostsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    gap: 15px;
    padding: 5px;
    
  }
`;

export const PostBtnEditContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

// smaller icons

export const SmallerPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 10px;

  //img {
  //  width: 100%;
  //  height: 100px;
  //  border-radius: 20px;
  //  box-shadow: rgba(0, 0, 0, 0.42) 5px 10px 10px 5px;
  //  object-fit: cover;
  //}
  //
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  
  //  img {
  //    height: 100px;
  //    object-fit: cover;
  //  }
  //}
`;

function LastPostSmaller({image, category, helper_text}){
    return (
        <SmallerPostContainer>
            <ImageSmallerHolder>
                <img src={image}/>
            </ImageSmallerHolder>
            <div style={{ display: "block", gap: "10px"}}>
                <div>
                    <CategoryNameContainer>{category}</CategoryNameContainer>
                    <HelperInfo>{helper_text}</HelperInfo>
                </div>
                <PostBtnEditContainer>
                    <AuthButtonComponent
                        width={80}
                        height={50}
                        background={"blue"}
                        color={"white"}
                        text="Edit">
                    </AuthButtonComponent>
                    <AuthButtonComponent
                        width={80}
                        height={50}
                        background={"red"}
                        color={"white"}
                        text="Delete">
                    </AuthButtonComponent>
                </PostBtnEditContainer>
            </div>
        </SmallerPostContainer>
    )
}


function LastPost({image, category, helper_text}){
    return (
        <LastPostsContainer>
            <ImageHolder>
                <img src={image}/>
            </ImageHolder>
            <div style={{ display: "flex"}}>
                <div>
                    <CategoryNameContainer>{category}</CategoryNameContainer>
                    <HelperInfo>{helper_text}</HelperInfo>
                </div>
                <PostBtnEditContainer>
                    <AuthButtonComponent
                        width={80}
                        height={50}
                        background={"blue"}
                        color={"white"}
                        text="Edit">
                    </AuthButtonComponent>
                </PostBtnEditContainer>
                <PostBtnEditContainer>
                    <AuthButtonComponent
                        width={80}
                        height={50}
                        background={"red"}
                        color={"white"}
                        text="Delete">
                    </AuthButtonComponent>
                </PostBtnEditContainer>
            </div>
        </LastPostsContainer>
    )
}

function HelperComponent({image, header, helper}){
    return (
        <CategoryContainer>
            <PostsTable>
                <LastPostSmaller
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPostSmaller
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPostSmaller
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPostSmaller
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
            </PostsTable>
        </CategoryContainer>
    )
}

function ExampleComponent(){
    return (
        <MainMeContainer>
            <HeaderText>Recently Added Posts</HeaderText>
            <CategoryContainer>
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <LastPost
                    image={photo}
                    category="Technology"
                    helper_text="Recommanded"
                />
                <PostVisitsChart/>
            </CategoryContainer>
            <div>
                <HeaderText>Post History</HeaderText>
            </div>
            <HelperComponent/>
        </MainMeContainer>
    )
}

export default ExampleComponent;