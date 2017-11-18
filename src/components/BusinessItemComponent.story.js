import React from 'react';
import { storiesOf } from '@storybook/react';
import BusinessItemComponent from './BusinessItemComponent';

import './BusinessItemComponent.story.css';

const item = {
  id: 1,
  name: 'Business A',
  address: '99 Jackson Rd',
  phone: '555-555-5555',

  imagePath: 'https://s3-media4.fl.yelpcdn.com/bphoto/7ULFF9NYu8n3etk1zy7cIg/o.jpg'
};

storiesOf('BusinessItemComponent', module) //
  .add('Happy Path', () =>
    //
    <BusinessItemComponent
      item={item} //
      onAddItem={itemId => //console.log('hiya 1 ' + itemId)}
      larry={'larry'}
    />
  ) //
  .add('Incomplete w No address', () =>
    <BusinessItemComponent
      item={item}
      onAddItem={itemId => {
  //mc//console.log('hiya 2 ' + itemId);
      }}
    />
  ) //
  .add('Invalid Info ', () =>
    //
    <BusinessItemComponent
      item={item}
      onAddItem={itemId => {
  //mc//console.log('Hiya' + itemId);
      }}
    />
  ) //
  .add('Empty item', () =>
    //
    <BusinessItemComponent item={{}} />
  ) //
  .add('No Item Passed In', () =>
    //
    <BusinessItemComponent />
  );
