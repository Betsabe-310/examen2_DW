import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  let [ posts, setPosts ] = useState([{
    "author": "--",
    "title": "--",
    "description": "--",
    "url": "--",
    "publishedAt": "--",
    "content": "--",
}]);

  useEffect(() => {
    const getResults = async() =>{
      await axios("https://newsapi.org/v2/top-headlines?q=war&apiKey=e52e187dd3c848ff9aa0da5f007a8590")
      .then(response=>{
        setPosts(response.data.articles);
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
    getResults();
  },[{
    "author": "--",
    "title": "--",
    "description": "--",
    "url": "--",
    "publishedAt": "--",
    "content": "--",
}])
  console.log(posts)

  return (
    <div className="App">
      <h1>Marta Betsabe Núñez Ibáñez</h1>
      <h2>Desarrollo Web</h2>
      <table>
        <tr>
          <th>Autor</th>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>URL</th>
          <th>Fecha</th>
          <th>Contenido</th>
        </tr>
        {posts.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.author}</td>
              <td>{val.title}</td>
              <td>{val.description}</td>
              <td>{val.url}</td>
              <td>{val.publishedAt}</td>
              <td>{val.content}</td>
            </tr>
          )
        })}
      </table>
    </div>
    
  );
}

export default App;