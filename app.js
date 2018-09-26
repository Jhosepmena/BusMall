//Make an object
'use strict';

//Array of products
Product.allProducts = [];

//Variables in use
var productOne = document.getElementById('productOne');
var productTwo = document.getElementById('productTwo');
var productThree = document.getElementById('productThree');
var activeSet = [];
// var excludeSet = [];
var votes = 25;

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

//Make new Products instances
new Product('Bag', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon Meat', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Broom', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Tentacle USB', 'img/usb.gif');
new Product('Watering Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

//Event Listener

productOne.addEventListener('click', randomProduct);
productTwo.addEventListener('click', randomProduct);
productThree.addEventListener('click', randomProduct);

//Randomly display products

function randomSet() {
  activeSet = [];
  while(activeSet.length < 3){
    var randomNumber = Math.floor(Math.random() * Product.allProducts.length);
    // if (randomNumber == excludeSet[i])
    if(activeSet.indexOf(randomNumber) > - 1) continue;
    activeSet.push(randomNumber);
  }
}

function randomProduct() {
  randomSet();
  productOne.src = Product.allProducts[activeSet[0]].filepath;
  productTwo.src = Product.allProducts[activeSet[1]].filepath;
  productThree.src = Product.allProducts[activeSet[2]].filepath;

  Product.allProducts[activeSet[0]].views++;
  Product.allProducts[activeSet[1]].views++;
  Product.allProducts[activeSet[2]].views++;
  votes--;
}

//Trying to trigger the event listeners to disable after 25 votes :( Not working. Also tried some loops. 
if (votes == 0) {
  productOne.removeEventListener('click', randomProduct);
  productTwo.removeEventListener('click', randomProduct);
  productThree.removeEventListener('click', randomProduct);
}


randomProduct();
console.log(activeSet);
console.log(Product.allProducts);
// console.log(excludeSet);
