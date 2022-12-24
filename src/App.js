import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import { useState, useEffect } from "react";

function App() {
  // Creating state variables using useState Hooks :
  // "animeList" variable will be used for the searched anime
  // "topAnime" variable will be used for all the popular anime
  // "search" variable will be used for search terms
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  // Fetching top anime (by popularity) from jikan API
  // In place of simple fetch method you can axios library
  // async function is used so don't to the keyword await
  const getTopAnime = async () => {
    const data = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=1"
    ).then((res) => res.json());
    setTopAnime(data.data);
  };
  // handle search button
  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  // handle category buttons
  const handleCategory = (category_data) => {
    // setCategory(category_data);
    setToggleSearch(false);
    category_data === "movie"
      ? fetchAnimeMovie(category_data)
      : fetchAnimeByCategory(category_data);
  };
  // Fetching searched anime from jikan API
  const fetchAnime = async (anime_name) => {
    const data = await fetch(
      `https://api.jikan.moe/v4/anime?q=${anime_name}&order_by=title&sort=asc&sfw=true&letter=${anime_name}&limit=40`
    ).then((res) => res.json());
    setAnimeList(data.data);
  };
  // Fetching searched anime movie from jikan API
  const fetchAnimeMovie = async (anime_movie) => {
    const data = await fetch(
      `https://api.jikan.moe/v4/top/anime?type=${anime_movie}`
    ).then((res) => res.json());
    setAnimeList(data.data);
  };

  // Fetching searched anime from jikan API
  const fetchAnimeByCategory = async (anime_category) => {
    const data = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=${anime_category}&page=1`
    ).then((res) => res.json());
    console.log(data.data);
    setAnimeList(data.data);
  };

  // get getTopAnime() as the site render useEffect is used
  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Home
          // passing props to the Home Component
          handleSearch={handleSearch}
          handleCategory={handleCategory}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
          setAnimeList={setAnimeList}
          topAnime={topAnime}
          
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />
        <Footer />
      </div>
    </>
  );
}
export default App;
