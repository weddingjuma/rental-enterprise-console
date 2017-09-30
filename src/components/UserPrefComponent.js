import React from 'react';

/*
// if not defined, show NA
*/

export default function UserPrefComponent({ item, onAddItem }) {
  if (!item) return null;
  //console.log('USERPREF FORM');
  /*
   Local defined function
   1. create handleClick function to hande the event
   2. on the <a> add 'onClick = {<function>}
    */
  function handleClick(event) {
    event.preventDefault();
    onAddItem(item.id);
  }

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Business Type: restaurant, supermarket" id="businessType" type="text" className="validate" />
            <label for="businessType"> </label>
          </div>
          <div className="input-field col s6">
            <input placeholder="Search Params: Italian, Vegetarian" id="searchParam" type="text" className="validate" />
            <label for="searchParam"> </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Preference Name" id="searchParam" type="text" className="validate" />
            <label for="prefName"> </label>
          </div>
          <div className="input-field col s6">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Save Pref
              <i className="material-icons right"> </i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
