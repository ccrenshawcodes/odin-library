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


let library = [];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBook(title, author, year, read) {
  library.push(new Book(title, author, year, read));
}

function removeBook (btn) {
    btn.addEventListener('click', () => {
      const dataIndex = Number(btn.parentElement.getAttribute('data-index'));
      library.splice(dataIndex, 1);
      btn.parentElement.remove();
    });
  }

function markRead (btn) {
btn.addEventListener('click', () => {
    const dataIndex = btn.parentElement.getAttribute('data-index');
    if (library[dataIndex].read === false){
        library[dataIndex].read = true;
        btn.textContent = 'Read';
        pastRead.appendChild(btn.parentElement);
    } else if (library[dataIndex].read === true) {
        library[dataIndex].read = false;
        btn.textContent = 'To read';
        tbr.appendChild(btn.parentElement);
    }
})
}

function mkDeleteBtn(parent) {
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'del');
    delBtn.append('Remove');
    parent.appendChild(delBtn);
    removeBook(delBtn);
}

function mkReadToggleBtn (parent, bool) {
    const readBtn = document.createElement('button');
    readBtn.setAttribute('class', 'mark-read');

    if (bool === true) {
        readBtn.append('Read');
    } else if (bool === false) {
        readBtn.append('To read');
    }
    
    parent.appendChild(readBtn);
    markRead(readBtn);
}

//display existing array items as cards
function displayItems() {
    library.forEach(item => {
        const card = document.createElement('div');
        card.setAttribute('data-index', `${library.indexOf(item)}`);
        card.append(`Title: ${item.title}\nAuthor: ${item.author}\nYear: ${item.year}`);
        mkReadToggleBtn(card, item.read);
        mkDeleteBtn(card);
        
        if(item.read === true){
            pastRead.appendChild(card);
        } else if (item.read === false) {
            tbr.appendChild(card);
        }
        
    })
}
displayItems();


//modal to appear when "add new book" is clicked
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    bkTitle.focus();
});

//modal to be hidden when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
});

function newCard() {
    const lastBook = library[library.length-1];
    const card = document.createElement('div');

    card.setAttribute('data-index', `${library.length-1}`);
    card.append(`Title: ${lastBook.title}\nAuthor: ${lastBook.author}\nYear: ${lastBook.year}`);
    mkReadToggleBtn(card, lastBook.read);
    mkDeleteBtn(card);
    
    if(lastBook.read === true){
        pastRead.appendChild(card);
    } else if (lastBook.read === false) {
        tbr.appendChild(card);
    }
}

//new card and book obj when "add" is clicked
addBtn.addEventListener('click', () => {
    addBook(bkTitle.value, bkAuthor.value, bkYear.value, bkRead.checked);
    newCard();
    modal.style.display = 'none';
    form.reset();
});

