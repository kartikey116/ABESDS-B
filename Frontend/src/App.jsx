import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/card.jsx'
import Count from './components/count1.jsx'
import Link1 from './components/Link1.jsx'
import Register from './components/Register.jsx'

function App() {
  return (
    <>
      {/* <Navbar />
      <div className="container">
        <Card 
          title="Sample Card"
          description="This is a sample card description"
          image="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
        />
        <Card
          name = "John Doe"
          edu = "BSc Computer Science"
        />

        <Count/> */}

        <Register />

    </>
  )
}

export default App