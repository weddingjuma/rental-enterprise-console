import React from 'react';
// import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function SearchFormComponent(props) {
  //  if (!props.item) return null;
  //console.log('SEARCHFORMCOMP');
  // //console.log(rentals);
  //console.log(props);

  // userprefs.forEach(function(pref, i) {
  //   ////console.log('hi');
  //   //console.log(pref.prefname);
  // });

  /*
   Local defined function
   1. create handleClick function to hande the event
   2. on the <a> add 'onClick = {<function>}
    */
  // function handleClick(event) {
  //   event.preventDefault();
  //   onAddItem(props.item.id);
  // }

  function handleEvent(event) {
    event.preventDefault();

    props.onShowForm();
  }

  function handleSort(event) {
    event.preventDefault();
    let newSearch = props.search;
    newSearch.sort = 'price';

    props.setSearchSort(newSearch);
  }
  function handlePrice(event) {
    event.preventDefault();
    let newSearch = props.search;
    newSearch.price = 1000;
    props.setSearch(newSearch);
  }

  function handleKeyword(event) {
    event.preventDefault();
    const $form = event.target;

    let newSearch = props.search;
    newSearch.keyword = $form.keyword.value;
    props.setSearchWord(newSearch);
  }

  function handleReset(event) {
    event.preventDefault();

    props.getPrefs();
  }

  function handleUser(event) {
    event.preventDefault();
    //alert('user');
    props.onShowUserForm();
  }

  function handleLogin(event) {
    event.preventDefault();
    //  alert('login');
    props.onShowLoginForm();
  }
  let disabled = '';

  if (props.userRole !== 'agent') {
    disabled = 'disabled';
  }

  let disabled2 = '';

  if (props.userRole === 'agent') {
    disabled2 = 'disabled';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleKeyword}>
        <div className="row">
          <div className="input-field col s3">
            Keyword:<br />
            <input name="keyword" placeholder="Keyword Search: oakland, mansion, condo" id="businessType" type="text" className="validate" />
          </div>

          <div className="input-field col s3">
            <button className="btn waves-effect waves-light blue" type="submit" name="action">
              Search for Property
              <i className="material-icons right"> </i>
            </button>
          </div>

          {/* show only if the role = agent  */}

          <div className="input-field col s3">
            <button disabled={disabled} className="btn waves-effect waves-light blue" onClick={handleEvent} name="action">
              Create Property
              <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3">
            <button className="btn waves-effect waves-light blue" onClick={handleUser} name="action">
              Create User
              <i className="material-icons right"> </i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light cyan" onClick={handleSort} name="sort">
              Sort By Price <i className="material-icons right"> </i>
            </button>
          </div>
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light Cyan" onClick={handlePrice} name="price">
              Show Only Homes Over $1000<i className="material-icons right"> </i>
            </button>
          </div>
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light Cyan" onClick={handleReset} name="reset">
              Reset <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3">
            <button disabled={disabled2} className="btn waves-effect waves-light Cyan" onClick={handleLogin} name="reset">
              Login <i className="material-icons right"> </i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
