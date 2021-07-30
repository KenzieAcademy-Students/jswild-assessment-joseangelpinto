/ To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let position = {
    latitude: 0,
    longitude: 0
};

navigator.geolocation.watchPosition(success);

function success(pos){
    const crd = pos.coords;

    if (
        position.latitude !== crd.latitude || 
        position.longitude !== crd.longitude 
    
    ) {
        position.latitude = crd.latitude;
        position.longitude = crd.longitude; 
        console.log("Your Position has changed");
        console.log(`lat: ${position.latitude} lon: ${position.longitude}`);
    } else {
        console.log("Your position remains the same.");
    }    
}
   
const key= '69eb5574217b003d0bc661517e744f6d';
// secret: d0f2006f8f7f413d

let queryURL = `https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=${key}&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${position.latitude}&lon=${position.longitude}&text=dog`;

function constructImageURL (photoObj) {
    return (
         "https://farm" + 
         photoObj.farm +
        ".staticflickr.com/" +
         photoObj.server +
         "/" +
         photoObj.id + 
         "_" +
         photoObj.secret +
           ".jpg"
    );       
}            

fetch(queryURL)
.then((response) => response.json())
.then ((data) => {
    console.log(data);
    let img = document.createElement("img");
    document.body.append(img);
    let i = 0;
    setInterval(function() {
        // change the pic the next is teh array
        const imageUrl = constructImageURL(data.photos.photo[i]);
        img.src = imageUrl;
        if(i + 1 === data.photos.photo.length){
           i = 0
        } else {
        i++;
        }
    }, 2000);
});