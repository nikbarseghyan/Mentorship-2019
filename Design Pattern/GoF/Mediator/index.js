/**
 * @Mediator 
 * 
 * @Link https://hy.wikipedia.org/wiki/%D5%84%D5%AB%D5%BB%D5%B6%D5%B8%D6%80%D5%A4_(%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%B4%D5%A1%D5%B6_%D5%B1%D6%87%D5%A1%D5%B6%D5%B4%D5%B8%D6%82%D5%B7)
 */
class OfficialDealer {
    constructor() {
      this.customers = [];
    }
    
    orderAuto(customer, auto, info) {
      const name = customer.getName();
      console.log(`Order name: ${name}. Order auto is ${auto}`);
      console.log(`Additional info: ${info}`);
      this.addToCustomersList(name);
    }
    
    addToCustomersList(name) {
      this.customers.push(name);
    }
    
    getCustomerList() {
      return this.customers;
    }
  };
  
  class Customer {
    constructor(name, dealerMediator) {
      this.name = name;
      this.dealerMediator = dealerMediator;
    }

    getName() {
      return this.name;
    }

    makeOrder(auto, info) {
      this.dealerMediator.orderAuto(this, auto, info)
    }
  };