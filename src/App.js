import React, { useState, useEffect } from "react";
import "./App.css";
import { Articles_API_KEY } from "./Constants/Constants";
import { SearchForm } from "./SearchForm";

const App = () => {
  const [value, setValue] = useState([]);
  const [term, setTerm] = useState("everything");
  const [isLoading, setisloading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${term}&apiKey=${Articles_API_KEY}`
        );
       
        const result = await res.json()
        console.log(result.articles);
        setValue(result.articles);
        setisloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  },[term]);

  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1 className="text-4x1 font-bold text-white text-center mb-4 lg:text-6xl">Viewing articles about...{term}</h1>
         <SearchForm searchText={(text)=> setTerm(text)}/>
        </div>

      </div>
       {isLoading ? <h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1> : <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
        {value.map((article) => {
          const {
            title,
            content,
            description,
            author,
            url,
            publishedAt,
                        id,
          } = article;

          return (
            <article key={id} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
              <h2 className="font-bold text-2x1 mb-5 lg:text-4xl">{title}</h2>
              <p>{description}</p>
            
              <p>{content}</p>
              <ul className="my-4">
               <li> by: {author}</li>
                <li><span className="font-bold"> Published at: {publishedAt}</span></li>
              </ul>
              <a href={url} target="_blank" className="text-blue-600">
                Read more ...
              </a>
            </article>
          );
        })}
      </section>}
         </>
  );
};

export default App;

