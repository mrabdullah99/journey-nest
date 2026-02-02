import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="journeys" element={<Journeys/>}/>
//       <Route path="blog" element={<Blog/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="login" element={<Login/>}/>
//       <Route path="signup" element={<SignUp/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </StrictMode>,
)
