import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const initialState = {
    categories: [{
      title: 'Gregor',
      budget: '1000',
      id: '0.123',
      createdOn: new Date(),
    },
    {
      title: 'Hound',
      budget: '1000',
      id: '0.333',
      createdOn: new Date(),
    }],
    expenses: {
      0.123: [],
      0.333: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider 
      store={mockStore(initialState)}>
      <Dashboard /></Provider>);
    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('Category').length).toEqual(2);
  });
});
