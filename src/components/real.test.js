import React from 'react';
import { shallow, mount } from 'enzyme';
import BusinessItemComponent from './BusinessItemComponent';
import BusinessComponent from './BusinessComponent';

/*

*/

const onAddItem = jest.fn();
const onShowForm = jest.fn();

let rental = {
  address: '1 Cassandra Ct',
  bath: '10',
  bed: '20',
  city: 'Dublin',
  contactinfo: 'jonnybranstorm@mansionrents.com',
  contactname: 'Jimmy Mogul',
  cooling: 'yes',
  description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
  heating: 'yes',
  id: 'recoNt3jEaICqmsms',
  parking: '5 car garage',
  photourl: '/images/6.jpg',
  price: '1212',
  sqft: '15930',
  year: '2001'
};

// 3A MessageComponent
describe('a shallow test for BusinessItemComponent', () => {
  const shallowWrapper = shallow(<BusinessItemComponent key={1} rental={rental} onAddItem={onAddItem} onShowForm={onShowForm} />);

  const fullWrapper = mount(
    <BusinessItemComponent
      key={1}
      //key={userpref.id} //
      rental={rental}
      onAddItem={onAddItem}
      onShowForm={onShowForm}
    />
  );

  // All of callbacks gets triggered when you interact with an individual message
  //Verify the expected number of MessageComponents are rendered based on the
  //number of messages that are passed into MessagesComponent
  it('1 tests children elemenets with full rendering', () => {
    expect(fullWrapper.children()).toHaveLength(8);
  });

  // All of callbacks gets triggered when you interact with an individual message
  it('2 should test if onStarMessage function was fired', () => {
    fullWrapper.find('.star').at(0).simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('3 should test if onUnstarMessage function was fired', () => {
    fullWrapper.find('.star').at(1).simulate('click');
    expect(onShowForm).toHaveBeenCalled();
  });

  expect(shallowWrapper).toMatchSnapshot();
});
