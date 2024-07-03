import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import DashboardLayout from "./layouts/DashboardLayout";
import Person from "./pages/Person/Person";
import Tv from "./pages/Tv/Tv";
import Context from "./components/Context/Context";
import MovivesDb from "./pages/Movies/MoviesDb";
import TvNews from "./pages/Tv/TvNews";
import People from "./pages/Person/People";
import Search from "./pages/Search/Search";
import NowPlaying from "./pages/Movies/Nowplaying";
import TopRated from "./pages/Movies/Toprated";
import Upcoming from "./pages/Movies/Upcoming";
import OnTV from "./pages/Tv/Ontv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/now_playing" element={<NowPlaying />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/movies/top_rated" element={<TopRated />} />
          <Route path="/tv" element={<Tv />} /> 
          <Route path="/tv/on-the-air" element={<OnTV />} />
          <Route path="/people" element={<Person />} />
          <Route path="/more" element={<Tv />} />
          <Route path="/movie/:id" element={<MovivesDb />} />
          <Route path="/tv/:id" element={<TvNews />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Context>
);
