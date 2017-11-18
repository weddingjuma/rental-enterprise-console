import React from 'react';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function BusinessItemComponent(props) {
  //  if (!userpref) return null;
  // function handleEvent(event) {
  //   event.preventDefault();
  //   props.onShowForm();
  // }
  //console.log('BUSINESSITEMCOMPONENT', props);
  //console.log(rental);
  // //console.log(rental.address);
  // //console.log(rental.photourl);
  // //console.log(rental.price);
  // //console.log(rental.sqft);

  // function handleClick(event) {
  //   event.preventDefault();
  //   onAddItem(item.id);
  // }
  //console.log('rental' + rental.photourl);
  //  let photourl = 'https://photos.zillowstatic.com/p_h/ISxbboalrrrdoj1000000000.jpg';
  // if (props.rental.photourl !== 'undefined') {
  //   photourl = props.rental.photourl;
  // }

  return (
    <div className="card MenuItem BusinessItemComponent" key={props.rental.id}>
      <div className="card-image">
        <Link className=" " to={`/reports/${props.rental.id}`}>
          <img src={props.rental.photoUrl} alt="Nothing" />
        </Link>
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {props.rental.address + ' ' + props.rental.city || 'N/A'}
        </h5>
        <p>
          {props.rental.contactname} | <a href="mailto:{rental.contactinfo}">{props.rental.contactinfo}</a>
        </p>
        <p>
          <b>Price: </b>${props.rental.price} | <b>Sqft: </b>
          {props.rental.sqft}
        </p>
        <p>
          <b> Bed: </b>
          {props.rental.bed}
          <b> | Bath: </b>
          {props.rental.bath}
        </p>
        <p>
          <b> Desc: </b>
          <Link className=" " to={`/reports/${props.rental.id}`}>
            {props.rental.description.substring(0, 55) + '...'}
          </Link>
        </p>
        {/* <button className="card-content">Button test</button> */}
      </div>
      <div className="card-action">
        {/* <a className="menuChoice #fdd835 yellow darken-1 btn" href={`/reports/${rental.id}`}>
          {/* onClick={handleClick}> */}
        {/* View Details */}
        {/* </a> */}

        <Link className="bwaves-effect blue waves-light btn-large" to={`/reports/${props.rental.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}
