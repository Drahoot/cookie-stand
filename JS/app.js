'use strict';

let cookieSection = document.getElementById('cookie-sales');

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieph: 6.3, 
  customerPerHour: 0,
  getCustomerPerHour: function(){
    this.customerPerHour = randomAverage(minCust,maxCust)
  }
}
// key value pair storing min and max customers hourly, customers per hour



// DOM MANIPULATION
// maybe try a loop for each hour 
function randomAverage(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// seattle.render = function(){
//   let h2Element = document.createElement ('h2');
//   h2Elem.textContent = this.location;
//   cookieSection.appendChild(h2Elem);
  
//   let paraElem = document.createElement ('p');
//   paraElem.textContent = `${this.location} has been able to sell ${this.average} cookies on average.`
//   cookieSection.appendChild(paraElem);
  
//   let
// }
seattle.get();

console.log(seattle);