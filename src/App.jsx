import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import ResDetails from './components/ResPage'

import { Provider } from 'react-redux'
import { store } from './store/store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={`/resDetails/:id`} element={<ResDetails />} />
          <Route path={`/cart`} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
