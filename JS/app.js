"use strict";

let custHourly = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']

let cookieSection = document.getElementById('cookie-sales');

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieph: 6.3,
  customer: [],
  averageCookieHour: [],
  getCustomerPerHour: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
    }
  },
  render: function(){
    document.getElementById("seattle-header").innerText="Seattle";
    let ulElem = document.getElementById("seattle-data");
    //this.averageCookieHour = this.avgCookie; 
    for (let i = 0; i < custHourly.length; i++){
      let liElem = document.createElement('li');
      //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
      liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
      ulElem.appendChild(liElem);
  }
}
}

let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieph: 1.2,
  customer: [],
  averageCookieHour: [],
  getCustomerPerHour: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
    }
  },
  render: function(){
    document.getElementById("tokyo-header").innerText="Tokyo";
    let ulElem = document.getElementById("tokyo-data");
    //this.averageCookieHour = this.avgCookie; 
    for (let i = 0; i < custHourly.length; i++){
      let liElem = document.createElement('li');
      //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
      liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
      ulElem.appendChild(liElem);
  }
}
}

let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieph: 3.7,
  customer: [],
  averageCookieHour: [],
  getCustomerPerHour: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
    }
  },
  render: function(){
    document.getElementById("dubai-header").innerText="Dubai";
    let ulElem = document.getElementById("dubai-data");
    //this.averageCookieHour = this.avgCookie; 
    for (let i = 0; i < custHourly.length; i++){
      let liElem = document.createElement('li');
      //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
      liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
      ulElem.appendChild(liElem);
  }
}
}

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieph: 2.3,
  customer: [],
  averageCookieHour: [],
  getCustomerPerHour: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
    }
  },
  render: function(){
    document.getElementById("paris-header").innerText="Paris";
    let ulElem = document.getElementById("paris-data");
    //this.averageCookieHour = this.avgCookie; 
    for (let i = 0; i < custHourly.length; i++){
      let liElem = document.createElement('li');
      //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
      liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
      ulElem.appendChild(liElem);
  }
}
}

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieph: 4.6,
  customer: [],
  averageCookieHour: [],
  getCustomerPerHour: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.customer.push(randCust(this.minCust, this.maxCust));
    }
  },
  avgCookie: function () {
    for (let i = 0; i < custHourly.length; i++) {
      this.averageCookieHour.push(Math.round(this.customer[i] * this.avgCookieph));
      
    }
  },
  render: function(){
    document.getElementById("lima-header").innerText="Lima";
    let ulElem = document.getElementById("lima-data");
    //this.averageCookieHour = this.avgCookie; 
    for (let i = 0; i < custHourly.length; i++){
      let liElem = document.createElement('li');
      //this.averageCookieHour[i] = (Math.round(this.customer[i] * this.avgCookieph));
      liElem.textContent = `${custHourly[i]} ${this.averageCookieHour[i]}`;
      ulElem.appendChild(liElem);
  }
}
}
function randCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
seattle.getCustomerPerHour();
seattle.avgCookie();
seattle.render();

tokyo.getCustomerPerHour();
tokyo.avgCookie();
tokyo.render();

dubai.getCustomerPerHour();
dubai.avgCookie();
dubai.render()

paris.getCustomerPerHour();
paris.avgCookie();
paris.render();

lima.getCustomerPerHour();
lima.avgCookie();
lima.render();

console.log(seattle);
console.log(seattle.averageCookieHour);
console.log(seattle.customer);

console.log(tokyo);
console.log(tokyo.averageCookieHour);
console.log(tokyo.Customer);

console.log(dubai);
console.log(dubai.averageCookieHour);
console.log(dubai.customer);

console.log(paris);
console.log(paris.averageCookieHour);
console.log(paris.customer);

console.log(lima);
console.log(lima.averageCookieHour);
console.log(lima.customer);