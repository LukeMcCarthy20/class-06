'use strict';

console.log('demo connected ');
let hours = ['6am']

let seattle = {

  locationName: 'Seattle',
  mincustomer: 23,
  maxcustomer: 65,
  customersEachHour: [],
  cookiesEachHour: [],
  totaldailycookies: 0,
  avgCookiesPerSale: 4.6,
  calcCustomerEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.maxcustomer, this.minCusomer));

    }
  },

  calcCookiesEachHour: function () {
    this.calcCustomerEachHour();
    for (let i = 0; i < hours.length; i++)
      console.log(this.customersEachHour[i]);
    let oneHour = Math.ceil(this.customersEachHour * this.avgCookiesPerSale);
    console.log('for each hour', oneHour);

  },

  render() {
    this.calcCookiesEachHour();

  },

};

function random(max, min) {
  Math.random() * (max - min + 1) + min;
}

seattle.calcCustomerEachHour();

console.log(seattle.customersEachHour);

let allShops = [seattle];
function renderAllShops() {
  for (let i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}

renderAllShops();






//new operator and it is how we call or invoke our constructor functions.

function Pet(petName, breed,imageName,interests){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;

}

let petOne = new Pet('tom','tiger','diabloBlanco',['Sun Light', 'Mouse Toys', 'Red dots']);
console.log('did we get pet one?', petOne);
