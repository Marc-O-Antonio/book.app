{
  'use strict';

  const select = {
    templateOf: {
      books: '#template-book',
    },
    listOf: {
      booksList: '.books-list',
    },
    booksCover: {
      images: '.books-list .book__image',
    }
  };
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };
  const classNames = {
    books: {
      favoriteBook: 'favorite',
    }
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

  const favoriteBooks = [];
  console.log('favoriteBooks', favoriteBooks);

  function initActions(){
    const containerOfBooks = document.querySelector(select.listOf.booksList);
    console.log('containerOfBooks', containerOfBooks);
    const booksImage = containerOfBooks.querySelectorAll('.book__image');
    console.log('booksImaga', booksImage);
    for (let image of booksImage){
      console.log('image', image);
      image.addEventListener(/*'dblclick'*/ 'click', function (event){
        event.preventDefault();
        //image.classList.add('favorite');
        const idBook = image.getAttribute('data-id');
        //favoriteBooks.push(idBook);
        console.log('idBook', idBook);
        //console.log('favoriteBooks', favoriteBooks);
        /* task 3*/
        if(!favoriteBooks.includes(idBook)){
          image.classList.add(classNames.books.favoriteBook);
          favoriteBooks.push(idBook);
        } else {
          image.classList.remove(classNames.books.favoriteBook);
          favoriteBooks.splice(favoriteBooks.indexOf(idBook), 1);
        }
        console.log('idBook', idBook);
        console.log('favoriteBooks', favoriteBooks);
      });
    }
  }
  initActions();
}
