// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
//  let position = navigator.geolocation.getCurrentPosition(handlePosition) 
//  console.log(position)
//  function handlePosition (){
//      console.log(position)
// }


let currentLocation;
let page =1;
let perPage = 1;
let term = "dog";

function showMylocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    }
}
showMylocation();

function locationSuccess(data){
    currentLocation = data.coords;
    console.log(data.coords)
    console.log(currentLocation)
    console.log(generateApiUrl())
    fetch(generateApiUrl())
    .then(response=>response.json())
    .then(data=>console.log(data))
}

function locationError(){
    let backLocation = {latitude: 35.7859328, longitude:-86.409216} // Murfreesboro TN
} 

function generateApiUrl() {
    return 'https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/' +
    '?api_key=97022c3ec5d629b999b722e9bd140543' +
    '&format=json' +
    '&nojsoncallback=1' +
    '&method=flickr.photos.search' +
    '&safe_search=1' +
    '&per_page=' + perPage +
    '&page =' + page +
    '&text' + term +
    '&lat=' + currentLocation.latitude + 
    '&lon=' + currentLocation.longitude;

}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError)
navigator.geolocation.watchPosition(locationSuccess,locationError)