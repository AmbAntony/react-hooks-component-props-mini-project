import React from "react";
import blogData from "../data/blog";



function App() {

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image="https://via.placeholder.com/215" about={blogData.about} />
      <ArticleList  posts={blogData.posts}    />
      
    </div>

  );
}

function Header({name}) {
  return(
  <header>
    <h1>{name}</h1>
  </header>
)}

function About({image, about}){
  return(
  <aside>
     <img alt="blog logo" src={image}/>
     <p>{about}</p>
  </aside>
)}


function ArticleList({posts}){

return(
<main>
  {posts.map((posts)=>(
  <Article key={posts.id} posts={posts}  />
))}
</main>
)}


function Article({posts}){
return(
<article>
  <h3>{posts.title}</h3>
  <small>{posts.date}</small>
  <p>{posts.preview}</p>
</article>
)}


export default App; 
