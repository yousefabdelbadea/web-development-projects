import React from "react";
import Card from "../components/Card/Card";
import UseFetch from "../Hooks/useFetch";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";


export default function MovieList({apiPath}) {

const { data: movies } = UseFetch(apiPath);

return (
  <div className="bg-slate-800">
    <ScrollToTop/>
    <main>
      <section className="py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}                 
        </div>
      </section>
    </main>
  </div>
);
}

