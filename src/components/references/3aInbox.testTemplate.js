import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageComponent from './MessageComponent';
import MessagesComponent from './MessagesComponent';

/*
Phase 3-A

Test MessageComponent

Write a unit test for MessageComponent using Jest/Enzyme which validates the following (at minimum):

  The message's subject line is rendered
  The read CSS class is present when message.read is true
  The unread CSS class is present when message.read is false
  The star icon is filled when the message.starred is true
  The selected CSS class is present when the selected prop is true
  The checkbox is checked when the selected prop is true
   // typo? The onAddItem callback gets triggered when you click on the "Add to Order" button/link

  The onMarkAsReadMessage callback is triggered when the message's subject line is clicked

  The onSelectMessage callback is triggered when the checkbox is checked
  The onDeselectMessage callback is triggered when the checkbox is unchecked

  The onStarMessage callback is triggered when star icon is clicked and was not yet filled
  The onUnstarMessage callback is triggered when star icon is clicked and was already filled
Note: Shallow rendering should be sufficient
  Also, write a snapshot test for MessageComponent using Jest.

Test MessagesComponent

Write a unit test for MessagesComponent using Jest/Enzyme which validates the following (at minimum):

1)
Verify the expected number of MessageComponents are rendered
based on the number of messages that are passed into MessagesComponent

2)
All of callbacks gets triggered when you interact with an individual message

*/

// functions
const checkItem = itemId => {
  //console.log(`This is the itemID!!! ${itemId}`);
};
// const onSelectMessage = messageId => {
//   //console.log(`This is the onSelectMessage!!! ${messageId}`);
// };
// const onDeselectMessage = messageId => {
//   //console.log(`This is the onDeselectMessage!!! ${messageId}`);
// };
// const onStarMessage = jest.fn();
// const onUnstarMessage = jest.fn();
// const onMarkAsReadMessage = messageId => {
//   //console.log(`This is onMarkAsReadMessage!!! ${messageId}`);
// };

const onStarMessage = jest.fn();
const onUnstarMessage = jest.fn();
const onSelectMessage = jest.fn();
const onDeselectMessage = jest.fn();
const onMarkAsReadMessage = jest.fn();

let message = {
  id: 1,
  subject: "You can't input the protocol without calculating the mobile RSS protocol!",
  read: false,
  starred: false,
  labels: ['dev', 'personal']
};

let message2 = {
  id: 1,
  subject: "You can't input the protocol without calculating the mobile RSS protocol!",
  read: true,
  starred: true,
  labels: ['dev', 'personal']
};

let selectedFalse = false;

let selectedTrue = true;

let selectedMessageIds = [1];

let messages = [
  {
    id: 1,
    subject: "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: false,
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject: "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    labels: []
  },
  {
    id: 3,
    subject: 'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: false,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 5,
    subject: 'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: false,
    starred: true,
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: false,
    starred: false,
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject: 'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: false,
    starred: true,
    labels: []
  }
];

