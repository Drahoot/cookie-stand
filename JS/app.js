"use strict";

let custHourly = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']

let cookieSection = document.getElementById('cookie-sales');

let table = document.querySelector('table');

let cookieCraze = [];

function City(location, minCust, maxCust, avgCookiePerCustomer){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalCookies = 0;
  this.customerPerHour = [];
  this.averageCookieHour = [];
  
  cookieCraze.push(this);
}

City.prototype.getCustomerPerHour = function(){
  for (let i = 0; i < custHourly.length; i++) {
    this.customerPerHour.push(randCust(this.minCust, this.maxCust));
  }
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

seattle.getCustomerPerHour();
tokyo.getCustomerPerHour();
dubai.getCustomerPerHour();
paris.getCustomerPerHour();
lima.getCustomerPerHour();


City.prototype.avgCookie = function () {
  for (let i = 0; i < custHourly.length; i++) {
    this.averageCookieHour.push(Math.round(this.customerPerHour[i] * this.avgCookiePerCustomer));
    this.totalCookies += (this.averageCookieHour[i]);
  }
}
seattle.avgCookie();
tokyo.avgCookie();
dubai.avgCookie();
paris.avgCookie();
lima.avgCookie();


function tableHeading(){
  let row1 = document.createElement('tr');
  let th1Elem = document.createElement('th');
  th1Elem.textContent = ('City');
  row1.appendChild(th1Elem);
  table.appendChild(row1);
  
  for (let i=0; i < custHourly.length; i++){
    let th1Elem = document.createElement('th');
    th1Elem.textContent = custHourly[i];
    row1.appendChild(th1Elem);
  }
  
  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Daily location total';
  row1.appendChild(th2Elem);
}

City.prototype.render = function(){
  let row2 = document.createElement('tr');
  let th3Elem = document.createElement('td');
  th3Elem.textContent = this.location;
  row2.appendChild(th3Elem);
  table.appendChild(row2);
  
  for (let i = 0; i < this.averageCookieHour.length; i++){
    
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.averageCookieHour[i];
    row2.appendChild(td1Elem);
    
  }
  
  let th4Elem = document.createElement('td');
  th4Elem.textContent = this.totalCookies;
  row2.appendChild(th4Elem);
  
}

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
console.log(cookieCraze);

tableHeading();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//renderCity();

// function for header row is by itself
// function for table footer row is by itself
// function for tr(names of cities) is NOT by itself
// function to render whole table will call the seperate header row function


// function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  //   this.name = name;
  //   this.interests = interests;
  //   this.isGoodWithCats = isGoodWithCats;
  //   this.isGoodWithDogs = isGoodWithDogs;
  //   this.isGoodWithKids = isGoodWithKids;
  //   this.photo = photo;
//   this.age = 0;

//   kittenCadboodle.push(this); // this is pushing all of  my insatiated objects into an array
// }

// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiePerCustomer: 6.3,
//   customerPerHour: [],
//   averageCookieHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customerPerHour.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   avgCookie: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.averageCookieHour.push(Math.round(this.customerPerHour[i] * this.avgCookiePerCustomer));
      
//     }
//   },
//   render: function(){
//     document.getElementById("seattle-header").innerText="Seattle";
//     let ulElem = document.getElementById("seattle-data"); 
//     for (let i = 0; i < custHourly.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
//       ulElem.appendChild(liElem);
//   }
// }
// }

// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieph: 1.2,
//   customer: [],
//   averageCookieHour: [],
//   getCustomerPerHour: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   avgCookie: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
//     }
//   },
//   render: function(){
//     document.getElementById("tokyo-header").innerText="Tokyo";
//     let ulElem = document.getElementById("tokyo-data");
//     //this.averageCookieHour = this.avgCookie; 
//     for (let i = 0; i < custHourly.length; i++){
//       let liElem = document.createElement('li');
//       //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
//       liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
//       ulElem.appendChild(liElem);
//   }
// }
// }

// let dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieph: 3.7,
//   customer: [],
//   averageCookieHour: [],
//   getCustomerPerHour: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   avgCookie: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
//     }
//   },
//   render: function(){
//     document.getElementById("dubai-header").innerText="Dubai";
//     let ulElem = document.getElementById("dubai-data");
//     //this.averageCookieHour = this.avgCookie; 
//     for (let i = 0; i < custHourly.length; i++){
//       let liElem = document.createElement('li');
//       //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
//       liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
//       ulElem.appendChild(liElem);
//   }
// }
// }

// let paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieph: 2.3,
//   customer: [],
//   averageCookieHour: [],
//   getCustomerPerHour: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   avgCookie: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
//     }
//   },
//   render: function(){
//     document.getElementById("paris-header").innerText="Paris";
//     let ulElem = document.getElementById("paris-data");
//     //this.averageCookieHour = this.avgCookie; 
//     for (let i = 0; i < custHourly.length; i++){
//       let liElem = document.createElement('li');
//       //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
//       liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
//       ulElem.appendChild(liElem);
//   }
// }
// }

// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieph: 4.6,
//   customer: [],
//   averageCookieHour: [],
//   getCustomerPerHour: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.customer.push(randCust(this.minCust, this.maxCust));
//     }
//   },
//   avgCookie: function () {
//     for (let i = 0; i < custHourly.length; i++) {
//       this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
//     }
//   },
//   render: function(){
//     document.getElementById("lima-header").innerText="Lima";
//     let ulElem = document.getElementById("lima-data");
//     //this.averageCookieHour = this.avgCookie; 
//     for (let i = 0; i < custHourly.length; i++){
//       let liElem = document.createElement('li');
//       //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
//       liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
//       ulElem.appendChild(liElem);
//   }
// }
// }
function randCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//seattle.getCustomerPerHour();
//seattle.avgCookie();
//seattle.render();

// tokyo.getCustomerPerHour();
// tokyo.avgCookie();
// tokyo.render();

// dubai.getCustomerPerHour();
// dubai.avgCookie();
// dubai.render()

// paris.getCustomerPerHour();
// paris.avgCookie();
// paris.render();

// lima.getCustomerPerHour();
// lima.avgCookie();
// lima.render();

// console.log(seattle);
// console.log(seattle.averageCookieHour);
// console.log(seattle.customerPerHour);

// console.log(tokyo);
// console.log(tokyo.averageCookieHour);
// console.log(tokyo.Customer);

// console.log(dubai);
// console.log(dubai.averageCookieHour);
// console.log(dubai.customer);

// console.log(paris);
// console.log(paris.averageCookieHour);
// console.log(paris.customer);

// console.log(lima);
// console.log(lima.averageCookieHour);
// console.log(lima.customer);

// const li5 = document.createElement('li');
// li5.textContent = `Total ${getTotalSales(limaStoreArr)}`
// ul5.appendChild(li5);
