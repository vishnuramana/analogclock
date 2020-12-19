import styled, { css, keyframes } from 'styled-components';

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
            padding: ${props => props.border ? "5%" : "0"};
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
            border: 2px solid ${props => props.centerBorderColor ? props.centerBorderColor : "#fff"};;
            background-color: ${props => props.centerColor ? props.centerColor : "#459cff"};
            border-radius: 100%;
            margin-left: -6px;
            margin-top: -6px;
            z-index: 100;
        `;

const ClockHand = styled.div`
        box-sizing: border-box;
        height: 1.5%;
        min-height: 2px;
        max-height: 6px;

            ${props => props.type === 'second' && css`
                    width: 60%;
                    margin-left: 40%;
                    background-color: ${props => props.handColors && props.handColors.second ? props.handColors.second : "#d81c7a" };
            `}
            ${props => props.type === 'minute' && css`
                    width: 45%;
                    margin-left: 45%;
                    background-color: ${props => props.handColors && props.handColors.minute ? props.handColors.minute : "#fff" };
            `}
            ${props => props.type === 'hour' && css`
                    width: 35%;
                    margin-left: 45%;
                    background-color: ${props => props.handColors && props.handColors.hour ? props.handColors.hour : "#fff" };
            `}
        `;

const ClockHandContainer = styled.div`
        position: absolute;
        width: 100%
        height: 100%;
        display: flex;
        align-items: center;

        transform: rotate(${props => props.handAngle}deg);
        transition: ${props => props.handAngle > 270 && 'transform 250ms ease-in-out'};
    `;

export { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter, ClockHand, ClockHandContainer };