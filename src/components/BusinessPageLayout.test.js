import React from 'react';
import { shallow } from 'enzyme';
import BusinessPageLayout from './BusinessPageLayout';

let rental = {
  address: '20 Lanley',
  city: 'Oakland',
  description: 'a nice home',
  parking: 'yes there is parking',
  sqft: 3000,
  price: 2000,
  year: 2001,
  cooling: 'true',
  heating: 'true',
  agentId: 1
};

describe('BusinessPageLayout', () => {
  const wrapper = shallow(
    <BusinessPageLayout
      rental={rental}
      //  updateRental={updateRental}
    />
  );

  // test React element
  it('should get one React Element', () => {
  //mc//console.log('WRAPPER', wrapper.props());
    expect(wrapper.props().rental).toEqual(rental);
  });

  it('shouldrequired the shallowWrapper object', () => {
  //mc//console.log(wrapper.debug());
  });
}); // end of test
