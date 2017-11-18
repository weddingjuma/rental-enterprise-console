import React from 'react';
import { shallow } from 'enzyme';
import BusinessItemDetailComponent from './BusinessItemDetailComponent';

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

const showForm2 = () => {
//mc//console.log('this is to show the form to update/delete');
};

describe('BusinessItemDetailComponent', () => {
  const wrapper = shallow(
    <BusinessItemDetailComponent
      rental={rental}
      //
      showForm2={showForm2}
    />
  );

  // // test React element
  it('should get one React Element', () => {
  //mc//console.log('WRAPPER', wrapper.props());
    expect(wrapper.props().rental).toEqual(rental);
  });

  // it('shouldrequired the shallowWrapper object', () => {
  // //mc//console.log(wrapper.debug());
  // });

  it('1 finds the div and BusinessItemDetailComponent  class', () => {
    expect(wrapper.find('div.BusinessItemDetailComponent')).toHaveLength(1);
  });

  it('2 finds the div and card class', () => {
    expect(wrapper.find('div.card')).toHaveLength(1);
  });

  it('3 finds the div and card-image class', () => {
    expect(wrapper.find('div.card-image')).toHaveLength(1);
  });

  it('4 finds the img tag. Need only 1 image!', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
  it('5 finds the span tag and card-title class', () => {
    expect(wrapper.find('span.card-title')).toHaveLength(1);
  });
  it('6 finds the div tag and card-content class', () => {
    expect(wrapper.find('div.card-content')).toHaveLength(1);
  });

  it('7 finds the table tag and needs 1', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  it('8 finds the tbody tag and needs 1', () => {
    expect(wrapper.find('tbody')).toHaveLength(1);
  });

  it('9 finds the tr tag and needs 3', () => {
    expect(wrapper.find('tr')).toHaveLength(3);
  });

  it('10 finds the td tag and needs 10', () => {
    expect(wrapper.find('td')).toHaveLength(10);
  });

  // TEST OTHER STUFF
  it('renders the BusinessItemDetailComponent', () => {
    //1 verify the rental address
    expect(wrapper.find('span').text()).toBe(rental.address + ' ' + rental.city);
  });

  // This is how you should properly test your mocked functions.
  it('Test if showForm2 function was fired', () => {
    const showForm2 = jest.fn();
    mount(
      <BusinessItemDetailComponent
        rental={rental}
        //
        showForm2={showForm2}
      />
    )
      .find('.btn waves-effect blue waves-light')
      .simulate('click');
    expect(showForm2).toHaveBeenCalled();
  });

  describe('full render tests', () => {
    const fullWrapper = mount(
      <BusinessItemDetailComponent
        rental={rental}
        //
        showForm2={showForm2}
      />
    );

    it('should test the props of the component', () => {
      expect(fullWrapper.props().rental).toEqual(rental);
    });
  });
}); // end of test
