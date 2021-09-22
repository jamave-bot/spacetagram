import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header'
import Post from './Components/Post';


function App() {

  const API_KEY = process.env.REACT_APP_NASA_KEY 
  const [postArray, setPostArray] = useState([])


  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res=>res.json())
      .then(data =>{
        setPostArray([data])
      })
      // eslint-disable-next-line
  }, [])


  console.log(postArray)

  const showPosts = () =>{
    return postArray.map(post=>{
      console.log(post)
      return <Post post={post}/>
    })
  }

  return (
    <div className="App">
      <Header />
      {showPosts()}
      {/* <Post post={postArray[0]}/> */}
    </div>
  );
}

export default App;
