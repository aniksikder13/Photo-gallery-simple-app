import { useEffect, useState } from "react"

export default function Header() {
    const [isAuth, setIsAuth]= useState(false)
    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem('auth'))
        if(user){
            setIsAuth(true)
        }
        
    },[])
    const logoutFn= () => {
        localStorage.removeItem('auth')
        window.location.href= '/'
    }
  return (
    <header>
        <ul>
            <li>
                <h4>
                    <a href="/">Photo Gallery</a>
                </h4>
            </li>
            <li>
                {
                    isAuth ? <button className="btn btn-danger" onClick={logoutFn}>Logout</button> : <a href="/auth">Login / Register</a>
                }
            </li>
        </ul>
    </header>
  )
}
