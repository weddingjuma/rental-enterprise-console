import React from 'react';
import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function SearchFormComponent(props) {
  //  if (!props.item) return null;
//mc//console.log('SEARCHFORMCOMP');
//mc//console.log('Auth User ', props.authenticatedUser);

  // //console.log(rentals);
//mc//console.log(props);

  // userprefs.forEach(function(pref, i) {
  //   //mc//console.log('hi');
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

  function handleLoginout(event) {
    event.preventDefault();
    //alert('login or out');
    if (props.authenticatedUser === 'guest_user') {
      props.history.push('/login');
    } else {
      //alert('loutout');
      props.logoutUser();
      props.history.push('/login');
    }
  }

  let disabled = '';

  if (props.userRole !== 'agent') {
    disabled = 'disabled';
  }

  let loginStatus = 'Login';
  //let goTo = 'login';

  if (props.userRole !== 'guest_role') {
    loginStatus = 'Logout';
    //goTo = '/main';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleKeyword}>
        <div className="row">
          <div className="input-field col s3">
            Keyword :<br />
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
            {/* <button className="btn waves-effect waves-light blue" onClick={handleUser} name="action">
              Create User
              <i className="material-icons right"> </i>
            </button> */}

            <Link to="/register">
              <button className="btn waves-effect waves-light blue" name="action">
                Create User
              </button>
            </Link>
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
              Homes Over $1000<i className="material-icons right"> </i>
            </button>
          </div>
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light Cyan" onClick={handleReset} name="reset">
              Reset <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3">
            <button className="btn waves-effect waves-light Cyan" onClick={handleLoginout} name="loginout">
              {loginStatus} <i className="material-icons right"> </i>
            </button>

            {/* <Link to="/login " className="brand-logo">
              <button disabled={loginStatus} className="btn waves-effect waves-light Cyan" name="login">
                Login <i className="material-icons right"> </i>
              </button>
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
