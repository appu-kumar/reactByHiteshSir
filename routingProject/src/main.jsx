
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Header/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Footer/Footer.jsx'
import ContactUs from './components/Header/ContactUs.jsx'
import About from './components/Header/About.jsx'
import User from './components/Users/User.jsx';
import UserContextProvider from './components/UserContextProvider.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './components/Header/Login.jsx'
import Profile from './components/Header/Profile.jsx'

// routing structure yehi se complilation start hogi pehele "/" jayega then ""
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home />}>

    </Route>
    <Route path="footer" element={<Footer />}>

    </Route>
    <Route path="header" element={<Header />}>

    </Route>

    <Route path="contactus" element={<ContactUs />}>

    </Route>
    <Route path="about" element={<About />}>

    </Route>

    <Route path="user/:userId" element={<User />}>

    </Route>
    <Route path="login" element={<Login />}>

    </Route>
    <Route path="profile" element={<Profile />}>

    </Route>


  </Route>
))
createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>


)
