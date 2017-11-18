import React from 'react';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function HeaderComponent(props) {
  // function handleEvent(event) {
  //   event.preventDefault();
  //   props.onShowForm();
  // }

 //mc//console.log('HEADERCOMP');
 //mc//console.log(props);
  return (
    <header id="pageHeader" className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper">
          <Link to="/main" className="brand-logo">
            &nbsp;&nbsp;Rental Enterprise Console - {props.title}
          </Link>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <Link to="/main">
                User: {props.userName}
                {/* | {props.authenticatedUser} */}
              </Link>
            </li>
            <li className="active">
              <Link to="/main">
                {' '}Role: {props.userRole}
              </Link>
            </li>
            {/* <li className="active">
              <Link to="/main">Search & Report </Link>
            </li> */}
            {/* <li className="active">
              <a onClick={handleEvent}>Create Property</a>
            </li> */}
            {/* <li className="active">
              <Link to="/report/">Report Only</Link>
            </li> */}
            {/* <li className="active">
              <a href="/admin/report">Admin Report</a>
            </li> */}
          </ul>

          <a href="" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </header>
  );
}
