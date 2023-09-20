'use strict';
console.log('Connected');

// let petOne = {
//   name: 'Fluffy',
//   breed: 'tabby',
//   imageName: 'diabloBlanco',
//   interests: ['Sun Light', 'Mouse Toys', 'Red Dots'],
//   isGoodWithKids: true,
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   setAge: function () {
//     this.age = randomAge(3, 12) + 'Months old.';
//   }
// };

// petOne.setAge();
// console.log(petOne);



// let parentElement = document.getElementById('kittenProfiles');
// console.log(parentElement);





// let article = document.createElement('article');
// console.log(article);
// parentElement.appendChild(article);
// let h2 = document.createElement('h2');
// h2.textContent = petOne.name;
// article.appendChild(h2);

// let petPara = document.createElement('p');
// petPara.textContent = 'Cats are cool! and pet one is' + petOne.age;
// article.appendChild(petPara);

// let petUl = document.createElement('ul');
// article.appendChild(petUl);

// for (let i = 0; i < petOne.interests.length; i++) {
//   let petLi = document.createElement('li');
//   petLi.textContent = petOne.interests[i];
//   petUl.appendChild(petLi);


// }



// let petOneImage = document.createElement('img');
// petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg' );
// petOneImage.setAttribute('alt', 'Please Adopt Our Kittens' );
// article.appendChild(petOneImage);



// console.log(parentElement);









// function randomAge(minMonth, maxMonth) {

//   return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
// }

// LAB DEMO FOLLOW ALONG NOTES ^





// Ideas from chatgpt and messing around with random ideas below (nothing pasted)


// let hours = ['6am','7am','8am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
// let seattle = {
//   name: 'seattle',

//   avgcookies: 4.6
//   HourlySales: [],

//   randomCustomer: function () {
//     return randomCustomersPerHour(5, 10);
//   },

//   calcHourlySales: function () {
//     for (let i = 0; i < 12; i++) {
//       let customers = this.randomCustomer();
//       console.log(customers);
//       let cookiesSold = (customers * this.avgcookies);
//       console.log(cookiesSold);
//       this.HourlySales.push(cookiesSold);
//     }
//   },

// };

// marion.randomCustomer();
// marion.calcHourlySales();


// function randomCustomersPerHour(minCustomers, maxCustomers) {

//   return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
// }





// Code went over in class this morning. That I now understand better...


// let seattle = {
//   location: 'Seattle',
//   minCustomersPerHour: 23,
//   maxcustomersPerHour: 65,
//   cookiesPerHour: [],
//   dailycookies: 0,
//   avgcookies: 4.6,
//   randomcustomerperhour: function () {
//     return Math.floor(Math.random() * (this.maxcustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//   },


// };

// let tokyo = {
//   location: 'tokyo',
//   minCustomersPerHour: 3,
//   maxcustomersPerHour: 24,
//   cookiesPerHour: [],
//   dailycookies: 0,
//   avgcookies: 1.2,
//   randomcustomerperhour: function () {
//     return Math.floor(Math.random() * (this.maxcustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//   },


// };


// let dubai = {
//   location: 'dubai',
//   minCustomersPerHour: 11,
//   maxcustomersPerHour: 38,
//   cookiesPerHour: [],
//   dailycookies: 0,
//   avgcookies: 3.7,
//   randomcustomerperhour: function () {
//     return Math.floor(Math.random() * (this.maxcustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//   },


// };


// let paris = {
//   location: 'paris',
//   minCustomersPerHour: 20,
//   maxcustomersPerHour: 38,
//   cookiesPerHour: [],
//   dailycookies: 0,
//   avgcookies: 2.3,
//   randomcustomerperhour: function () {
//     return Math.floor(Math.random() * (this.maxcustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//   },


// };



// let lima = {
//   location: 'lima',
//   minCustomersPerHour: 2,
//   maxcustomersPerHour: 16,
//   cookiesPerHour: [],
//   dailycookies: 0,
//   avgcookies: 4.6,
//   randomcustomerperhour: function () {
//     return Math.floor(Math.random() * (this.maxcustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//   },


// };

// function randomCustomerArray(shops) {
//   for (let i = 0; i < 14; i++) {
//     let customers = shops.randomcustomerperhour();
//     shops.cookiesPerHour.push(customers);
//   }
// }

// randomCustomerArray(seattle);
// randomCustomerArray(tokyo);
// randomCustomerArray(dubai);
// randomCustomerArray(paris);
// randomCustomerArray(lima);

// console.log(seattle.cookiesPerHour);
// console.log(tokyo.cookiesPerHour);
// console.log(dubai.cookiesPerHour);
// console.log(paris.cookiesPerHour);
// console.log(lima.cookiesPerHour);









// Inspiration from demo and Emmas Lab ^ 



let seattle = {
  location: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
  },

};

