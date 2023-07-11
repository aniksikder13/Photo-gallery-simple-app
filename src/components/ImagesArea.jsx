import { useState } from "react"
import { useEffect } from "react"

export default function ImageArea({category}) {
    const [gallery, setGallery]= useState([])

    useEffect(()=> {
        fetch('http://localhost:3500/gallery')
        .then(response => response.json())
        .then(result => setGallery(result))
        .catch( err => console.log(err))
    },[])

    let selectedCategory= []

    if(category === 'city') {
      selectedCategory= gallery.filter(item => item.category === 'city')
    } else if(category === 'beach') {
      selectedCategory= gallery.filter(item => item.category === 'beach')
    } else if(category === 'village') {
      selectedCategory= gallery.filter(item => item.category === 'village')
    } else {
      selectedCategory= [...gallery]
    }

  return (
    <ul className="gallery">
        {
            selectedCategory.map(item => (<li key={item.id} className="card" style={{width: '17rem'}}>
                <a href={`/gallery/image/${item.id}`}>
                  <div className="img-cover" style={{backgroundImage: `url(${item.imgLink})`}}></div>
                </a>
                <div className="card-body">
                  <p className="card-text">
                    <a href={`/gallery/image/${item.id}`}>{item.name}</a>
                  </p>
                </div>
            </li>))
        }
    </ul>
  )
}