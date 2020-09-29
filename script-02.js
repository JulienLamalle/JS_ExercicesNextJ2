const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Sors-moi la liste des titres des livres du CDI

const titleOfAllBooks = books.map(book => ({
  title: book.title
}));

console.log(titleOfAllBooks)

// Est-ce que tous les livres ont été au moins empruntés une fois ?

const rentedOnceTime = books.filter(book => book.rented > 0)

console.log(`il y'a ${books.length} livres et ${rentedOnceTime.length} ont été loué au mois une fois`)


// Quel est livre le plus emprunté ?

let mostRented = books.reduce(function (prev, current) {
  return (prev.rented > current.rented) ? prev : current
});

console.log(`Le livre le plus emprunté est: ${mostRented.title}`)

// Quel est le livre le moins emprunté ?

let leastRented = books.reduce(function (prev, current) {
  return (prev.rented > current.rented) ? current : prev
});

console.log(`Le livre le moins emprunté est: ${leastRented.title}`)

// Supprime le livre avec l'ID: 133712

const removeIndex = books.map(function(book) { return book.id; }).indexOf(133712);
console.log(books.splice(removeIndex, 1))

let withoutOneBook = books.map(book => ({
  title: book.title,
  id: book.id,
  rented: book.rented
}));

console.log(withoutOneBook)
