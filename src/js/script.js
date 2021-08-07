{
  'use strict';

  const select = {
    templateOf: {
      books: '#template-book',
    },
    listOf: {
      booksList: '.books-list',
    },
  };
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };
   function render() {
    for (let bookData of dataSource.books) {
      const generatedHTML = templates.books(bookData);
      const element = utils.createDOMFromHTML(generatedHTML);
      const listOfBooks = document.querySelector(select.listOf.booksList);
      listOfBooks.appendChild(element);
    }
  }
  render();
  };
