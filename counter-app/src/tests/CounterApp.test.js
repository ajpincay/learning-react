import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas de <CounterApp>', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('deber hacer match con el snapshot', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor de 100 ', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

    });

    test('debe sumar contador', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe restar contador', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Reset value', () => {

        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });

});
