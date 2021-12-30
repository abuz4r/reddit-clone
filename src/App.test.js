import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';
import Nav from './components/Nav/Nav.container';
import Subreddit from './components/Subreddit.container';
import Post from './components/Post.container';

describe('Component: App', () => {
  describe('when renders', () => {
    it('renders without crashing', () => {
      const shallowWrapper = shallow(<App />);
      expect(shallowWrapper.type()).toBe('div');
    });

    it('renders Nav as first child of div', () => {
      const shallowWrapper = shallow(<App />).find('div').childAt(0);
      expect(shallowWrapper.type()).toBe(Nav);
    });

    it('renders main as second child of div', () => {
      const shallowWrapper = shallow(<App />).find('main');
      expect(shallowWrapper).toHaveLength(1);
    });

    it('renders Post as first child of main', () => {
      const shallowWrapper = shallow(<App />).find('main').childAt(0);
      expect(shallowWrapper.type()).toBe(Post);
    });

    it('renders aside as second child of main', () => {
      const shallowWrapper = shallow(<App />).find('main').childAt(1);
      expect(shallowWrapper.type()).toBe('aside');
    });

    it('renders aside as first child of aside', () => {
      const shallowWrapper = shallow(<App />).find('aside').childAt(0);
      expect(shallowWrapper.type()).toBe(Subreddit);
    });
  });
});
