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
            transform:translate(-50%, -50%);
            width:5%;
            height:5%;
            box-shadow:0 0 0 2px ${props => props.centerBorderColor ? props.centerBorderColor : "#fff"};;
            background-color: ${props => props.centerColor ? props.centerColor : "#459cff"};
            border-radius: 100%;
            z-index: 100;
        `;

const ClockHand = styled.div`
            position: absolute;
            top: 50%;
            transform:translate(-50%, -50%);
            left: ${props => props.type === 'second' ? "40%" : "45%"};

            ${props => props.type === 'second' && css`
                    width: 55%;
                    outline: ${props => props.handColors && props.handColors.second ? "1px solid " + props.handColors.second : "1px solid #d81c7a"};
                    transform-origin: 17%;
                    transform: rotate(${props => props.handAngle}deg);
                    transition: ${props => props.handAngle > 270 && 'transform 250ms ease-in-out'};
                    // animation: ${props => props.secondStartAngle && sweep(props.secondStartAngle)} 60s linear 0s infinite;
            `}
            ${props => props.type === 'minute' && css`
                    width:45%;
                    outline: ${props => props.handColors && props.handColors.minute ? "2px solid " + props.handColors.minute : "2px solid #fff"};
                    transform-origin: 11.5%;
                    transform: rotate(${props => props.handAngle}deg);
            `}
            ${props => props.type === 'hour' && css`
                    width:35%;
                    outline: ${props => props.handColors && props.handColors.hour ? "2px solid " + props.handColors.hour : "2px solid #fff"};
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
