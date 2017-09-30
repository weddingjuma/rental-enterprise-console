import React from 'react';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function HomeComponent(props) {
  //console.log('HOME_COMP');
  //console.log(props.title);
  return (
    <div>
      <header id="pageHeader" className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <Link to="/main" className="brand-logo">
              &nbsp;&nbsp;Rental Enterprise Console
            </Link>
            {/* <ul className="right hide-on-med-and-down">
              {/* <li className="active">
              <Link to="/">Home Page Search & Report </Link>
            </li> */}
            {/* <li className="active">
                <a onClick={handleEvent}>Create Property</a>
              </li>
              <li className="active">
                <Link to="/report/">Report Only</Link>
              </li> */}
            {/* <li className="active">
              <a href="/admin/report">Admin Report</a>
            </li> */}
            {/* </ul> */}

            {/* <a href="" data-activates="nav-mobile" className="button-collapse">
              <i className="material-icons">menu</i>
            </a> */}
          </div>
        </nav>
      </header>

      <div className="bgh">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="white-text centerf ">Rental Enterprise Console</h1>
        <br />
        <Link to="/main" id="download-button" className="bwaves-effect blue waves-light btn-large ">
          Enter
        </Link>
      </div>
      <footer className="page-footer blue">
        {/* <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Rental Management React</h5>
              <p className="grey-text text-lighten-4" />
              <div className="footer-copyright blue">
                <div className="container">Â© 2017 MC Consulting</div>
              </div>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link className="white-text" to="/">
                    Main{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="footer-copyright blue">
          <div className="container">© 2017 MC Consulting</div>
        </div>
      </footer>
    </div>
  );
}
