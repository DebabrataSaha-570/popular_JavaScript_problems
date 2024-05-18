// Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const fictionBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const bookListMaker = (booksData) => {
  if (Array.isArray(booksData)) {
    const booksNames = booksData.map((book) => book.title);
    return booksNames;
  } else {
    return "Please provide an array of objects that have title, author and year";
  }
};

const result = bookListMaker(fictionBooks);
console.log(result);
