import React from "react";
import { mount } from "enzyme";
import "../setupTests";

import Form from '../Form.js';

describe('Form component', () => {
    const renderSpy = jest.spyOn(Form.prototype, "render");

    let defaultOptions = {
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

    it('mounts the component', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        expect(renderSpy).toBeCalledTimes(1);
    });

    it('sets clock size when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input#clock-size').simulate('change', { target: { name: 'width', value: 100 } });
        expect(wrapper.state('options').width).toEqual('100px');
    });

    it('sets custom time to true when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input#custom-time-yes').simulate('change');
        expect(wrapper.state('options').useCustomTime).toEqual(true);
    });

    it('sets custom time to false when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input#custom-time-yes').simulate('change');
        expect(wrapper.state('options').useCustomTime).toEqual(true);
        wrapper.find('input#custom-time-no').simulate('change');
        expect(wrapper.state('options').useCustomTime).toEqual(false);
    });

    it('sets border to false when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input#border-req-no').simulate('change');
        expect(wrapper.state('options').border).toEqual(false);
    });

    it('sets border to true when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input#border-req-no').simulate('change');
        expect(wrapper.state('options').border).toEqual(false);
        wrapper.find('input#border-req-yes').simulate('change');
        expect(wrapper.state('options').border).toEqual(true);
    });

    it('sets clock border color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="borderColor"]').simulate('change', { target: { name: 'borderColor', value: 'fff' } });
        expect(wrapper.state('options').borderColor).toEqual('#fff');
    });

    it('sets clock base color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="baseColor"]').simulate('change', { target: { name: 'baseColor', value: 'fff' } });
        expect(wrapper.state('options').baseColor).toEqual('#fff');
    });

    it('sets clock center color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="centerColor"]').simulate('change', { target: { name: 'centerColor', value: 'fff' } });
        expect(wrapper.state('options').centerColor).toEqual('#fff');
    });

    it('sets clock center border color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="centerBorderColor"]').simulate('change', { target: { name: 'centerBorderColor', value: 'fff' } });
        expect(wrapper.state('options').centerBorderColor).toEqual('#fff');
    });

    it('sets clock second hand color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="second"]').simulate('change', { target: { name: 'second', value: 'fff' } });
        expect(wrapper.state('options').handColors.second).toEqual('#fff');
    });

    it('sets clock minute hand color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="minute"]').simulate('change', { target: { name: 'minute', value: 'fff' } });
        expect(wrapper.state('options').handColors.minute).toEqual('#fff');
    });

    it('sets clock hour hand border color when changed', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        wrapper.find('input[name="hour"]').simulate('change', { target: { name: 'hour', value: 'fff' } });
        expect(wrapper.state('options').handColors.hour).toEqual('#fff');
    });

    it('sets random clock colors Surprise Me button is clicked', () => {
        const wrapper = mount(<Form defaultOptions={defaultOptions} />);
        const mockCustomizeClock = jest.fn();
        wrapper.setProps({
            customizeClock: mockCustomizeClock
        });
        wrapper.find('button#surprise').simulate('click')

        expect(wrapper.state('options').borderColor).not.toEqual('#2e2e2e');
        expect(wrapper.state('options').baseColor).not.toEqual('#17a2b8');
        expect(wrapper.state('options').centerColor).not.toEqual('#459cff');
        expect(wrapper.state('options').centerBorderColor).not.toEqual('#fff');
        expect(wrapper.state('options').handColors.second).not.toEqual('#d81c7a');
        expect(wrapper.state('options').handColors.minute).not.toEqual('#fff');
        expect(wrapper.state('options').handColors.hour).not.toEqual('#fff');
        expect(mockCustomizeClock).toBeCalledTimes(1);
    });
})