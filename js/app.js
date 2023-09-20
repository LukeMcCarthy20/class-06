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



function renderHeaderRow() {
  let headerRow = document.getElementById('tableHeader');
  let tr = document.createElement('tr');
  let emptyCell = document.createElement('th');
  tr.appendChild(emptyCell);
  for (let i = 6; i <= 19; i++) {
    let th = document.createElement('th');
    th.textContent = i + ':00am';
    tr.appendChild(th);
  }
  let dailyTotalCell = document.createElement('th');
  dailyTotalCell.textContent = 'Daily Location Total';
  tr.appendChild(dailyTotalCell);
  headerRow.appendChild(tr);
}

function renderStoreRow(location) {
  let tbody = document.getElementById('tableBody');
  let tr = document.createElement('tr');
  let storeNameCell = document.createElement('td');
  storeNameCell.textContent = location.location;
  tr.appendChild(storeNameCell);
  for (let cookies of location.cookiesPerHour) {
    let td = document.createElement('td');
    td.textContent = cookies;
    tr.appendChild(td);
  }
  let dailyTotalCell = document.createElement('td');
  dailyTotalCell.textContent = location.cookiesPerHour.reduce((a, b) => a + b, 0);
  tr.appendChild(dailyTotalCell);
  tbody.appendChild(tr);
}

function renderFooterRow(locations) {
  let footerRow = document.getElementById('tableFooter');
  let tr = document.createElement('tr');
  let totalsCell = document.createElement('td');
  totalsCell.textContent = 'Totals';
  tr.appendChild(totalsCell);
  for (let i = 6; i <= 19; i++) {
    let hourlyTotal = locations.reduce((total, location) => total + location.cookiesPerHour[i - 6], 0);
    let td = document.createElement('td');
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }
  let grandTotal = locations.reduce((total, location) => total + location.cookiesPerHour.reduce((a, b) => a + b, 0), 0);
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = grandTotal;
  tr.appendChild(grandTotalCell);
  footerRow.appendChild(tr);
}

renderHeaderRow();
for (let location of [seattle, tokyo, dubai, paris, lima]) {
  renderStoreRow(location);
}


renderFooterRow([seattle, tokyo, dubai, paris, lima]);
