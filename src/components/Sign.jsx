import axios from "axios";
import { Fragment, useState } from "react";

export default function Sign(props) {
    const [userData, setUserData]= useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
    })

    const inputHandler= e => {
        const name= e.target.name
        const value= e.target.value
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const formHandler= e => {
        e.preventDefault()
        if(props.type === 'signUp'){
            axios.post('http://localhost:3500/users', userData)
            window.location.reload()
        } else {
            fetch('http://localhost:3500/users')
            .then(response => response.json())
            .then(result => {
                const desireUser= result.find(user => user.email === userData.email && user.password === userData.password)

                if(desireUser){
                    localStorage.setItem('auth', JSON.stringify([{auth: true, userName: desireUser.userName}]))
                    window.location.href = "/"
                } else {
                    console.log('Try Again')
                }
            })
        }
    }
  return (
    <form onSubmit={formHandler} className="form">
        {
            props.type === 'signUp' &&  <Fragment>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Type your name" value={userData.userName} name="userName" onChange={inputHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" placeholder="Type your Phone number" value={userData.phone} name="phone" onChange={inputHandler} />
                </div>
            </Fragment>
        }
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="name@example.com" value={userData.email} name="email" onChange={inputHandler} />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Type your password" value={userData.password} name="password" onChange={inputHandler} />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
            {
                props.type === 'signIn' ? 'Sign In' : 'Sign Up'
            }
        </button>
    </form>
  )
}