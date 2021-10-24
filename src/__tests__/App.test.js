import React from "react";
import App from '../App'
import { shallow } from "enzyme";

describe('App component', () => {

    it('matches snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot()
    });

    it('matches snapshot when options are changed', () => {
        const wrapper = shallow(<App />);
        let options = {
            useCustomTime: true,
            seconds: 10,
            minutes: 10,
            hours: 10,
            baseColor: "red",
            border: false,
            borderColor: "#fff",
            centerBorderColor: "black",
            centerColor: "blue"
        }
        wrapper.setState({ 'options': { ...wrapper.state().options, ...options } });
        expect(wrapper).toMatchSnapshot()
    });
})