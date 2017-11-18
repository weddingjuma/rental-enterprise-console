import React from 'react';

export default function MessageComponent({
  selected,
  message,
  //checkItem,
  onSelectMessage,
  onDeselectMessage,
  onStarMessage,
  onUnstarMessage,
  onMarkAsReadMessage
}) {
  //
  let readStatus = 'unread';
  //mc//console.log('message? ' + message.read);
  if (message.read === true) {
    readStatus = 'read';
  }

  let selectedStatus = '';
  let checkStatus = '';

  if (selected === true) {
    selectedStatus = 'selected';
    checkStatus = 'checked';
  } else {
    selectedStatus = '';
    checkStatus = '';
  }
  //mc//console.log('selected ' + selected);

  function handleClick(event) {
    event.preventDefault();
    //  //console.log('starred: ' + message.id);
    if (message.starred) {
      onUnstarMessage(message.id);
    } else {
      onStarMessage(message.id);
    }
  }

  function handleRead(event) {
    event.preventDefault();

    onMarkAsReadMessage(message.id);
  }

  function handleCheck(event) {
    //  //console.log('checkbox ' + message.id);
    if (checkStatus === '') {
      //
      onSelectMessage(message.id);
    } else {
      onDeselectMessage(message.id);
    }

    //checkItem(message.id, 'check');
  }

  // //console.log('MessageCOmp Props: ' + selected);
  // //console.log(selected);
  // if (checkStatus === 'checked') {
  //   //console.log(message.id + ' Checked on MsgComp: ' + checkStatus + '');
  // }
  if (!message.labels) {
    message.labels = [];
  }
  //mc//console.log(message.subject + ' ' + message.starred);
  let responsible = '';
  if (message.id === 'error') {
    if (message.subject.substring(0, 3) === '404') {
      responsible = ' Call the network dude.';
    }

    return (
      <div>
        Error = {message.subject}. {responsible}
      </div>
    );
  }
  return (
    <div className={`row message ${readStatus} ${selectedStatus} MessageComponent`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            {/* checkbox */}
            <input type="checkbox" className="checkBox" name="checkbox" onChange={handleCheck} checked={checkStatus} />
          </div>
          <div className="col-xs-2">
            {/* star  */}
            <i onClick={handleClick} className={message.starred ? 'star fa fa-star ' : 'star fa fa-star-o'} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {/* label */}
        {message.labels.map(
          (element, i) =>
            <span className="label label-warning" key={i}>
              {element}
            </span>
          //
        )}
        {/* message */}
        <a href="." className="msg" onClick={handleRead}>
          {message.subject}
        </a>
      </div>
    </div>
  );
}
