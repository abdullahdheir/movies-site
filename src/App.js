import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import getPage from "./Operations/getPage";
import { Url, UrlWithPage } from "./config";
import getAllMovies from "./Operations/getAllMovie";
import search from "./Operations/search";

function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setpageCount] = useState(1)


  useEffect(() => {
    getAllMovies(Url, setpageCount, setMovies)
    getPage(`${ UrlWithPage }${ pageCount }`, setpageCount, setMovies)
  }, []);
  return (
    <div className="font color-body ">
      <NavBar search={search} setPageCount={setpageCount} setMovie={setMovies}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} setpagecount={setpageCount} setmovies={setMovies} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
