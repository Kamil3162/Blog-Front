import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveMotion = keyframes`
  0% {
    transform: translateX(100%) translateY(20%) scaleY(1.5) scaleX(1.5);
  }
  100% {
    transform: translateX(0) translateY(-50%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-top: 30px;
  transform: translateY(-50%);
  width: 100%;
  height: 100px; /* Adjust height as needed */
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  transform: rotate(180deg); /* Rotate the line by 180 degrees */
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  animation: ${waveMotion} 4s linear forwards;
`;

const Line = styled.div`
  left: 0;
  width: 40px;
  height: 2px;
  margin-top: 7px;
  background-color: black;
  animation: ${waveMotion} 1s linear forwards;
`;

const ArrowAnimation = () => {
    return (
        <Container>
            <Arrow className="arrow">&#10231;</Arrow>
            <Line className="line"></Line>
        </Container>
    );
};

export default ArrowAnimation;
