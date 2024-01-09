
class Book {
    static totalBooks=0;
    constructor(image, title, count, author, cost, description,typeCode) {
      this._image = image;
      this._title = title;
      this._count = count;
      this._author = author;
      this._cost = cost;
      this._description = description;
      this._id=totalBooks;
      this._typeCode=typeCode
      Book.totalBooks++;
    }
  
    // Getter for image
    get image() {
      return this._image;
    }
  
    // Setter for image
    set image(newImage) {
      this._image = newImage;
    }
  
    // Getter for title
    get title() {
      return this._title;
    }
  
    // Setter for title
    set title(newTitle) {
      this._title = newTitle;
    }
  
    // Getter for count
    get count() {
      return this._count;
    }
  
    // Setter for count
    set count(newCount) {
      this._count = newCount;
    }
  
    // Getter for author
    get author() {
      return this._author;
    }
  
    // Setter for author
    set author(newAuthor) {
      this._author = newAuthor;
    }
  
    // Getter for cost
    get cost() {
      return this._cost;
    }
  
    // Setter for cost
    set cost(newCost) {
      this._cost = newCost;
    }
  
    // Getter for description
    get description() {
      return this._description;
    }
  
    // Setter for description
    set description(newDescription) {
      this._description = newDescription;
    }
  
    // Method to display book information
    displayInfo() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Cost: $${this.cost.toFixed(2)}`);
    }
  }
  export default Book;