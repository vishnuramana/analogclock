import React from "react";
import Form from '../Form'
import { shallow } from "enzyme";

describe('Form component', () => {

    it('matches snapshot', () => {
        let options = {
            useCustomTime: false,
            width: "300px",
            border: true,
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#fff",
            handColors: {
                second: "#d81c7a",
                minute: "#fff",
                hour: "#fff"
            },
        }
        const wrapper = shallow(<Form defaultOptions={options} />);
        expect(wrapper).toMatchSnapshot()
    });

})