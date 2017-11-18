import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadMessage,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages
}) {
  //

  let status = 'fa fa-square-o'; // none

  if (selectedMessageCount === messages.length) {
    status = 'fa fa-check-square-o'; //all
  } else if (selectedMessageCount !== 0) {
    status = 'fa fa-minus-square-o'; // some
  }

  let disabled = '';

  if (selectedMessageCount === 0) {
    disabled = 'disabled';
  }

  let unread = messages.filter(message => !message.read).length;

  //mc//console.log('unread ' + unread);
  // FUnctions /////////////////////////////
  function handleOnOpenComposeForm(event) {
    event.preventDefault();
    onOpenComposeForm();
  }
  function handleOnSelectAllMessages(event) {
    //event.preventDefault();
    //mc//console.log('MESSAGE COUNT: ' + selectedMessageCount);
    if (selectedMessageCount === 0) {
      onSelectAllMessages();
    } else {
      onDeselectAllMessages();
    }
  }

  function handleOnMarkAsReadSelectedMessages(event) {
    event.preventDefault();
    //onMarkAsReadMessage();
    onMarkAsReadSelectedMessages();
  }
  ////
  function handleOnMarkAsUnreadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsUnreadSelectedMessages();
  }
  function handleOnApplyLabelSelectedMessages(event) {
    event.preventDefault();
    onApplyLabelSelectedMessages(event.target.value);
  }

  function handleOnRemoveLabelSelectedMessages(event) {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  }

  function onHandleDeleteSelectedMessages(event) {
    event.preventDefault();
    onDeleteSelectedMessages(event.target.value);
  }
  ////
  ///////////////////////////////////////////

  return (
    <div className="row toolbar ToolbarComponent">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge" />
          {unread} unread messages
        </p>

        <a className="btn btn-danger" onClick={handleOnOpenComposeForm}>
          <i className="fa fa-plus" />
        </a>

        <button className="btn btn-default" onClick={handleOnSelectAllMessages}>
          <i className={status} />
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleOnMarkAsReadSelectedMessages}>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleOnMarkAsUnreadSelectedMessages}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={handleOnApplyLabelSelectedMessages} disabled={disabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select onChange={handleOnRemoveLabelSelectedMessages} className="form-control label-select" disabled={disabled}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button onClick={onHandleDeleteSelectedMessages} className="btn btn-default" disabled={disabled}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
}
