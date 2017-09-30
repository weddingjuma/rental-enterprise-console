import React from 'react';

export default function ComposeFormComponent({ onSubmit, onCancel }) {
  //
  // FUnctions /////////////////////////////
  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    // //console.log('onSubmit');
    // //console.log($form.subject.value);
    // //console.log($form.subject.value);

    onSubmit({
      subject: $form.subject.value, //
      body: $form.body.value
    });
  }

  function handleOnCancel(event) {
    event.preventDefault();
    onCancel();
  }

  return (
    <form name="form" className="form-horizontal well ComposeFormComponent" onSubmit={handleOnSubmit}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label id="subject" className="col-sm-2 control-label">
          Subject
        </label>
        <div className="col-sm-8">
          <input name="subject" type="text" className="form-control" id="subject" placeholder="Enter a subject" />
        </div>
      </div>
      <div className="form-group">
        <label id="body" className="col-sm-2 control-label">
          Body
        </label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary" />
          <input type="reset" value="Cancel" className="btn btn-default" onClick={handleOnCancel} />
        </div>
      </div>
    </form>
  );
}
