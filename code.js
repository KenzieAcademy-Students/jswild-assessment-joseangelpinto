// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let position = navigator.geolocation.getCurrentPosition(handlePosition) 
console.log(position)
function handlePosition (){
    console.log(position)
}