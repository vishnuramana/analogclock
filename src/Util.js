class Util {
    static getHandAngle(props) {
        let handType = props.type;
        let handAngle = 0;
        switch (handType) {
            case 'second': handAngle = (270 + (props.seconds * 6));
                break;
            case 'minute': handAngle = (270 + (props.minutes * 6));
                break;
            case 'hour': handAngle = (270 + (props.hours * 30) + ((props.minutes / 60) * 30));
                break;
            default: handAngle = 0;
        }
        return handAngle;
    }

    static getHourIn12HrFormat(hour) {
        if (hour) {
            if (hour > 12) {
                hour -= 12;
            }
        } else {
            hour = 0;
        }
        return hour;
    }
}

export default Util;