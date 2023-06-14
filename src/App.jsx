import './App.css'
import './css/Modal.css'
import React from 'react'
import Notes from './views/Notes'
import Note from './views/Note'
import Home from './views/Home'
import AppLayout from './components/layouts/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter( [
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/notes',
        element: <Notes/>
      },
      {
        path: '/notes/:id',
        element: <Note/>
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App