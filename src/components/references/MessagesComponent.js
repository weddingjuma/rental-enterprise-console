import React from 'react';

import MessageComponent from './MessageComponent';

export default function MessagesComponent({
  messages,
  selectedMessageIds,
  checkItem,
  onSelectMessage,
  onDeselectMessage,
  onStarMessage,
  onUnstarMessage,
  onMarkAsReadMessage
}) {
  //
  ////console.log('MessagesComponent');
  ////console.log('SELECTED IDS on MESGSCOMP' + selectedMessageIds);
  // //console.log('messagesCOMP ' + messages);
  // //console.log(messages);

  return (
    // start of loop
    <div>
      {messages.map(message => {
        let selected = false;

        // if message.id === selectedIDs then set true
        ////console.log('array: ' + Array.isArray(selectedMessageIds));

        //////////////

        let index = selectedMessageIds.findIndex(
          // callback function
          // 1 verify each id with the message id
          selectedId => {
            return selectedId === message.id;
          } // end of callback, return 100 if found, -1 if not
        );
        //  //console.log('INDEX ' + index);

        if (index > -1) {
          // if array has the selectedID,
          ////console.log('SET TRUE >.............');
          selected = true;
        } // end of if

        return (
          <MessageComponent
            selected={selected} //
            message={message} //
            key={message.id} //
            checkItem={checkItem}
            //
            onSelectMessage={onSelectMessage}
            onDeselectMessage={onDeselectMessage}
            onStarMessage={onStarMessage}
            onUnstarMessage={onUnstarMessage}
            onMarkAsReadMessage={onMarkAsReadMessage}
          />
        );
      })}
    </div>
  );
}