// 3A MessageComponent
describe('a shallow test for MessageComponent', () => {
  //  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);
  const shallowWrapper = shallow(
    <MessageComponent
      selected={selectedTrue}
      message={message2}
      checkItem={checkItem}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onMarkAsReadMessage={onMarkAsReadMessage}
    />
  );

  const shallowWrapper2 = shallow(
    <MessageComponent
      selected={selectedTrue}
      message={message}
      checkItem={checkItem}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onMarkAsReadMessage={onMarkAsReadMessage}
    />
  );

  it('The selected CSS class is present when the selected prop is true', () => {
    expect(shallowWrapper.find('div.selected')).toHaveLength(1);
  }); // end of it

  it('The checkbox is checked when the selected prop is true', () => {
    expect(shallowWrapper.find('input[type="checkbox"][checked="checked"]')).toHaveLength(1);
  }); // end of it

  it('The read CSS class is present when message.read is true', () => {
    expect(shallowWrapper.find('div.read')).toHaveLength(1);
  }); // end of it

  it('The unread CSS class is present when message.read is false', () => {
    expect(shallowWrapper2.find('div.unread')).toHaveLength(1);
  }); // end of it

  it('Subject rendered ', () => {
    //mc//console.log('hi : ' + shallowWrapper2.find('a.msg').text());
    expect(shallowWrapper2.find('a.msg').text()).toEqual(message.subject);
  }); // end of it

  it('should have star if starred is true', () => {
    //  The star icon is filled when the message.starred is true
    expect(shallowWrapper.find('i')).toHaveLength(1);
    expect(shallowWrapper.find('i.fa-star')).toHaveLength(1);
  }); // end of it

  //  the onStarMessage callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onStarMessage function was fired', () => {
    const onStarMessage = jest.fn();

    mount(<MessageComponent onStarMessage={onStarMessage} message={message} />).find('.star').simulate('click');
    expect(onStarMessage).toHaveBeenCalled();
  });

  //the onUnstarMessage callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onUnstarMessage function was fired', () => {
    const onUnstarMessage = jest.fn();

    mount(<MessageComponent onStarMessage={onUnstarMessage} message={message} />).find('.star').simulate('click');
    expect(onUnstarMessage).toHaveBeenCalled();
  });

  //the onSelectMessage callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onSelectMessage function was fired', () => {
    const onSelectMessage = jest.fn();

    mount(<MessageComponent onSelectMessage={onSelectMessage} message={message} selected={selectedFalse} />).find('.checkBox').simulate('change');
    expect(onSelectMessage).toHaveBeenCalled();
  });

  //the onDeselectMessage callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onDeselectMessage function was fired', () => {
    const onDeselectMessage = jest.fn();

    mount(<MessageComponent onDeselectMessage={onDeselectMessage} message={message} selected={selectedTrue} />).find('.checkBox').simulate('change');
    expect(onDeselectMessage).toHaveBeenCalled();
  });

  //the onMarkAsReadMessage callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onMarkAsReadMessage function was fired', () => {
    const onMarkAsReadMessage = jest.fn();

    mount(<MessageComponent onMarkAsReadMessage={onMarkAsReadMessage} message={message} selected={selectedTrue} />).find('.msg').simulate('click');
    expect(onMarkAsReadMessage).toHaveBeenCalled();
  });

  expect(shallowWrapper).toMatchSnapshot();
});

// 3A MessagesComponent
/*
1)
Verify the expected number of MessageComponents are rendered
based on the number of messages that are passed into MessagesComponent

2)
All of callbacks gets triggered when you interact with an individual message
*/
describe('a shallow test for Messages Component ', () => {
  //  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);
  const shallowWrapper = shallow(
    <MessagesComponent
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      checkItem={checkItem}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onMarkAsReadMessage={onMarkAsReadMessage}
    />
  );

  it('Verify the expected number of MessageComponents are rendered based on the number of messages that are passed into MessagesComponent', () => {
    expect(shallowWrapper.find('MessageComponent')).toHaveLength(messages.length);

    //expect(mount(<MenuComponent items={menuItems} />).children()).toHaveLength(4);
  });

  const fullWrapper = mount(
    <MessagesComponent
      messages={messages}
      selectedMessageIds={selectedMessageIds}
      checkItem={checkItem}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onMarkAsReadMessage={onMarkAsReadMessage}
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
    expect(onStarMessage).toHaveBeenCalled();
  });

  it('3 should test if onUnstarMessage function was fired', () => {
    fullWrapper.find('.star').at(1).simulate('click');
    expect(onUnstarMessage).toHaveBeenCalled();
  });
  it('4 should test if onMarkAsReadMessage function was fired', () => {
    fullWrapper.find('.msg').first().simulate('click');
    expect(onMarkAsReadMessage).toHaveBeenCalled();
  });

  it('5 should test if onSelectMessage function was fired', () => {
    //mc//console.log(fullWrapper.find('.something').first().debug());
    fullWrapper.find('.checkBox').first().simulate('change');
    expect(onSelectMessage).toHaveBeenCalled();
  });
  it('6 should test if onDeselectMessage function was fired', () => {
    //mc//console.log(fullWrapper.find('.something').at(1).debug());
    fullWrapper.find('.checkBox').at(1).simulate('change');
    expect(onDeselectMessage).toHaveBeenCalled();
  });

  expect(shallowWrapper).toMatchSnapshot();
});
