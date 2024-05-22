import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function group() {
  const band = {
    name: "Red Hot Chili Peppers",
    members: ["Ентоні Кідіс", "Джон Фрушанте", "Флі","Дейв Наварро","Хіллел Словак"],
    albums: [
      {
        title: "Californication",
        cover: "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"
      },
      {
        title: "Blood Sugar Sex Magik",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/RHCP-BSSM.jpg"
      },
      {
        title: "Mother’s Milk",
        cover: "https://upload.wikimedia.org/wikipedia/en/9/98/Mother%27sMilkAlbumcover.jpg"
      }
    ]
  };

  return (
    <>
      <div className="band-info">
      <h2>{band.name}</h2>
      <h3>Учасники групи:</h3>
      <ul>
        {band.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <h3>Альбоми:</h3>
      <div className="albums">
        {band.albums.map((album, index) => (
          <div key={index} className="album">
            <img src={album.cover} alt={album.title} />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default group
