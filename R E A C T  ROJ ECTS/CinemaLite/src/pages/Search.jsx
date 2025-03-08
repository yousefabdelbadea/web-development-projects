import { useSearchParams } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card/Card";
import UseFetch from "../Hooks/useFetch";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = UseFetch(apiPath,queryTerm);

  return (
    <div className="bg-slate-800">
      <ScrollToTop/>
      <main>
        <section className="py-7">
          <p className="text-3xl text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` :`Result for '${queryTerm}'` }</p>
        </section>
        <section className="py-7">
          <div className="flex justify-start flex-wrap">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
