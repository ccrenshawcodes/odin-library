const container = document.querySelector('.container');
const openModal = document.querySelector('.open');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const addBtn = document.querySelector('.add');

const form = document.querySelector('form');
let bkTitle = document.querySelector('#title');
let bkAuthor = document.querySelector('#author');
let bkYear = document.querySelector('#year');
let bkRead = document.querySelector('#read');



let library = [
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
        read: true,
    },

    {     
        title: 'The Giver',
        author: 'Lois Lowry',
        year: 1993,
        read: true,
    },

    {
        title: 'Dune',
        author: 'Frank Herbert',
        year: 1965,
        read: false,
    },
];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

//add an object to the library array
function addBook(title, author, year, read) {
  library.push(new Book(title, author, year, read));
}

//make a button in the DOM
function makeBtn(parent) {
    const mkBtn = document.createElement('button');
    mkBtn.setAttribute('class', 'del');
    mkBtn.append('Delete button');
    parent.appendChild(mkBtn);
}

//display array items as cards
function displayItems() {
    library.forEach(item => {
        const card = document.createElement('div');
        card.setAttribute('data-index', `${library.indexOf(item)}`);
        card.append(`Title: ${item.title}; Author: ${item.author}; Year: ${item.year}; Read? ${item.read}`);
        makeBtn(card);
        container.appendChild(card);
        
    })
}
//I don't think this will be needed in the final product?
displayItems();


//modal to appear when "add new book" is clicked
openModal.addEventListener('click', () => {
    modal.style.display = 'inline-block';
});

//modal to be hidden when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
});

//form data to be added to the array when "add" is clicked
//new card to be created, display data from latest array item
addBtn.addEventListener('click', () => {
    addBook(bkTitle.value, bkAuthor.value, bkYear.value, bkRead.checked);

    const lastBook = library[library.length-1];
    const card = document.createElement('div');

    card.setAttribute('data-index', `${library.length-1}`);
    card.append(`Title: ${lastBook.title}; Author: ${lastBook.author}; Year: ${lastBook.year}; Read? ${lastBook.read}`);
    makeBtn(card);
    container.appendChild(card);

    modal.style.display = 'none';
    form.reset();
});

