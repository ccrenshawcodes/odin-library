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

function addBook(title, author, year, read) {
  library.push(new Book(title, author, year, read));
}

const container = document.querySelector('.container');

function displayCards () {
    library.forEach(item => {
        const card = document.createElement('div');
        card.append(`Title: ${item.title}; Author: ${item.author}; Year: ${item.year}; Read? ${item.read}`);
        container.appendChild(card);
    })
}

displayCards();