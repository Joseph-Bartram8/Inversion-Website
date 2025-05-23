import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

import './App.css'
import SignUpPage from './pages/signup.tsx';


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />


        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>

      <Footer />
  </>
  )
}



export default App
