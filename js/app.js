'use strict';
console.log('Connected');


let form = document.getElementById('cookie-form');



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
  let finalTotalDailySales = 0;
  locations.forEach(function (location) {
    location.hourlySales.forEach((hourlySale,hour) => {
      grandTotal[hour] = hourlySale;
    });
    finalTotalDailySales = finalTotalDailySales + location.totalDailySales;
    console.log('one big number',finalTotalDailySales);
  });//this close the first foreach

  //we  need another nested for loop to calculate column totals
  for(let i = 0; i <= 13; i++ ){
    for(let j = 0; j < locations.length; j++){
      console.log(locations[j].hourlySales[i]);
      //add the column
      //create the html element td
      //append each td's to the footer row..
    }
  }
  // grandTotal.forEach(function (total) {
  let totalCell = document.createElement('td');
  totalCell.textContent = finalTotalDailySales;
  tableRow.appendChild(totalCell);
  // });



  salesTable.appendChild(tableRow);
}




function renderAllLocations(){

  locations.forEach(function (location) {
    location.calculateHourlySales();
    location.render();
  });
}






function handletheformSubmitted(event) {
  event.preventDefault();
  console.log(event.target);
  let name = event.target.name.value;
  // let minCustomersPerHour = event.target.minCustomersPerHour.value;
  let minCustomerInput = document.getElementById('MinCustomers');
  let minCustomersPerHour = minCustomerInput.value;
  console.log(minCustomerInput);
  console.log(minCustomersPerHour);
  let maxCustomerInput = document.getElementById('MaxCustomers');
  let maxCustomersPerHour = maxCustomerInput.value;
  let avgcookiesInput = document.getElementById('MaxCustomers');
  let avgCookiesPerCustomer = avgcookiesInput.value;




  console.log(name);


  let newShop = new CookieShop(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);
  console.log(newShop);
  newShop.calculateHourlySales();
  newShop.render();

  let form = document.getElementById('cookie-form');
  form.reset;

}


form.addEventListener('submit', handletheformSubmitted);



renderTableHeader();

renderAllLocations();

renderTableFooter();
