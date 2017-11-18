import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ToolbarComponent from './components/ToolbarComponent';
import MessagesComponent from './components/MessagesComponent';
import ComposeFormComponent from './components/ComposeFormComponent';

export default function InboxPage(props) {
  //

  //mc//console.log('INBOX SELECTED' + props.selectedMessageIds);
  return (
    <div className="InboxPageLayout">
      <ToolbarComponent //
        messages={props.messages} //
        selectedMessageCount={props.selectedMessageCount}
      />

      <MessagesComponent //
        messages={props.showComposeForm} //
        selectedMessageIds={props.selectedMessageIds}
      />

      {props.showComposeForm && <ComposeFormComponent onSubmit={props.onSubmit} onCancel={props.onCancel} />}
    </div>
  );
}
