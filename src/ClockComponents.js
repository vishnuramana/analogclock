import styled from 'styled-components';

const ClockContainer = styled.div`
        	height: ${props => props.width || "400px"};
            width: ${props => props.width || "400px"};
        `;

const ClockBaseBorder = styled.div`
            position: relative;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            background-color: ${props => props.borderColor ? props.borderColor : "transparent"};
            padding: ${props => props.border ? "5% 5% 5% 5%" : "0"};
            border-radius: 100%;
        `;
const ClockBase = styled.div`
            position: relative;
            height: 100%;
            width: 100%;
            background-color: ${props => props.baseColor ? props.baseColor : "black"};
            border-radius: 100%;
        `;
const ClockCenter = styled.div`
            position: absolute;
            left: 50%;
            top: 50%;
            width: 12px;
            height: 12px;
            border: 2px solid #fff;
            background-color: #459cff;
            border-radius: 100%;
            margin-left: -6px;
            margin-top: -9px;
            z-index: 100;
        `;

export { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter };