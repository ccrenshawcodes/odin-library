const container = document.querySelector('.container');
const tbr = document.querySelector('.tbr');
const pastRead = document.querySelector('.read');

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

//remove card + library entry on delete button click
function removeBook (btn) {
    btn.addEventListener('click', () => {
      const dataIndex = Number(btn.parentElement.getAttribute('data-index'));
      library.splice(dataIndex, 1);
      btn.parentElement.remove();
    });
  }

//make a delete button in the DOM
function makeBtn(parent) {
    const mkBtn = document.createElement('button');
    mkBtn.setAttribute('class', 'del');
    mkBtn.append('Remove');
    parent.appendChild(mkBtn);
    removeBook(mkBtn);
}

//display array items as cards
function displayItems() {
    library.forEach(item => {
        const card = document.createElement('div');
        card.setAttribute('data-index', `${library.indexOf(item)}`);
        card.append(`Title:\n${item.title}\nAuthor:\n${item.author}\nYear:\n${item.year}`);
        makeBtn(card);
        
        if(item.read === true){
            pastRead.appendChild(card);
        } else if (item.read === false) {
            tbr.appendChild(card);
        }
        
    })
}
//I don't think this will be needed in the final product?
displayItems();


//modal to appear when "add new book" is clicked
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
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
    card.append(`Title:\n${lastBook.title}\nAuthor:\n${lastBook.author}\nYear:\n${lastBook.year}`);
    makeBtn(card);
    
    if(lastBook.read === true){
        pastRead.appendChild(card);
    } else if (lastBook.read === false) {
        tbr.appendChild(card);
    }

    modal.style.display = 'none';
    form.reset();
});

