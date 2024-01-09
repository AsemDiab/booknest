class Order {
    static totalOrder=0;
    constructor( custmer, cost, status,items) {

      this._custmer = custmer;
      this._cost = cost;
      this._id=totalOrder;
      this._status=status;
      this._items=items
      Order.totalOrder++;
    }
  
    // Getter for custmer
    get_custmer() {
      return this._custmer;
    }
  
    // Setter for custmer
    set_custmer(newcustmer) {
      this._custmer = newcustmer;
    }
  
    // Getter for cost
    get_cost() {
      return this._cost;
    }
  
    // Setter for cost
    set_cost(newCost) {
      this._cost = newCost;
    }
  
    // Getter for status
    get_status() {
      return this._status;
    }
  
    // Setter for status
    set_status(newstatus) {
      this._status = newstatus;
    }
  
    // Method to display book information
    displayInfo() {
      console.log(` custmer: ${this.custmer}, Cost: $${this.cost.toFixed(2)}`);
    }
  }
  export default Order;