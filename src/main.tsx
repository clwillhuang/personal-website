import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Portfolio from './pages/Portfolio/Portfolio'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/experience',
    element: <Experience/>
  },
  {
    path: '/portfolio',
    element: <Portfolio/>
  },
  {
    path: '/project/:id',
    element: <Project/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
