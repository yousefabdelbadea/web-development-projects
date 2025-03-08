import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Layout from "./components/Layout/Layout";



function App() {
  
  let router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      { path: "/", element: <MovieList apiPath="movie/now_playing" /> },
      { path: "movie/:id", element: <MovieDetail /> },
      { path: "movies/popular", element: <MovieList apiPath="movie/popular" /> },
      { path: "movies/top", element: <MovieList apiPath="movie/top_rated" /> },
      { path: "movies/upcoming", element: <MovieList apiPath="movie/upcoming" /> },
      { path: "search", element: <Search apiPath="search/movie" /> },
      { path: "*", element: <PageNotFound /> }
    ]}
  ]);
  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  );
}

export default App;