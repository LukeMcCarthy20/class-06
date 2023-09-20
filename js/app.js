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


//Help from chatgpt and this mornings 9/20/23 demo. 


function CookieShop(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlySales = [];
  this.totalDailySales = 0;
}


CookieShop.prototype.calculateHourlySales = function () {
  for (let hour = 6; hour <= 19; hour++) {
    let randomCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    let cookiesSold = Math.round(randomCustomers * this.avgCookiesPerCustomer);
    this.hourlySales.push(cookiesSold);
    this.totalDailySales += cookiesSold;
  }
};


CookieShop.prototype.render = function () {
  let tableRow = document.createElement('tr');
  let locationCell = document.createElement('td');
  locationCell.textContent = this.name;
  tableRow.appendChild(locationCell);


  for (let hour = 6; hour <= 19; hour++) {
    let salesCell = document.createElement('td');
    salesCell.textContent = this.hourlySales[hour - 6];
    tableRow.appendChild(salesCell);
  }


  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalDailySales;
  tableRow.appendChild(totalCell);


  salesTable.appendChild(tableRow);
};


let locations = [
  new CookieShop('Seattle', 23, 65, 6.3),
  new CookieShop('Tokyo', 3, 24, 1.2),
  new CookieShop('Dubai', 11, 38, 3.7),
  new CookieShop('Paris', 20, 38, 2.3),
  new CookieShop('Lima', 2, 16, 4.6)
];


let salesTable = document.getElementById('sales-table');


function renderTableHeader() {
  let tableRow = document.createElement('tr');
  let headers = ['Location'];


  for (let hour = 6; hour <= 19; hour++) {
    if (hour === 12) {
      headers.push('12:00pm');
    } else if (hour < 12) {
      headers.push(hour + ':00am');
    } else {
      headers.push(hour - 12 + ':00pm');
    }
  }


  headers.push('Daily Location Total');


  headers.forEach(function (headerText) {
    let headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    tableRow.appendChild(headerCell);
  });


  salesTable.appendChild(tableRow);
}


function renderTableFooter() {
  let tableRow = document.createElement('tr');
  let footerCell = document.createElement('td');
  footerCell.textContent = 'Totals';
  tableRow.appendChild(footerCell);


  let grandTotal = Array(14).fill(0);


  locations.forEach(function (location) {
    location.hourlySales.forEach(function (hourlySale, hour) {
      grandTotal[hour] += hourlySale;
    });
  });


  grandTotal.forEach(function (total) {
    let totalCell = document.createElement('td');
    totalCell.textContent = total;
    tableRow.appendChild(totalCell);
  });


  salesTable.appendChild(tableRow);
}


renderTableHeader();


locations.forEach(function (location) {
  location.calculateHourlySales();
  location.render();
});


renderTableFooter();


