import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Recipe() {
  const recipe = {
    name: "Жарена людятина з овочами",
    ingredients: [
      { name: "Свыжа людятина", quantity: "500 г" },
      { name: "Соняшникова олія", quantity: "2 ст. ложки" },
      { name: "Цибуля", quantity: "1 шт" },
      { name: "Морква", quantity: "2 шт" },
      { name: "Солодкий перець", quantity: "1 шт" },
      { name: "Гриби", quantity: "200 г" },
      { name: "Приправи", quantity: "По смаку" },
    ],
    instructions: [
    {text: "Промийте людину в холодній воді, потім маринуйте її, змішавши з соєвим соусом, часником та імбиром (за бажанням). Дайте м'ясу просочитись у маринаді хоча б 30 хвилин."},
    {text: "Розігрійте сковороду з олією на середньому вогні. Викладіть цибулину і смажте, поки вона стане прозорою і м’якою."},
    {text: "Додайте моркву та перець, продовжуйте смажити, поки овочі не стануть м’якими, але при цьому залишаться хрусткими."},
    {text: "Перекладіть овочі на тарілку, а на сковороду додайте гриби. Смажте гриби до готовності. 5. Выньте грибы и поставьте их рядом с овощами."},
    {text: "Вийміть гриби і поставте їх поряд з овочами."},
    {text: "На цьому ж сковорідці смажте мариновану людину до золотистої скоринки. Не пересмажуйте, щоб зберегти соковитість м'яса. При необхідності регулюйте температуру вогню."},
    {text: "Посоліть і поперчіть смажену людину до смаку."},
    {text: "Перенесіть м'ясо на тарілку, поряд з овочами та грибами."},
    {text: "Подавайте смажену людину з гарячими овочами."},
  ],
    image: "https://www.gotovim.ru/pics/news/3181.jpg"
  };

  return (
    <>
     <div className="recipe-info">
      <h2>{recipe.name}</h2>
      <h3>Інгредієнти:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}: {ingredient.quantity}</li>
        ))}
      </ul>
      <h3>Приготування:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step.text}</li>
        ))}
      </ol>
      <img src={recipe.image} alt={recipe.name} />
    </div> 
    </>
  )
}

export default Recipe
