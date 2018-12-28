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

const ClockHand = styled.div`
            position: absolute;
            top: 50%;
            left: ${props => props.type === 'second' ? "40%" : "45%"};
            outline: ${props => props.type === 'second' ? "2px solid #d81c7a" : "2px solid #fff"};

            ${props => props.type === 'second' && css`
                    width:60%;
                    transform-origin: 17%;
                    transform: rotate(${props => props.handAngle}deg);
                    transition: ${props => props.handAngle > 270 && 'transform 250ms ease-in-out'};
                    // animation: ${props => props.secondStartAngle && sweep(props.secondStartAngle)} 60s linear 0s infinite;
            `}
            ${props => props.type === 'minute' && css`
                    width:45%;
                    transform-origin: 12%;
                    transform: rotate(${props => props.handAngle}deg);
            `}
            ${props => props.type === 'hour' && css`
                    width:35%;
                    transform-origin: 15%;
                    transform: rotate(${props => props.handAngle}deg);
            `}
        `;

const sweep = (secondStartAngle) => keyframes`
    from {
        transform: rotate(${secondStartAngle}deg)}
    }
    to {
        transform: rotate(${secondStartAngle + 360}deg)}
    }`

export { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter, ClockHand };