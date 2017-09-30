import React from 'react';

import ToolbarComponent from './ToolbarComponent';
import MessagesComponent from './MessagesComponent';
import ComposeFormComponent from './ComposeFormComponent';

export default function InboxPageLayout(props) {
  //
  //  //console.log('IndexPageLayout Selected: ' + props.selectedMessageIds);

  return (
    <div className="InboxPageLayout">
      {/* {//console.log(props)} */}
      <ToolbarComponent //
        messages={props.messages} //
        selectedMessageCount={props.selectedMessageCount}
        //
        showComposeForm={props.showComposeForm} //
        onOpenComposeForm={props.onOpenComposeForm}
        onSelectAllMessages={props.onSelectAllMessages}
        onDeselectAllMessages={props.onDeselectAllMessages}
        //
        onMarkAsReadMessage={props.onMarkAsReadMessage}
        onMarkAsReadSelectedMessages={props.onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={props.onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={props.onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={props.onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={props.onDeleteSelectedMessages}
      />
      {props.showComposeForm && <ComposeFormComponent onSubmit={props.onSubmit} onCancel={props.onCancel} />}

      <MessagesComponent //
        messages={props.messages} //
        selectedMessageIds={props.selectedMessageIds}
        //  checkItem={props.checkItem}
        //
        onSelectMessage={props.onSelectMessage}
        onDeselectMessage={props.onDeselectMessage}
        onStarMessage={props.onStarMessage}
        onUnstarMessage={props.onUnstarMessage}
        onMarkAsReadMessage={props.onMarkAsReadMessage}
      />
    </div>
  );
}
