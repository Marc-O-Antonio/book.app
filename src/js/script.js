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

  const filters = [];
  console.log('filters', filters)
  const filter = document.querySelector('.filters')
  console.log('filter', filter)

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
        const image = event.target.offsetParent;
        console.log('image', image)
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
    filter.addEventListener('change', function(event){
      event.preventDefault();
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox'  && event.target.name==='filter') {
        if (event.target.checked) {
          filters.push(event.target.value);
          console.log('sprawdź co zostało kliknięte:', event.target.value);
        } else {
          filters.splice(filters.indexOf(event.target.value));
          console.log('sprawdź co zostało kliknięte:', event.target.value);
        }
        console.log('sprawdż zawartośc tablicy filters', filters)
      }
      bookFilter()
    });
    function bookFilter() {
      for (let book of dataSource.books) {
        let shouldBeHidden = false;
        for (const filter of filters) {
          if (!book.details[filter] === true) {
            shouldBeHidden = true;
            break;
          }
        }
        const bookCover = document.querySelector('.book__image[data-id="' + book.id + '"]');
        if (shouldBeHidden) {
          bookCover.classList.add('hidden');
        } else {
          bookCover.classList.remove('hidden');
        }
      }
    }
  }

  initActions();
}
