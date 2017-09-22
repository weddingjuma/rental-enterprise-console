import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageComponent from './MessageComponent';

// import './MessageComponent.story.css';

storiesOf('MessageComponent', module) //
  .add('Unread UNStarred', () =>
    // UNREAD, UNSTARRED
    <MessageComponent
      selected={false}
      message={{
        id: 1,
        subject: 'Unread Unstarred',
        read: false,
        starred: false,
        labels: ['dev', 'personal']
      }}
    />
  )
  .add('Read UNStarred', () =>
    // READ Unstarred
    <MessageComponent
      selected={false}
      message={{
        id: 1,
        subject: 'Read Unstarred',
        read: true,
        starred: false,
        labels: ['dev', 'personal']
      }}
    />
  )
  .add('Selected', () =>
    // SELECTED
    <MessageComponent
      selected={true}
      message={{
        id: 1,
        subject: 'selected',
        read: false,
        starred: true,
        labels: ['dev', 'personal']
      }}
    />
  )
  .add('Starred', () =>
    //   STARRED
    <MessageComponent
      selected={false}
      message={{
        id: 1,
        subject: 'Starred, Read',
        read: true,
        starred: true,
        labels: ['dev', 'personal']
      }}
    />
  )
  .add('With Labels', () =>
    //  with Labels
    <MessageComponent
      selected={false}
      message={{
        id: 1,
        subject: 'With Labels!',
        read: false,
        starred: true,
        labels: ['dev', 'personal']
      }}
    />
  );
