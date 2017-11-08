import React from 'react';

/*
// if not defined, show NA
*/

export default function BusinessItemDetailComponent(props) {
  //  if (!userpref) return null;

  console.log('BUSINESSITEM_DETAIL_COMPONENT');
  console.log(props.rental);
  //console.log(props.rental.address);
  //console.log(props.rental.photourl);
  //console.log(props.rental.price);
  //console.log(props.rental.sqft);

  function handleClick(event) {
    event.preventDefault();
    //onAddItem(item.id);
    props.onShowForm2();
  }
  ////console.log('rental' + props.rental.photourl);
  let photourl = 'https://photos.zillowstatic.com/p_h/ISxbboalrrrdoj1000000000.jpg';
  if (props.rental.photoUrl !== 'undefined') {
    photourl = props.rental.photoUrl;
  }

  let disabled = '';
  let message = 'Update Rental as ' + props.userRole;

  if (props.userRole === 'guest_role') {
    disabled = 'disabled';
    message = 'Only Agents Update';
  }

  if (props.authenticatedUser !== props.rental.agentId && props.userRole === 'agent') {
    disabled = 'disabled';
    message = 'Not Yours';
  }

  return (
    // <div className="card MenuItem BusinessItemComponent">
    //   <div className="card-image">
    //     <img src={photourl} alt="Nothing" />
    //   </div>
    //   <div className="card-content">
    //     <h5 className="card-title">
    //       {props.rental.address + ' ' + props.rental.city || 'N/A'}
    //     </h5>
    //     <p>
    //       {props.rental.contactname} | <a href="mailto:{props.rental.contactinfo}">{props.rental.contactinfo}</a>
    //     </p>
    //     <p>
    //       ${props.rental.price} | {props.rental.sqft} Sqft
    //     </p>
    //     {/* <button className="card-content">Button test</button> */}
    //   </div>
    //   <div className="card-action">
    //     <a className="menuChoice #fdd835 yellow darken-1 btn" href="/">
    //       {/* onClick={handleClick}> */}
    //       View Details
    //     </a>
    //   </div>
    // </div>
    //

    <div className="   BusinessItemDetailComponent">
      <div className="card">
        <div className="card-image2">
          <img src={photourl} alt="Nothing" width="400" />
        </div>
        {/* <h5 className="card-title">
            {props.rental.address + ' ' + props.rental.city || 'N/A'}
          </h5> */}

        <div className="card-content">
          <span className="card-title">
            {props.rental.address + ' ' + props.rental.city || 'N/A'}
          </span>
          <p>
            {props.rental.description}
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Street: </b> {props.rental.address}
                </td>
                <td>
                  <b>City: </b> {props.rental.city}
                </td>
                <td>
                  <b> Parking: </b> {props.rental.parking}
                </td>
              </tr>{' '}
              <tr>
                <td>
                  <b> Sqft:</b> {props.rental.sqft}
                </td>
                <td>
                  <b>Price:</b> ${props.rental.price}
                </td>
                <td>
                  <b> Year: </b> {props.rental.year}
                </td>
              </tr>{' '}
              <tr>
                <td>
                  <b> Cooling: </b> {props.rental.cooling}
                </td>
                <td>
                  <b> Heating: </b> {props.rental.cooling}
                </td>
                <td>
                  <button disabled={disabled} name="deleteButton" className="btn waves-effect blue waves-light" type="submit" onClick={handleClick}>
                    {message}
                    <i className="material-icons right"> </i>
                  </button>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-action">
          <p>
            Agent ID: {props.rental.agentId} <a href="mailto:{props.rental.contactinfo}">{props.rental.contactinfo}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
