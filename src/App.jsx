import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'
import AppLayout from './layout/Ui/AppLayout'
import Testimonials from './Pages/Testimonials'
import ContactForm from './Pages/ContactForm'
import SignUp from './Pages/SignUp'

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/project",
        element:<Project/>
      },
      {
        path:"/testimonials",
        element:<Testimonials/>
      },
      {
        path:"/contactForm",
        element:<ContactForm/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ]
  }
])
const App = () => {
  return (
   <RouterProvider router={router}>
   </RouterProvider>
  )
}

export default App
