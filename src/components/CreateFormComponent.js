import React from 'react';
import { Route, Redirect } from 'react-router';
// import { browserHistory } from 'react-router';

import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
/*
// if not defined, show NA
*/

export default function CreateFormComponent(props) {
  //if (!item) return null;
  let action = props.action;

  //mc//console.log('CREATE_FORM_COMPONENT >>>>>>>>>>>>>>>>' + action);
  //mc//console.log(props);
  let disabled = '';
  if (action === 'add') {
    disabled = 'disabled';
  }
  // userprefs.forEach(function(pref, i) {
  //   //mc//console.log('hi');
  //   //console.log(pref.prefname);
  // });
  let random = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 5);
  let randomDesc = Math.floor(Math.random() * 20);
  let randomImg = Math.floor(Math.random() * 30);

  let random3 = Math.floor(Math.random() * 20000);
  let city = ['Oakland', 'San Francisco', 'Dublin', 'Berkeley', 'Fremont', 'Hayward', 'Livermore'];
  let street = ['Rai St', 'Aridana Ave', 'Cassandra Ct', 'Megan Dr', 'Lisa Ln', 'Julia Pkwy', 'Scarlett St'];

  let photourl = '/images/' + randomImg + '.jpg';
  let desc = ['Your description here.  '];
  //mc//console.log('random: ' + random);

  let theRental = {
    address: 'your address', //random + ' ' + street[random2],
    bath: '1',
    bed: '1',
    city: 'your city',
    contactinfo: 'jonnybranstorm@mansionrents.com',
    contactname: 'Jimmy Mogul',
    cooling: 'true',
    description: desc[0],
    heating: 'true',
    id: '',
    parking: 'garage',
    photourl: photourl,
    price: 1,
    sqft: '1',
    year: '2001',
    /////
    // address: ' ',
    // bath: '',
    // bed: '',
    // city: '',
    // contactinfo: '',
    // contactname: '',
    // cooling: '',
    // description: '',
    // heating: '',
    // id: '',
    // parking: '',
    // photourl: photourl,
    // price: 0,
    // sqft: '',
    // year: '',
    agentId: props.authenticatedUser
  };
  //  console.log('AGENT ID', theRental.agentId);
  if (action === 'update') {
    theRental = props.rental;
  }
  //  //console.log(props.rental);
  //console.log('THERENTAL ', theRental);
  /*
   Local defined function
   1. create handleClick function to hande the event
   2. on the <a> add 'onClick = {<function>}
    */

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    //mc//console.log('onSubmit', action);

    let newRental = {};
    newRental = {
      id: $form.id.value ? $form.id.value : $form.id.placeholder,
      address: $form.address.value ? $form.address.value : $form.address.placeholder,
      city: $form.city.value ? $form.city.value : $form.city.placeholder,
      photourl: $form.photourl.value ? $form.photourl.value : $form.photourl.placeholder,
      sqft: $form.sqft.value ? $form.sqft.value : $form.sqft.placeholder,
      contactname: $form.contactname.value ? $form.contactname.value : $form.contactname.placeholder,
      contactinfo: $form.contactinfo.value ? $form.contactinfo.value : $form.contactinfo.placeholder,
      description: $form.description.value ? $form.description.value : $form.description.placeholder,
      cooling: $form.cooling.value ? $form.cooling.value : $form.cooling.placeholder,
      bed: $form.bed.value ? $form.bed.value : $form.bed.placeholder,
      bath: $form.bath.value ? $form.bath.value : $form.bath.placeholder,
      price: $form.price.value ? $form.price.value : $form.price.placeholder,
      year: $form.year.value ? $form.year.value : $form.year.placeholder,
      heating: 'true',
      parking: $form.parking.value ? $form.parking.value : $form.parking.placeholder,
      agentId: $form.agentId.value ? $form.agentId.value : $form.agentId.placeholder
    };
    //mc//console.log('xxxxxxxxxxxx', newRental);
    if (action === 'add') {
      //mc//console.log('ADD');
      props.onSubmit(newRental).then(() => {
        props.history.push('/main');
      });
    } else if (action === 'update') {
      //mc//console.log('update call');
      props.updateRental(newRental).then(() => {
        //mc//console.log('UPDATE HIST', history.location);
        props.history.push('/main');
      });
    }

    //window.location = '/';
  }

  function deleteItem(event) {
    event.preventDefault();

    //mc//console.log('DELETE.............................');
    // //console.log(event.target.deleteButton.value);
    props.deleteRental(props.rental);
    props.history.push('/main');
  }

  function handleReset(event) {
    event.preventDefault();
    if (action === 'update') {
      props.history.push('/main');
    } else {
      props.getPrefs();
    }
  }

  return (
    <router>
      <div className="row">
        <form className="col s12" onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="input-field col s3">
              Street Address:
              <input required placeholder={theRental.address} name="address" id="address" type="text" className="validate" />
              {/* <label for="address"> </label> */}
            </div>
            <div className="input-field col s3">
              City:
              <input required placeholder={theRental.city} name="city" type="text" className="brand-logo center" />
              {/* <label className="active" for="city" /> */}
              {/* placeholder="City: (Leave blank for default)" id="city" type="text" className="validate" /> */}
            </div>
            {/* </div>

        <div className="row"> */}
            <div className="input-field col s3">
              Photourl:
              <input placeholder={photourl} name="photourl" id="businessType" type="text" className="validate" />
              {/* <label for="photourl"> </label> */}
            </div>
            <div className="input-field col s3">
              Sqft:
              <input required placeholder={theRental.sqft} name="sqft" id="searchParam" type="number" className="validate" />
              {/* <label for="sqft"> </label> */}
            </div>
          </div>

          <div className="row">
            {/* <div className="input-field col s3">
              Contact Name:
              <input placeholder={theRental.contactname} name="contactname" id="businessType" type="text" className="validate" />
             </div>
            <div className="input-field col s3">
              Contact Info:
              <input placeholder={theRental.contactinfo} name="contactinfo" id="searchParam" type="text" className="validate" />
             </div> */}
            {/* </div>

        <div className="row"> */}
            <div className="input-field col s3">
              Description:
              <input placeholder={theRental.description} name="description" id="businessType" type="text" className="validate" />
              {/* <label for="description"> </label> */}
            </div>
            <div className="input-field col s3">
              Heating/Cooling:
              <input placeholder={theRental.cooling} name="cooling" id="searchParam" type="text" className="validate" />
              {/* <label for="heating/cooling"> </label> */}
            </div>

            <div className="input-field col s3">
              Parking:
              <input placeholder={theRental.parking} name="parking" id="searchParam" type="text" className="validate" />
              <input placeholder={theRental.id} name="id" id="searchParam" type="hidden" className="validate" />
              <input placeholder={theRental.agentId} name="agentId" id="searchParam" type="hidden" className="validate" />
              <input placeholder={theRental.contactinfo} name="contactinfo" id="searchParam" type="hidden" className="validate" />
              <input placeholder={theRental.contactname} name="contactname" id="businessType" type="hidden" className="validate" />
            </div>
            <div className="input-field col s3">
              Year Built:
              <input required placeholder={theRental.year} name="year" id="searchParam" type="number" className="validate" />
              {/* <label for="year"> </label> */}
            </div>
          </div>

          <div className="row">
            <div className="input-field col s3">
              Bed:
              <input required placeholder={theRental.bed} name="bed" id="businessType" type="number" className="validate" />
              {/* <label for="bed"> </label> */}
            </div>
            <div className="input-field col s3">
              Bath:
              <input required placeholder={theRental.bath} name="bath" id="searchParam" type="number" className="validate" />
              {/* <label for="bath"> </label> */}
            </div>
            {/* </div>

        <div className="row"> */}
            <div className="input-field col s3">
              Price:
              <input
                required
                placeholder={theRental.price}
                name="price"
                // patterns="\d{2}"
                id="businessType"
                type="number"
                className="validate"
              />
              {/* <label for="price"> </label> */}
            </div>
          </div>

          <div className="row">
            {/* </div>

        <div className="row"> */}
            <div className="input-field col s3">
              {/* <Link to="/main"> */}
              <button className="btn waves-effect green waves-light" type="submit" name="action">
                {action} Rental Property
                <i className="material-icons right"> </i>
              </button>
              {/* </Link> */}
            </div>

            <div className="input-field col s3">
              <button name="deleteButton" onClick={deleteItem} disabled={disabled} className="btn waves-effect red waves-light" type="submit">
                {/* <Link to="/main" > */}
                Delete Rental Property
                {/* </Link> */}
                <i className="material-icons right"> </i>
              </button>

              {/* <Route exact path="/main">
              test
            </Route> */}
            </div>

            <div className="input-field col s3">
              <button className="btn waves-effect waves-light Cyan" onClick={handleReset} name="reset">
                Cancel <i className="material-icons right"> </i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Route path="/main" />
    </router>
  );
}
