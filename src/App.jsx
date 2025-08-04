import { useState } from 'react'
import './App.css'

const posts = [
    {
      id: 1,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      id: 2,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    },
    {
      id: 3,
      author: "Lorem Ipsum",
      title: "What is Lorem Ipsum?",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    }
  ]


function App() {
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");


  const [postsData, setPostsData] = useState(posts)



  const handleDelete = (id) => {
    const updatedPosts = postsData.filter((item) => item.id !== id);
  setPostsData(updatedPosts);
  }

  const handleSubmit = (event) => {
  event.preventDefault();

  setPostsData(prevPostsData =>  [
    ...prevPostsData, 
    {
      title,
      content,      
      author
    }
  ]);
}


  return (
    <>
      <div>

        {postsData.map((post, index) => (
          <div className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}

      </div>


      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="">Title</label>
          <input type="text" 

          // We receive data for every event.
          onChange={(event) => 

            // And we add to this state
            setTitle(event.target.value)
          }
          />
        </div>

        <div>
          <label htmlFor="">Content</label>
          <input type="text" 

          // We receive data for every event.
          onChange={(event) => 

            // And we add to this state
            setContent(event.target.value)
          }
          />
        </div>

        <div>
          <label htmlFor="">Author</label>
          <input type="text" 

          // We receive data for every event.
          onChange={(event) => 

            // And we add to this state
            setAuthor(event.target.value)
          }
          />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default App
