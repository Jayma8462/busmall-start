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
var clickCountCheck = 0;
test = false;
var clickCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Items(name, img, clickCount){
  this.name = name;
  this.img = img;
  this.clickCount = clickCount;
}
var photo1 = document.getElementById('img1');
var photo2 = document.getElementById('img2');
var photo3 = document.getElementById('img3');
var photoArr = [photo1, photo2, photo3];
img1.addEventListener("click", function() {clickCount(ranNum); clickCountAdd(); checkCount(); getPhoto()});
img2.addEventListener("click", function() {clickCount(ranNum); clickCountAdd(); checkCount(); getPhoto()});
img3.addEventListener("click", function() {clickCount(ranNum); clickCountAdd(); checkCount(); getPhoto()});
getPhoto();

function clickCount(ranNum){
  var a = 1;
  clickCountArr[ranNum] += a;
}
function randomNum() {
  var min = 1;
  var max = 20;
  return Math.floor(Math.random() * (max - min));
}
function getPhotoNew(i){
  ranNum = randomNum();
  photoArr[i].src = itemsArr[ranNum].img;
}
function getPhoto(){
  var dupCheck = [];
  for (var i = 0; i < photoArr.length; i++){
    ranNum = randomNum();
    dupCheck.push(ranNum);
    photoArr[i].src = itemsArr[ranNum].img;
  }
  if (dupCheck[0] == dupCheck[1]){
    i = 0;
    getPhoto(i);
  } else if(dupCheck[0] == dupCheck[2]){
    i = 1;
    getPhoto(i);
  }else if (dupCheck[1] == dupCheck[2]){
    i = 2;
    getPhoto(i);
  }
}
function clickCountAdd(){
  clickCountCheck++;
}
function checkCount() {
  if (clickCountCheck >= 25){
    test = true;
    console.log(clickCountArr);
    chart(clickCountArr);
//      window.close("index.html");
  }
}
function chart(clickCountArr) {
  var itemNames = [];
  var dataSet = [];
  for (var i = 0; i < itemsArr.length; i++){
    itemNames[i] = itemsArr[i].name;
    dataSet[i] = clickCountArr[i];
  }
  var context = document.getElementById('chart').getContext('2d');
  var chartColors = ['black', 'white', 'brown', 'green', 'blue', 'red'];

  var myChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: '# of Votes',
        data: clickCountArr,
        backgroundColor: chartColors
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
