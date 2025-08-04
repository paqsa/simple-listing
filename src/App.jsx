import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      id: 1,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    }
  ]

  return (
    <>
      <div>
        <h1>ass</h1>
        <h1>lorem</h1>
      </div>
    </>
  )
}

export default App