let tokyo = {
  location: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
  },

};


let dubai = {
  location: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
  },

};


let paris = {
  location: 'paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
  },

};



let lima = {
  location: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.maxCustomersPerHour;
  },

};



function calculateHourlyCookies(shop) {
  for (let hour = 6; hour <= 19; hour++) {
    let randomCustomers = shop.randomCustomersPerHour();
    let cookiesSold = Math.round(randomCustomers * shop.avgCookiesPerCustomer);
    shop.cookiesPerHour.push(`${hour}am: ${cookiesSold} cookies`);
    shop.totalDailyCookies += cookiesSold;
  }
}

calculateHourlyCookies(seattle);
calculateHourlyCookies(tokyo);
calculateHourlyCookies(dubai);
calculateHourlyCookies(paris);
calculateHourlyCookies(lima);
console.log(seattle.cookiesPerHour);
console.log(tokyo.cookiesPerHour);
console.log(dubai.cookiesPerHour);
console.log(paris.cookiesPerHour);
console.log(lima.cookiesPerHour);



function hourlyCookies(shop) {
  let locationHeading = document.createElement('h2');
  locationHeading.textContent = shop.location;
  document.body.appendChild(locationHeading);

  let cookiesList = document.createElement('ul');
  for (let i = 0; i < shop.cookiesPerHour.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = shop.cookiesPerHour[i];
    cookiesList.appendChild(listItem);
  }
  document.body.appendChild(cookiesList);

  let totalCookiesParagraph = document.createElement('p');
  totalCookiesParagraph.textContent = `Total: ${shop.totalDailyCookies} cookies`;
  document.body.appendChild(totalCookiesParagraph);
}



hourlyCookies(seattle);

hourlyCookies(tokyo);

hourlyCookies(dubai);

hourlyCookies(paris);

hourlyCookies(lima);














// Testing... 

// function hourlyUl(shop) {
//   let header = document.createElement('h2');
//   console.log('h2: ', header);
//   header.textContent = shop.location;

//   let city = document.getElementById("locations");
//   for (let i = 0; i < shop.hoursOpen - 1; i++) {
//     let lists = document.createElement('li');
//     lists.textContent = `${i + 6}:00 ${shop.cookiesPerHourArr[i]} cookies`;
//     city.appendChild(lists);
//   }
//   let totalLists = document.createElement('li');
//   city.appendChild(totalLists);
// }


// hourlyUl(seattle);
// hourlyUl(tokyo);
// hourlyUl(dubai);
// hourlyUl(paris);
// hourlyUl(lima);








// Testing...



// function displayResults(location) {
//   let locationElement = document.getElementById(location.locations);
//   let ul = document.createElement('ul');

//   for (let i = 0; i < location.cookiesPerHour.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${i + 6} AM: ${location.cookiesPerHour[i]} cookies`;
//     ul.appendChild(li);
//   }

//   locationElement.appendChild(ul);
// }


// displayResults(seattle);
// displayResults(tokyo);
// displayResults(dubai);
// displayResults(paris);
// displayResults(lima);










