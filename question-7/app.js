// app.js

// Book Constructor Function
function Book(title, author, year) {
    this.title = title; // Title of the book
    this.author = author; // Author of the book
    this.year = year; // Year the book was published
  }
  
  // Method to get a summary of the book
  Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
  
  // Create an array of Book instances
  const books = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("Moby Dick", "Herman Melville", 1851),
  ];
  
  // Use Array.prototype.map to create an array of book summaries
  const bookSummaries = books.map(book => book.getSummary());
  
  // Log the array of book summaries to the console
  console.log(bookSummaries);
  