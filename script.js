//This is an array that will hold the file names! Add at least 4 images to the images array.
var images = new Array();
images[0] =
  "https://cdn.glitch.com/2ce06604-e73a-4498-828b-1d6b1ba5c1cb%2FIMG_1891.jpg?v=1587687444064";
images[1] =
  "https://cdn.glitch.com/2ce06604-e73a-4498-828b-1d6b1ba5c1cb%2FIMG_1974.jpg?v=1588308147171";
images[2] =
  "https://cdn.glitch.com/2ce06604-e73a-4498-828b-1d6b1ba5c1cb%2FIMG_1975.jpg?v=1588308161367";

//This is an array that holds the names of each location shown in your pictures.
//Make sure that the index of each location is the same as the index of the picture in the images array
var description = new Array();
description[0] = "Wasted";
description[1] = "Untitled"
description[2] = "Frida Leaving Cristina With Diego";

var price = new Array();
price[0] = "contact Sophi";
price[1] = "sold out"
price[2] = "high demand!!"

//This is your starting index. First we start off at Home!
var index = 0;

//This function will help us toggle through our photos. Everytime the button is pressed it will call this function!
function showImage() {
  
  var img = document.getElementById("img");
  var polaroid = document.getElementById("polaroid");
  
  img.src = images[index];
  polaroid.title = description[index];
  
}

function nextButton(){
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
  if(index < images.length -1){
    document.getElementById("back").disabled = false;
    index++;
  } else {
     document.getElementById("next").disabled = true;
  } 
  showImage();
}

function backButton(){
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
  if(index!== 0){
    index--;
    document.getElementById("next").disabled = false;
  } else {
    document.getElementById("back").disabled = true;
  }
  showImage();
}

function purchaseImage(){
  var popup = document.getElementById("myPopup");
  popup.innerHTML = price[index];
  popup.classList.toggle("show");
}