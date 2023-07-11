import Gallery from './pages/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './pages/auth'
import ImageDetail from './pages/ImageDetail'
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom'
import './App.css'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/gallery/image/:id' element={<ImageDetail />} />
            <Route path='*' element={<Navigate to='/gallery' />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
