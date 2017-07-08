var bag = new Items('bag', 'img/bag.jpg', 0);
var banana = new Items('banana', 'img/banana.jpg', 0);
var bathroom = new Items('bathroom', 'img/bathroom.jpg', 0);
var boots = new Items('boots', 'img/boots.jpg', 0);
var breakfest = new Items('breakfast', 'img/breakfast.jpg', 0);
var bubblegum = new Items('bubblegum', 'img/bubblegum.jpg', 0);
var chair = new Items('chair', 'img/chair.jpg', 0);
var cthulhu = new Items('cthulhu', 'img/cthulhu.jpg', 0);
var dog = new Items('dogDuck', 'img/dog-duck.jpg', 0);
var dragon = new Items('dragon', 'img/dragon.jpg', 0);
var pen = new Items('pen', 'img/pen.jpg', 0);
var petSweep = new Items('petSweep', 'img/pet-sweep.jpg', 0);
var scissors = new Items('scissors', 'img/scissors.jpg', 0);
var shark = new Items('shark', 'img/shark.jpg', 0);
var sweep = new Items('sweep', 'img/sweep.png', 0);
var tauntaun = new Items('tauntaun', 'img/tauntaun.jpg', 0);
var unicorn = new Items('unicorn', 'img/unicorn.jpg', 0);
var usb = new Items('usb', 'img/usb.gif', 0);
var waterCan = new Items('waterCan', 'img/water-can.jpg', 0);
var wineGlass = new Items('wineGlass', 'img/wine-glass.jpg', 0);
var itemsArr = [bag, banana, bathroom, boots, breakfest, chair, cthulhu, dog, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
photos = [];
photoName = [];
function Items(name, img, clickCount){
  this.name = name;
  this.img = img;
  this.clickCount = clickCount;
}
var photo1 = document.getElementById('img1');
var photo2 = document.getElementById('img2');
var photo3 = document.getElementById('img3');
var photoArr = [photo1, photo2, photo3];

//debugger;
getPhoto();
img1.addEventListener("click", function() {photoName[0].clickCount++; getPhoto()});
img2.addEventListener("click", function() {; getPhoto()});
img3.addEventListener("click", function() {; getPhoto()});
function getPhoto() {
  for (var i = 0; i < photoArr.length; i++){
    photosToDisplay = itemsArr[randomNum()].img;
    photoName[i] = itemsArr[num].name;
    photos.push(photosToDisplay);
    photoArr[i].src = photosToDisplay;
  }
}
function randomNum() {
  var min = 1;
  var max = 20;
  var num = Math.floor(Math.random() * (max - min));
  return num;
}
