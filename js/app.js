'use strict';
console.log('Connected');

// let seattle = {
//   location: 'Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   randomCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
//   },

// };

// let tokyo = {
//   location: 'Tokyo',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   randomCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
//   },

// };


// let dubai = {
//   location: 'Dubai',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   randomCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
//   },

// };


// let paris = {
//   location: 'paris',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   randomCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
//   },

// };



// let lima = {
//   location: 'Lima',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   cookiesPerHour: [],
//   totalDailyCookies: 0,

//   randomCustomersPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
//   },

// };



// function calculateHourlyCookies(shop) {
//   for (let hour = 6; hour <= 19; hour++) {
//     let randomCustomers = shop.randomCustomersPerHour();
//     let cookiesSold = Math.round(randomCustomers * shop.avgCookiesPerCustomer);
//     shop.cookiesPerHour.push(`${hour}am: ${cookiesSold} cookies`);
//     shop.totalDailyCookies += cookiesSold;
//   }
// }

// calculateHourlyCookies(seattle);
// calculateHourlyCookies(tokyo);
// calculateHourlyCookies(dubai);
// calculateHourlyCookies(paris);
// calculateHourlyCookies(lima);
// console.log(seattle.cookiesPerHour);
// console.log(tokyo.cookiesPerHour);
// console.log(dubai.cookiesPerHour);
// console.log(paris.cookiesPerHour);
// console.log(lima.cookiesPerHour);



// function hourlyCookies(shop) {
//   let locationHeading = document.createElement('h2');
//   locationHeading.textContent = shop.location;
//   document.body.appendChild(locationHeading);

//   let cookiesList = document.createElement('ul');
//   for (let i = 0; i < shop.cookiesPerHour.length; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent = shop.cookiesPerHour[i];
//     cookiesList.appendChild(listItem);
//   }
//   document.body.appendChild(cookiesList);

//   let totalCookiesParagraph = document.createElement('p');
//   totalCookiesParagraph.textContent = `Total: ${shop.totalDailyCookies} cookies`;
//   document.body.appendChild(totalCookiesParagraph);
// }



// hourlyCookies(seattle);

// hourlyCookies(tokyo);

// hourlyCookies(dubai);

// hourlyCookies(paris);

// hourlyCookies(lima);


//Help from chatgpt but I understand all this. 

function CookieShops(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
}

CookieShops.prototype.generateRandomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
};

CookieShops.prototype.calculateHourlyCookies = function () {
  for (let hour = 6; hour <= 19; hour++) {
    let randomCustomers = this.generateRandomCustomersPerHour();
    let cookiesSold = Math.round(randomCustomers * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(`${hour}am: ${cookiesSold} cookies`);
    this.totalDailyCookies += cookiesSold;
  }
};


CookieShops.prototype.displayHourlyCookies = function () {
  let locationHeading = document.createElement('h2');
  locationHeading.textContent = this.location;
  document.body.appendChild(locationHeading);

  let cookiesList = document.createElement('ul');
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = this.cookiesPerHour[i];
    cookiesList.appendChild(listItem);
  }
  document.body.appendChild(cookiesList);

  let totalCookiesParagraph = document.createElement('p');
  totalCookiesParagraph.textContent = `Total: ${this.totalDailyCookies} cookies`;
  document.body.appendChild(totalCookiesParagraph);
};

let seattle = new CookieShops('Seattle', 23, 65, 6.3);
let tokyo = new CookieShops('Tokyo', 3, 24, 1.2);
let dubai = new CookieShops('Dubai', 11, 38, 3.7);
let paris = new CookieShops('Paris', 20, 38, 2.3);
let lima = new CookieShops('Lima', 2, 16, 4.6);


seattle.calculateHourlyCookies();
seattle.displayHourlyCookies();

tokyo.calculateHourlyCookies();
tokyo.displayHourlyCookies();

dubai.calculateHourlyCookies();
dubai.displayHourlyCookies();

paris.calculateHourlyCookies();
paris.displayHourlyCookies();

lima.calculateHourlyCookies();
lima.displayHourlyCookies();







