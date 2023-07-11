import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Feedback from '../components/Feedback'
import axios from 'axios'

export default function ImageDetail() {
  const [image, setImage]= useState({})
  const [feedback, setFeedback]= useState([])
  const [isAuth, setIsAuth]= useState(false)
  const params= useParams()

  useEffect(()=>{
    fetch('http://localhost:3500/gallery')
    .then(response => response.json())
    .then(result => {
      setImage(result.find(item => item.id === +params.id))
    })
    fetch('http://localhost:3500/feedback')
    .then(response => response.json())
    .then(result => {
      const filteredFeedback= result.filter(item => item.PostId === params.id)
      setFeedback(filteredFeedback)
    })

    const user= JSON.parse(localStorage.getItem('auth'))

    if(user){
      setIsAuth(user)
    }

  }, [params])

  const formHandler= (e) => {
    e.preventDefault()
    const userFeedback= {
      author: isAuth[0].userName,
      comment: e.target[0].value,
      PostId: params.id
    }
    axios.post('http://localhost:3500/feedback', userFeedback)
    window.location.reload()
  }

  return (
    <Fragment>
        <div className='my-5 border bg-white p-4' style={{maxWidth: '1200px', margin: 'auto'}}>
          <a href='/'>Back</a>
          <br /><br />
          <img src={image.imgLink} style={{width: '100%'}} />
          <br /><br />
          <h3 className='text-success'>{image.name}</h3>
          <h5 className='text-dark'>category: {image.category}</h5>
        </div>
        <div className='mb-5 border bg-white p-4' style={{maxWidth: '1200px', margin: 'auto'}}>
          <h4>Feedback</h4><hr />
          {
            isAuth &&  <Fragment>
              <form className="my-3" style={{backgroundColor: 'transparent', width: '100%', border: 'none'}} onSubmit={formHandler}>
                <textarea className="form-control mb-3" rows="3" placeholder='Your Feedback'></textarea>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form><br />
            </Fragment>
          }
          
          {
            feedback.length > 0 ? <Feedback feedback={feedback} /> : <p className='text-center text-danger'>There is no Feedback</p>
          }
        </div>
    </Fragment>
  )
}
