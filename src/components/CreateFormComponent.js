import React from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

//export default function CreateFormComponent({ rental, deleteRental, onSubmit }) {
export default function CreateFormComponent(props) {
  //if (!item) return null;
  let action = props.action;

  //console.log('CREATE_FORM_COMPONENT >>>>>>>>>>>>>>>>' + action);
  //console.log(props);
  let disabled = '';
  if (action === 'add') {
    disabled = 'disabled';
  }
  // userprefs.forEach(function(pref, i) {
  //   ////console.log('hi');
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
  let desc = [
    'This is a great home for the whole family. Owned by multi-billionaire Richard Brookstone and offered at a great discount! After selling his muli-billion empire, Richard is offering the average person one of his mansions at a great price. Bently and helicoptor included free of charge!!',
    'After his highly publicized divorce, ex tennis star Ralph Pandi is renting his mansion he got at a celebrity auction at a great price. This property was dug up and shipped by helicoptor from LA! Rent now before he changes his mind to buy a BMW from Germany!',
    'Of all the homes, this one owned by Eddie Merryment is being rented at a reduced price. Please contact the agent for a showing!',
    'No this was not the home owned by Sandra Bullock, but she did put a bid on it. Be the lucky renter to rent this place for 12 months!',
    'Fixer up...for the mega billionaire! Needs some new marble floor, upgrade wired system to bluetooth and upgrade the 10,000 watt stereo system to 100,000 watt 20.5 system!',
    'Ric Flair owned home sold the Dwayne Johnson who is filming his new movie and needs a renter who can housesit this nice home. Almost free!',
    'Look no further than this beautiful home owned by Hollywood celebrities and B+ rock stars. Managed by Michael Chang who is also a student at Galvanize.',
    "Formerly home of the hair band Bed Bugs and Spider. Walls are still intact. Floors damaged by alcohol. Groupies' personal items are included for free. ",
    "Chris Rock's former home sold after her roast to mafia king William Shatner sued her for bad jokes about his toupee. ",
    'This home was owned by Edward Monroe who is the son of a famoust actress.',
    "Do not miss this home! Once used to film Jacky Chan and Chris Tucker movie 'Slow Hour 2'",
    'Owned by former president Bill Clinton as a personal mancave.',
    'This is ready to move in for a big family!',
    "Oh no the didn'! This home has to go now!",
    'For anyone who wants to negotiate...four words TALK TO THE HAND!',
    'Why not just treat yourself to this mansion?',
    "Rent as as, if you are going to negotiate, DON'T GO THERE!",
    'Been programming at Galanize or Google too much? Why not spend your millions here?',
    'Owned by Clint Eastwood. Excuse the bullet holes.',
    'Kenny Rogers lived here with his family.',
    "Van Damme's first home. Lowered due to damages from his kicks."
  ];
  ////console.log('random: ' + random);

  let theRental = {
    address: random + ' ' + street[random2],
    bath: '10',
    bed: '20',
    city: city[random2],
    contactinfo: 'jonnybranstorm@mansionrents.com',
    contactname: 'Jimmy Mogul',
    cooling: 'true',
    description: desc[randomDesc],
    heating: 'true',
    id: '',
    parking: '5 car garage',
    photourl: photourl,
    price: 3500 + random3,
    sqft: '15930',
    year: '2001'
  };

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
    ////console.log('onSubmit', action);

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
      parking: $form.parking.value ? $form.parking.value : $form.parking.placeholder
    };
    ////console.log('xxxxxxxxxxxx', newRental);
    if (action === 'add') {
      ////console.log('ADD');
      props.onSubmit(newRental).then(() => {
        ////console.log('the end');
        // <Redirect to="/" push />;
        //window.location = '/';
      });
    } else if (action === 'update') {
      ////console.log('update call');
      props.updateRental(newRental).then(() => {
        ////console.log('the end');
        //  window.location = '/';
      });
    }

    //window.location = '/';
  }

  function deleteItem(event) {
    event.preventDefault();

    ////console.log('DELETE.............................');
    // //console.log(event.target.deleteButton.value);
    props.deleteRental(props.rental);
    // event.form.deleteButton.value = 'disabled';
    // props.deleteRental(props.rental).then(() => {
    //   console.log('the end');
    //   //window.location = '/main';
    // });

    //window.location = '/';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s3">
            Street:
            <input placeholder={theRental.address} name="address" id="address" type="text" className="validate" />
            {/* <label for="address"> </label> */}
          </div>
          <div className="input-field col s3">
            City:
            <input placeholder={theRental.city} name="city" type="text" className="brand-logo center" />
            {/* <label className="active" for="city" /> */}
            {/* placeholder="City: (Leave blank for default)" id="city" type="text" className="validate" /> */}
          </div>
          {/* </div>

        <div className="row"> */}
          <div className="input-field col s3">
            Photourl:
            <input placeholder={theRental.photourl} name="photourl" id="businessType" type="text" className="validate" />
            {/* <label for="photourl"> </label> */}
          </div>
          <div className="input-field col s3">
            Sqft:
            <input placeholder={theRental.sqft} name="sqft" id="searchParam" type="text" className="validate" />
            {/* <label for="sqft"> </label> */}
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            Contact Name:
            <input placeholder={theRental.contactname} name="contactname" id="businessType" type="text" className="validate" />
            {/* <label for="contactname"> </label> */}
          </div>
          <div className="input-field col s3">
            Contact Info:
            <input placeholder={theRental.contactinfo} name="contactinfo" id="searchParam" type="text" className="validate" />
            {/* <label for="contactinfo"> </label> */}
          </div>
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
        </div>

        <div className="row">
          <div className="input-field col s3">
            Bed:
            <input placeholder={theRental.bed} name="bed" id="businessType" type="text" className="validate" />
            {/* <label for="bed"> </label> */}
          </div>
          <div className="input-field col s3">
            Bath:
            <input placeholder={theRental.bath} name="bath" id="searchParam" type="text" className="validate" />
            {/* <label for="bath"> </label> */}
          </div>
          {/* </div>

        <div className="row"> */}
          <div className="input-field col s3">
            Price:
            <input placeholder={theRental.price} name="price" id="businessType" type="text" className="validate" />
            {/* <label for="price"> </label> */}
          </div>
          <div className="input-field col s3">
            Year Built:
            <input placeholder={theRental.year} name="year" id="searchParam" type="text" className="validate" />
            {/* <label for="year"> </label> */}
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            Parking:
            <input placeholder={theRental.parking} name="parking" id="searchParam" type="text" className="validate" />
            {/* <label for="parking"> </label> */}
            <input placeholder={theRental.id} name="id" id="searchParam" type="hidden" className="validate" />
          </div>
          {/* </div>

        <div className="row"> */}
          <div className="input-field col s3">
            <button className="btn waves-effect green waves-light" type="submit" name="action">
              {action} Rental Property
              <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3">
            <button name="deleteButton" disabled={disabled} className="btn waves-effect red waves-light" type="submit">
              <Link to="/main" onClick={deleteItem}>
                Delete Rental Property
              </Link>
              <i className="material-icons right"> </i>
            </button>

            {/* <Route exact path="/main">
              test
            </Route> */}
          </div>
        </div>
      </form>
    </div>
  );
}
