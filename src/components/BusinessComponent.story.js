import React from 'react';
import { storiesOf } from '@storybook/react';
import BusinessComponent from './BusinessComponent';

let items = [
  {
    id: 1,
    name: 'Sushi Rama',

    address: '99 Jackson Rd',
    phone: '555-555-5555',

    imagePath: 'https://s3-media4.fl.yelpcdn.com/bphoto/7ULFF9NYu8n3etk1zy7cIg/o.jpg'
  },
  {
    id: 2,
    name: 'Pizza Table',

    address: '234 Jackson Rd',
    phone: '777-555-5555',

    imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/NgLmAmeERhME1BML0Qpfig/o.jpg'
  },
  {
    id: 3,
    name: 'Way Out Burgers',

    address: '328 Jackson Rd',
    phone: '125-555-5555',

    imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/_pFe5IkVh1TMoADBNAZowQ/o.jpg'
  },
  {
    id: 4,
    name: 'China Foodie',

    address: '992 Jackson Rd',
    phone: '451-555-5555',

    imagePath: 'https://s3-media4.fl.yelpcdn.com/bphoto/QkqPmnxOq3PDktu2BkG5QA/o.jpg'
  },
  {
    id: 5,
    name: 'Dennies',

    address: '919 Jackson Rd',
    phone: '233-555-5555',

    imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/Y54tvkq8rmjvi4ZSg1c5oA/o.jpg'
  }
];
function onAddItem() {}
storiesOf('BusinessComponent', module) //
  .add('Example', () =>
    //
    <BusinessComponent
      items={items} //
      onAddItem={onAddItem}
    />
  );
