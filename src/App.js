import React from 'react'
import Posts from './Pages/Posts/Posts'
import Post from './Pages/Post/Post'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Posts />} />
      <Route path='/post/:id' element={ <Post />} />
   
    </Routes>
  )
}

export default App
