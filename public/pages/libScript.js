const books = fetch('./books.json').then(async response => response.json()).then(livros=> livros.array.forEach(livro => {
    const li = document.createElement('li');
    li.className = 'book'
}))
console.log(books);
