export default function getYelpAPI(pokemonId) {
  //console.log('getYelpAPI');
  let url = 'http://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyC9dI4xGP87NiHbsU9TbvxeV1nl9Y0GM4Y';
  return fetch(url, {
    mode: 'no-cors'
    // origin: `*`
  })
    .then(response => {
      // //console.log('getYelp response: ', response);
      return response.json();
    })
    .then(data => {
//mc//console.log(data);
      //mc//console.log('this is rel data', data.sprites.front_default);
      return data;
    })
    .catch(error => {
//mc//console.log('Request failed', error);
    });
}
// export default function getYelpAPI(pokemonId) {
//   return fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
//     .then(response => {
// //mc//console.log('getPokemonImage response: ', response);
//       return response.json();
//     })
//     .then(data => {
// //mc//console.log('this is rel data', data.sprites.front_default);
//       return data;
//     });
// }
