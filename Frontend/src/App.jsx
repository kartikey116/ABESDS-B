import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/card.jsx'
import Count from './components/count1.jsx'
import Link1 from './components/Link1.jsx'
import Register from './components/Register.jsx'
import Fashion from './components/Fashion.jsx'

import Weather from './components/Weather.jsx'
function App() {
  const [book , setBook] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => setBook(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])


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

        {/* <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: 16
          }}
        >
          {book.map((p) => (
            <Fashion key={p.id} image={p.image} title={p.title} price={p.price} />
          ))}
        </div> */}


        <Weather/>
    </>
  )
}

export default App