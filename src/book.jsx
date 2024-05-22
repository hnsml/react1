import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Book() {

  const book = {
    title: "Томіе",
    author: "Джундзі Іто",
    genre: "Жахи",
    pages: 377,
    reviews: [
      "Чудова книга, рекомендую!",
      "Дуже цікавий сюжет та багато різних історій і крові!",
      "Автор дуже талановито описує персонажа і дуже добре показує її органи."
    ]
  };

  return (
    <>
       <div className="book-info">
      <h2>{book.title}</h2>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p><strong>Кількість сторінок:</strong> {book.pages}</p>
      <h3>Рецензії:</h3>
      <ul>
        {book.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Book
