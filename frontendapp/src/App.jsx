
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./components/About"
import { Routes,Route } from "react-router-dom"
import Contact from "./components/Contact"
import RegistrationForm from "./components/RegistrationForm"
import Login from "./components/Login"
import ProductDetails from "./components/ProductDetails"
import ProfileDashboard from "./components/ProfileDash"
import MyCart from "./components/MyCart"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/profile" element={<ProfileDashboard/>}/>

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<MyCart/>}/>


      </Routes>
      
      <Footer/>
      
    </div>
  )
}

export default App
