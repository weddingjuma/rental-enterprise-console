import getYelpAPI from '../../requests/getYelpAPI';

export default function getYelpAPIPocess() {
  return (dispatch, getState, env) => {
    return getYelpAPI(1).then(data => {
    //mc//console.log('in thunk', data);
      dispatch({
        type: 'GET_YELP',
        yelpObject: data
      });
      // return data;
    });
  };
}
