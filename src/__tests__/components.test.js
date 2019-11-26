import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from "react-test-renderer";
import App from '../app.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Our components are functioning', () => {
  it('Deck renders', () => {
    let deck = mount(<App />);
    let form = deck.find('form');
    expect(form.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<App />);
    let div = deck.find('div');
    expect(div.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<App />);
    let button = deck.find('button');
    expect(button.exists()).toBeTruthy();
  });
});
